import LineCollection from '../../LineCollection';

const initialState = new LineCollection(50);

const updateLineCollection = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_LINE_COLLECTION':
      return action.lineCollection;
    case 'SHUFFLE_LINE_COLLECTION':
      return action.lineCollection.shuffle();
    default:
      return state;
  }
}

export default updateLineCollection;