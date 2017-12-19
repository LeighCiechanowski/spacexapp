import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Navigation from './components/Navigation'

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Button color="primary">primary</Button>{' '}
      </div>
    );
  }
}

export default App;
