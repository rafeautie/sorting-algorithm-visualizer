import { combineReducers } from 'redux';
import lineCollection from './lineCollection';
import algoToRun from './algoToRun';
import isRunning from './isRunning';
import lineCount from './lineCount';
import speed from './updateSpeed';
import didForceStop from './forceStop';

export default combineReducers({
  didForceStop,
  lineCollection,
  algoToRun,
  isRunning,
  lineCount,
  speed,
})