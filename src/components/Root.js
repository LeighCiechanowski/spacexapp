import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from '../App'
import RocketTableContainer from '../containers/RocketTable'
import LaunchTableContainer from '../containers/LaunchTable'
import LatestLaunchTableContainer from '../containers/LatestLaunchTable'
import LaunchContainer from '../containers/Launch'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
        <div>
        <Route exact path="/" component={App} />
        <Route exact path="/launches" component={LaunchTableContainer} />
        <Route exact path="/launches/latest" component={LatestLaunchTableContainer} />
        <Route excat path="/launches/:id" component={LaunchContainer} /> 
        <Route exact path="/rockets" component={RocketTableContainer} /> 
        </div>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root