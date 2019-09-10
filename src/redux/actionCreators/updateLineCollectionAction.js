import LineCollection from '../../LineCollection';
// Action creator for line collection
// Accepts instance of line collection.
export default function updateLineCollectionAction(lineCollection) {
  let action = {
    type: 'UPDATE_LINE_COLLECTION',
    lineCollection
  };
  
  if(!Number.isNaN(lineCollection)) {
    action.lineCollection = new LineCollection(lineCollection);
  }

  return action;
}