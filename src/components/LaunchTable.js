import React from 'react';
import { Table } from 'reactstrap';

export default class LaunchTable extends React.Component {
  render() {
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
          <tr>
            <th scope="row">1</th>
            <td>12/01/2018</td>
            <td>Falcon 9</td>
            <td>Kenedy</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>17/06/2018</td>
            <td>Falcon 9</td>
            <td>SpaceX</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>02/08/2018</td>
            <td>Falcon Heavy</td>
            <td>Space Road</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}