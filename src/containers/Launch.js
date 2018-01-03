import { connect } from 'react-redux'
import Launch from '../components/Launch'
import { getLaunches } from '../actions/pastLaunches'
import { loadavg } from 'os';

const mapStateToProps = state => {
    return {
       launches: state.items,
       itemsHasErrored: state.itemsHasErrored
    }
  }

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getLaunches: () => {
      dispatch(getLaunches('https://api.spacexdata.com/v2/launches?flight_number=' + ownProps.match.params.id))
    },
    hmm: ownProps.match.params.id
  }
}

const LaunchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Launch)

export default LaunchContainer