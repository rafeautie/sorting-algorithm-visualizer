import LineCollection from '../../LineCollection';

const initialState = new LineCollection(50);

const lineCollection = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_LINE_COLLECTION': 
      return action.lineCollection;
    default:
      return state;
  }
}

export default lineCollection;