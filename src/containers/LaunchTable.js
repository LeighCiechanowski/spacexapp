import { connect } from 'react-redux'
import LaunchTable from '../components/LaunchTable'
import { loadLaunches } from '../actions/index'

const mapStateToProps = state => {
  console.log('-----------------');
  console.log(state.items);
    return {
       launches: state.items,
       itemsHasErrored: state.itemsHasErrored
       //[
        // {
        //   FlightNumber: "54",
        //   Date: "3/01/2018",
        //   Rocket: "Falcon Heavy",
        //   LaunchPad: "Cape"
      
        // },
        // {
        //   FlightNumber: "55",
        //   Date: "12/02/2018",
        //   Rocket: "Falcon",
        //   LaunchPad: "Space City"
        // }
    //   ]//getVisibleTodos(state.todos, state.visibilityFilter)
    }
  }

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadLaunches: () => {
      dispatch(loadLaunches())
    }
  }
}

const LaunchTableContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LaunchTable)

export default LaunchTableContainer