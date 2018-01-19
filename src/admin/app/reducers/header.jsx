import { handleActions } from 'redux-actions';

import { closeDrawer, openDrawer, switchButtons } from '../actions/header';

const headerState = {
  open: false,
  buttonNav: {
    activeIndex: 0
  }
};

const header = handleActions({
  [closeDrawer](state, action) {
    return {
      ...state,
      open: action.payload.open
    };
  },
  [openDrawer](state, action) {
    return {
      ...state,
      open: action.payload.open
    };
  },
  [switchButtons](state, action) {
    return {
      ...state,
      buttonNav: action.payload.buttonNav
    };
  }
}, headerState);

export default header;
