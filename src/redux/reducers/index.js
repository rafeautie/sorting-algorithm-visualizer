import { combineReducers } from 'redux';
import lineCollection from './lineCollection';
import algoToRun from './algoToRun';
import isRunning from './isRunning';

export default combineReducers({
  lineCollection,
  algoToRun,
  isRunning,
})