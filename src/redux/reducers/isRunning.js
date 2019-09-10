const initialState = false;

const toggleRunning = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_RUNNING_STATE':
      return action.isRunning;
    default:
      return state;
  }
}

export default toggleRunning;