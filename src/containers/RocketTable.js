import { connect } from 'react-redux'
import RocketTable from '../components/RocketTable'
import { getRockets } from '../actions/rockets'

const mapStateToProps = state => {
    return {
       rockets: state.rockets,
       rocketsHasErrored: state.rocketsHasErrored
    }
  }

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getRockets: () => {
      dispatch(getRockets())
    }
  }
}

const RocketTableContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RocketTable)

export default RocketTableContainer