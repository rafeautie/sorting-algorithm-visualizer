// Action creator for line collection
// Accepts instance of line collection or num of lines to be generated.
export default function updateLineCollection(lineCollection) {
  return{
    type: 'UPDATE_LINE_COLLECTION',
    lineCollection
  }
}