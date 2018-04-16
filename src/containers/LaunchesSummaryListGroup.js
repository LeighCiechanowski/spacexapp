import { connect } from 'react-redux'
import LaunchesSummaryListGroup from '../components/LaunchesSummaryListGroup'
import { filterLaunches } from '../actions/pastLaunches'
import { loadavg } from 'os';

const mapStateToProps = state => {
    return {
       launches: state.launches,
       filteredLaunches: state.filteredLaunches,
       launchesHasErrored: state.launchesHasErrored,
       launchesIsLoading: state.launchesIsLoading
    }
  }

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    filterLaunches: (launches, filter) => {
      dispatch(filterLaunches(launches, filter))
    }
  }
}

const LaunchesSummaryListGroupContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LaunchesSummaryListGroup)

export default LaunchesSummaryListGroupContainer