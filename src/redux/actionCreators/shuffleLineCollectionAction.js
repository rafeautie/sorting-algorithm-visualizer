// Action creator for shuffling a line collection
// Accepts instance of line collection and passes it through to reducer which will invoke the shuffle method.
export default function shuffleLineCollection(lineCollection) {
  return{
    type: 'SHUFFLE_LINE_COLLECTION',
    lineCollection,
  }
}