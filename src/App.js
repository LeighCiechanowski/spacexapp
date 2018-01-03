import React, { Component } from 'react';
import { Jumbotron, Button, Fade } from 'reactstrap';
import Navigation from './components/Navigation';
import LaunchTableContainer from './containers/LaunchTable';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Fade in={true}>
          <Jumbotron>
            <h1 className="display-3">Hello World</h1>
            <p className="lead">lorem ipsum etc etc</p>
            <hr className="my-2" />
            <p>sdfds sddsgds dsdsgdgbg</p>
          </Jumbotron>
        </Fade>
      </div>
    );
  }
}

export default App;
