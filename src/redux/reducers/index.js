import { combineReducers } from 'redux';
import lineCollection from './lineCollection';
import algoToRun from './algoToRun';
import isRunning from './isRunning';
import lineCount from './lineCount';
import speed from './updateSpeed';
import swapCount from './incrementSwaps';
import comparisonCount from './incrementComparisons';

export default combineReducers({
  lineCollection,
  comparisonCount,
  algoToRun,
  isRunning,
  lineCount,
  speed,
  swapCount,
})