import React from 'react';
import { Table, Alert, Fade } from 'reactstrap';
import Navigation from '../components/Navigation';

export default class Launch extends React.Component {
  componentWillMount() {
    this.props.getLaunches();
  }
  renderTable() {
    if (this.props.itemsHasErrored) {
      return <Alert color="danger">{this.props.hmm}Sorry! There was an error loading the items</Alert>;
    }
    else {
      return (
        <div>
          <h1>Launch ID {this.props.hmm}</h1>
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