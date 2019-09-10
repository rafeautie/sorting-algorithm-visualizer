const initialState = 'mergeSort';

const algoToRun = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_ALGORITHM':
      return action.algoToRun;
    default:
      return state;
  }
}

export default algoToRun;