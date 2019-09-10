const initialState = 100;

const updateSpeed = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_SPEED':
      return action.speed;
    default:
      return state;
  }
}

export default updateSpeed;