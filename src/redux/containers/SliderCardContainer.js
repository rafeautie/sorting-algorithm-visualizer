import { connect } from 'react-redux';
import SliderCard from '../../Options/SliderCard';
import {
  updateLineCountAction,
  updateLineCollectionAction
} from '../actionCreators';

const mapStateToProps = state => {
  return {
    lineCount: state.lineCount,
    isRunning: state.isRunning,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setNewLineCollectionBaseOnLineCount: (_, newLineCount) => {
      console.log(newLineCount);
      dispatch(updateLineCollectionAction(newLineCount));
    },
    updateLineCount: (_, newLineCount) => {
      dispatch(updateLineCountAction(newLineCount));
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SliderCard);