const loginState = {
  login: {
    sessionId: '',
    message: 'testsetset'
  }
};

const loginReducer = (state=loginState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return Object.assign({}, state, {
        committed: action.committed
      });

    default:
      return state;
  }
};

export default loginReducer;
