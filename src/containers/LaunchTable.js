import { connect } from 'react-redux'
import LaunchTable from '../components/LaunchTable'
import { getLaunches } from '../actions/pastLaunches'
import { loadavg } from 'os';

const mapStateToProps = state => {
    return {
       launches: state.launches,
       launchesHasErrored: state.launchesHasErrored
    }
  }

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getLaunches: () => {
      dispatch(getLaunches())
    }
  }
}

const LaunchTableContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LaunchTable)

export default LaunchTableContainer