import axios from 'axios';

import {
  AUTHENTICATE,
  DENY
} from '../constants/auth';

export const authenticate = loginInfo => ({
  type: AUTHENTICATE,
  isAuthenticated: true,
  loginInfo
});

export function authenticateAsync(params) {
  return (dispatch) => {
    axios.post(`${window.config.get('apiHost')}:${window.config.get('apiPort')}/v1/login/`, {
      email: params.email,
      password: params.password
    })
      .then((response) => {
        console.log('auth#response');
        console.log(response);
        if (response.data.error) {
          console.log(response.data.error);
        } else {
          localStorage.setItem('_accessToken', response.data.access_token);
          localStorage.setItem('_user', JSON.stringify({
            email: response.data.email,
            password: params.password
          }));

          dispatch(authenticate({
            email: response.data.email
          }));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export const deny = () => ({
  type: DENY,
  isAuthenticated: false
});
