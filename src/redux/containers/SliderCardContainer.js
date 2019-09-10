import { connect } from 'react-redux';
import SliderCard from '../../Options/SliderCard';
import {
  updateSpeedAction,
  updateLineCountAction,
  updateLineCollectionAction
} from '../actionCreators';

const mapStateToProps = state => {
  return {
    lineCount: state.lineCount,
    isRunning: state.isRunning,
    speed: state.speed,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setNewLineCollectionBaseOnLineCount: (_, newLineCount) => {
      dispatch(updateLineCollectionAction(newLineCount));
    },
    updateLineCount: (_, newLineCount) => {
      dispatch(updateLineCountAction(newLineCount));
    },
    setSpeed: (_, speed) => {
      dispatch(updateSpeedAction(speed));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SliderCard);