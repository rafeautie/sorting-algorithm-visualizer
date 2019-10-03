const initialState = false;

const forceStop = (state = initialState, action) => {
  switch (action.type) {
    case 'FORCE_STOP':
      return action.forceStop;
    default:
      return state;
  }
}

export default forceStop;