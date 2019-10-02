import { connect } from 'react-redux';
import {
  forceStopAction,
  algoToRunAction,
  toggleRunningAction,
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
      dispatch(forceStopAction(false));
    },
    forceStop: () => {
      dispatch(forceStopAction());
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlgoSelect);