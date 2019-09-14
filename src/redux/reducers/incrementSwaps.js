let initialState = 0;

const incrementSwaps = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT_SWAP_COUNT':
      return state + 1;
    default:
      return state;
  }
}

export default incrementSwaps;