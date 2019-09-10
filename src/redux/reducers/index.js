import { combineReducers } from 'redux';
import lineCollection from './lineCollection';
import algoToRun from './algoToRun';
import isRunning from './isRunning';
import lineCount from './lineCount';

export default combineReducers({
  lineCollection,
  algoToRun,
  isRunning,
  lineCount,
})