const initialState = {
  algoToRun: 'mergeSort'
};

const selectAlgorithm = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_ALGORITHM':
      return action.algoToRun;
    default:
      return state;
  }
}

export default selectAlgorithm;