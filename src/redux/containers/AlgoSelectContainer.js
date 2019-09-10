import { connect } from 'react-redux';
import {
  algoToRunAction,
  shuffleLineCollectionAction
} from '../actionCreators';
import AlgoSelect from '../../Options/AlgoSelect';

const mapStateToProps = state => {
  return {
    algoToRun: state.algoToRun,
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
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlgoSelect);