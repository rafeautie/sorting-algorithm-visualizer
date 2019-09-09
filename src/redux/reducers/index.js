import { combineReducers } from 'redux';
import updateLineCollection from './updateLineCollection';

export default combineReducers({
  lineCollection: updateLineCollection,
})