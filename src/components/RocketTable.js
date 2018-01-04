import React from 'react';
import { Table } from 'reactstrap';
import Navigation from '../components/Navigation';

export default class RocketTable extends React.Component {
  componentWillMount() {
    this.props.getRockets();
  }
  render() {
    if (this.props.rocketsHasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }
    return (
        <div>
        <Navigation />
            <Table hover>
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Active</th>
                    <th>No. Stages</th>
                    <th>No. Boosters</th>
                    <th>Cost Per Launch</th>
                    <th>Success Rate</th>
                </tr>
                </thead>
                <tbody>
                    { 
                    this.props.rockets.map ( 
                    rocket => (
                    <tr>
                        <th><a href={ "/rockets/" + rocket.id }>View</a></th>
                        <td scope="row">{ rocket.name }</td>
                        <td scope="row">{ rocket.active }</td>
                        <td scope="row">{ rocket.stages }</td>
                        <td scope="row">{ rocket.boosters }</td>
                        <td scope="row">${ rocket.cost_per_launch }</td>
                        <td scope="row">{ rocket.success_rate_pct }%</td>
                    </tr>)
                    )
                    }
                </tbody>
            </Table>
      </div>
    );
  }
}