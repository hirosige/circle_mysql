import {
  AUTHENTICATE,
  DENY
} from '../constants/auth';

const authState = {
  isAuthenticated: false,
  email: ''
};

const auth = (state=authState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return Object.assign({}, state, {
        isAuthenticated: action.isAuthenticated,
        userInfo: action.userInfo
      });

    case DENY:
      return Object.assign({}, state, {
        isAuthenticated: action.isAuthenticated
      });

    default:
      return state;
  }
};

export default auth;
