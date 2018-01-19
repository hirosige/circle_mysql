import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Auth from '../components/Sessions/Auth';
import {
  authenticateAsync,
  deny
} from '../actions/auth';

const stateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

const dispatchToProps = dispatch => ({
  authenticate: loginParams => dispatch(authenticateAsync(loginParams)),
  deny: () => dispatch(deny())
});

export default withRouter(connect(
  stateToProps,
  dispatchToProps
)(Auth));
