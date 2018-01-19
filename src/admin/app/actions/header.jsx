import { createActions } from 'redux-actions';

export const {
  openDrawer,
  closeDrawer,
  switchButtons
} = createActions({
  OPEN_DRAWER: () => ({ open: true }),
  CLOSE_DRAWER: () => ({ open: false }),
  SWITCH_BUTTONS: buttonNav => ({ buttonNav })
});
