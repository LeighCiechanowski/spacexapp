import React from 'react';
import { Table } from 'reactstrap';
import Navigation from '../components/Navigation';

export default class RocketDisplay extends React.Component {
  componentWillMount() {
    this.props.getRocket();
  }
  render() {
    if (this.props.rocketHasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }
    return (
        <div>
        <div>{ this.props.rocket.name }</div>
        <div>{ this.props.rocket.stages }</div>
        <div>{ this.props.rocket.name }</div>
        <div>{ this.props.rocket.cost_per_launch }</div>
        <div>{ this.props.rocket.success_rate_pct }</div>
        <div>{ this.props.rocket.description }</div>

           
      </div>
    );
  }
}