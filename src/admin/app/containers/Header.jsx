import { connect } from 'react-redux';
import Header from '../components/Partials/Header';

import {
  openDrawer,
  closeDrawer,
  switchButtons
} from "../actions/header";

const stateToProps = state => ({
  open: state.header.open,
  buttonNav: state.header.buttonNav
});

const dispatchToProps = dispatch => ({
  openDrawer: () => dispatch(openDrawer()),
  closeDrawer: () => dispatch(closeDrawer()),
  switchButtons: buttonNav => dispatch(switchButtons(buttonNav))
});

export default connect(
  stateToProps,
  dispatchToProps
)(Header);
