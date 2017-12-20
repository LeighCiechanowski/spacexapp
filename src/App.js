import React, { Component } from 'react';
import Navigation from './components/Navigation';
import LaunchTable from './components/LaunchTable';

const launches = [
  {
    FlightNumber: "54",
    Date: "3/01/2018",
    Rocket: "Falcon Heavy",
    LaunchPad: "Cape"

  },
  {
    FlightNumber: "55",
    Date: "12/02/2018",
    Rocket: "Falcon",
    LaunchPad: "Space City"
  }
];

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <LaunchTable launches={launches} />
      </div>
    );
  }
}

export default App;
