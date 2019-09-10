import { connect } from 'react-redux';
import {
  toggleRunningAction,
  algoToRunAction,
  shuffleLineCollectionAction
} from '../actionCreators';
import AlgoSelect from '../../Options/AlgoSelect';

const mapStateToProps = state => {
  return {
    algoToRun: state.algoToRun,
    isRunning: state.isRunning,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setAlgo: (algoToRun) => {
      dispatch(algoToRunAction(algoToRun));
    },
    shuffleLineCollection: () => {
      dispatch(shuffleLineCollectionAction());
    },
    toggleRunning: (isRunning) => {
      dispatch(toggleRunningAction(isRunning));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlgoSelect);