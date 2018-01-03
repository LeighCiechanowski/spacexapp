import React from 'react';
import { Table, Alert, Fade } from 'reactstrap';
import Navigation from '../components/Navigation';

export default class LatestLaunchTable extends React.Component {
  componentWillMount() {
    this.props.getLatestLaunches();
  }
  renderTable() {
    if (this.props.latestLaunchesHasErrored) {
      return <Alert color="danger">Sorry! There was an error loading the items</Alert>;
    }
    else {
      return (
        <div>
          <Table hover>
            <thead>
              <tr>
                <th>Flight No.</th>
                <th>Launch Date</th>
                <th>Rocket</th>
                <th>Launch Pad</th>
              </tr>
            </thead>
            <tbody>
                { 
                  this.props.latestLaunches.map ( 
                  launch => (
                  <tr>
                    <th scope="row">{ launch.flight_number }</th>
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
        <Navigation />
        <Fade in={true}>
          { this.renderTable() }
        </Fade>
      </div>
    );
  }
}