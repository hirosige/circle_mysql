import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

function Auth({ children }) {
  const isUseAuthenticated = () => {
    if (localStorage.getItem('_accessToken') &&
        localStorage.getItem('_user')) {
      return true;
    }

    return false;
  };

  console.log('isUseAuthenticated');
  console.log(isUseAuthenticated());

  return (
    isUseAuthenticated() ? (
      <Route children={children} />
    ) : (
      <Redirect to="/admin/login" />
    )
  );
}

Auth.propTypes = {
  children: PropTypes.shape().isRequired
};

export default Auth;
