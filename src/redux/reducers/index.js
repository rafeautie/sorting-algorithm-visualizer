import { combineReducers } from 'redux';
import lineCollection from './lineCollection';
import algoToRun from './algoToRun';

export default combineReducers({
  lineCollection,
  algoToRun,
})