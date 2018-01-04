import { connect } from 'react-redux'
import RocketDisplay from '../components/RocketDisplay'
import { getRocket } from '../actions/rocket'

const mapStateToProps = state => {
    return {
       rocket: state.rocket,
       rocketHasErrored: state.rocketHasErrored
    }
  }

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getRocket: () => {
      dispatch(getRocket(ownProps.match.params.id))
    }
  }
}

const RocketDisplayContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RocketDisplay)

export default RocketDisplayContainer