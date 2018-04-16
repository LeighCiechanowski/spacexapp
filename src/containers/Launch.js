import { connect } from 'react-redux'
import Launch from '../components/Launch'
import { getLaunch } from '../actions/pastLaunch'
import { loadavg } from 'os';

const mapStateToProps = state => {
    return {
       launch: state.launch,
       launchHasErrored: state.launchHasErrored,
      //  wtf: state.launch.links.mission_patch 
    }
  }

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getLaunch: () => {
      dispatch(getLaunch(ownProps.match.params.id))
    }
  }
}

const LaunchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Launch)

export default LaunchContainer