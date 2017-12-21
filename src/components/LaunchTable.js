import React from 'react';
import { Table } from 'reactstrap';

export default class LaunchTable extends React.Component {
  componentWillMount() {
    this.props.loadLaunches();
  }
  render() {
    if (this.props.itemsHasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }
    return (
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
              this.props.launches.map ( 
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
    );
  }
}