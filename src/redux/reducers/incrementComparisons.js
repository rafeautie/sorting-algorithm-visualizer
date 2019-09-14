let initialState = 0;

const incrementComparisons = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT_COMPARISON_COUNT':
      return state + 1;
    default:
      return state;
  }
}

export default incrementComparisons;