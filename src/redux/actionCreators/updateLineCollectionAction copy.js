// Action creator for line collection
// Accepts instance of line collection.
export default function updateLineCollectionAction(lineCollection) {
  return{
    type: 'UPDATE_LINE_COLLECTION',
    lineCollection
  }
}