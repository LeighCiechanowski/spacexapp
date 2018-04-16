import React from 'react';
import { Table, Alert, Fade, Card, CardTitle, Row, Col, ListGroup, ListGroupItem, Badge, Container, ListGroupItemHeading, Button } from 'reactstrap';
import Navigation from '../components/Navigation';
import LaunchPopover from '../components/LaunchPopOver';
import LaunchesSummaryListGroupContainer from '../containers/LaunchesSummaryListGroup';

export default class LaunchTable extends React.Component {
  constructor(props) {
    super(props);
    this.props.getLaunches();
  }
  renderTable() {
    if(this.props.launchesIsLoading) {
      return(<div>LOADING</div>)
    }
    if (this.props.launchesHasErrored) {
      return <Alert color="danger">How embarassing.... we see to have hit a problem.</Alert>;
    }
    if (this.props.filteredLaunches.length == 0) {
      return <Alert color="info">Sorry old bean we couldn't find any launches which match what you are looking for</Alert>;
    }
    else {   
      return (
        <div>
          <Table hover>
            <thead>
              <tr key="header">
                <th>Flight No.</th>
                <th>Launch Date</th>
                <th>Rocket</th>
                <th>Launch Pad</th>
              </tr>
            </thead>
            <tbody>
                { 
                  this.props.filteredLaunches.map ( 
                  (launch, index) => (
                  <tr key={ launch.flight_number }>
                    <th scope="row"><LaunchPopover flight={ launch.flight_number } details={ launch.details } /></th>
                    <td>{ launch.launch_date_utc }</td>
                    <td>{ launch.rocket.rocket_name }</td>
                    <td>{ launch.launch_site.site_name_long }</td>
                  </tr>)
                  )
                }
            </tbody>
          </Table>
        </div>
      )
    }
  }
  render() {
    return(
      <div>
        <Container>
          <Row>
            <Col xs="3">
            <LaunchesSummaryListGroupContainer />
           </Col>
            <Col xs="9">
              <Card body>
            
            <Fade in={true}>
              { this.renderTable() }
            </Fade>
          </Card>
            </Col>
          </Row>
        </Container> 
      </div>
    );
  }
}