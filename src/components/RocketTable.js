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
                    <th>Name</th>
                    <th>Launch Date</th>
                </tr>
                </thead>
                <tbody>
                    { 
                    this.props.rockets.map ( 
                    rocket => (
                    <tr>
                        <th scope="row">{ rocket.name }</th>
                        <td>ohh</td>
                    </tr>)
                    )
                    }
                </tbody>
            </Table>
      </div>
    );
  }
}