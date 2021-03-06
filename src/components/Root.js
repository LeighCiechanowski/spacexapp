import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from '../App'
import RocketTableContainer from '../containers/RocketTable'
import LaunchTableContainer from '../containers/LaunchTable'
import LatestLaunchTableContainer from '../containers/LatestLaunchTable'
import LaunchContainer from '../containers/Launch'
import RocketDisplayContainer from '../containers/RocketDisplay'
import Navigation from '../components/Navigation';
import MasonryTest from '../components/masonrytest';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
        <div>
          <Navigation />
          <Route exact path="/" component={App} />
          <Route exact path="/launches" component={LaunchTableContainer} />
          <Route exact path="/latest-launches" component={LatestLaunchTableContainer} />
          <Route excat path="/launches/:id" component={LaunchContainer} /> 
          <Route exact path="/rockets" component={RocketTableContainer} /> 
          <Route exact path="/rockets/:id" component={RocketDisplayContainer} /> 
          <Route exact path="/masonry" component={MasonryTest} />
        </div>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root