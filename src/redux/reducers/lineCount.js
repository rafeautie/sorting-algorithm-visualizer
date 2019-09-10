const initialState = 50;

const toggleRunning = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_LINE_COUNT':
      return action.lineCount;
    default:
      return state;
  }
}

export default toggleRunning;