import { combineReducers } from 'redux';
import lineCollection from './updateLineCollection';
import selectAlgorithm from './selectAlgorithm';

export default combineReducers({
  lineCollection,
  selectAlgorithm,
})