import { connect } from 'react-redux'
import LaunchTable from '../components/LaunchTable'
import { getLaunches, filterLaunches } from '../actions/pastLaunches'
import { loadavg } from 'os';

const mapStateToProps = state => {
    return {
       launches: state.launches,
       filteredLaunches: state.filteredLaunches,
       launchesHasErrored: state.launchesHasErrored
    }
  }

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getLaunches: () => {
      dispatch(getLaunches())
    },
    filterLaunches: (launches, filter) => {
      dispatch(filterLaunches(launches, filter))
    }
  }
}

const LaunchTableContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LaunchTable)

export default LaunchTableContainer