import { connect } from 'react-redux'
import LatestLaunchTable from '../components/LatestLaunchTable'
import { getLatestLaunches } from '../actions/latestLaunches'
import { loadavg } from 'os';

const mapStateToProps = state => {
    return {
       latestLaunches: state.latestLaunches,
       latestLaunchesHasErrored: state.latestLaunchesHasErrored
    }
  }

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getLatestLaunches: () => {
      dispatch(getLatestLaunches())
    }
  }
}

const LatestLaunchTableContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LatestLaunchTable)

export default LatestLaunchTableContainer