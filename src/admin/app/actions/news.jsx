import axios from 'axios';

import {
  OPEN_RES_BAR,
  CLOSE_RES_BAR,
  ACTIVATE,
  INACTIVATE,
  INITIALIZE,
  CREATE,
  EDIT,
  DESTROY
} from '../constants/news';

export const inactivate = () => ({
  type: INACTIVATE,
  isActive: false
});

export const activate = () => ({
  type: ACTIVATE,
  isActive: true
});

export const openResBar = (success, failure, succeeded) => ({
  type: OPEN_RES_BAR,
  committed: true,
  success,
  failure,
  succeeded
});

export const closeResBar = () => ({
  type: CLOSE_RES_BAR,
  committed: false
});

export const initialize = news => ({
  type: INITIALIZE,
  news,
  isActive: true
});

export function initializeAsync() {
  return (dispatch) => {
    // inactivate isActive flag for loading
    dispatch(inactivate());

    axios.get(`${window.config.get('apiHost')}:${window.config.get('apiPort')}/v1/news`, {
      headers: {
        Authorization: localStorage.getItem('_accessToken')
      }
    })
      .then((response) => {
        if (response.status === 200) {
          setTimeout(() => {
            dispatch(initialize(response.data));
          }, window.config.get('delay'));
        } else {
          dispatch(openResBar({}, {
            message: `Abnormal Status : ${response.status}`,
            duration: window.config.get('statusBar').duration
          }, false));
          dispatch(activate());
        }
      }).then(() => {
        dispatch(openResBar({
          message: 'News Successfully Loaded',
          duration: window.config.get('statusBar').duration
        }, {}, true));
      }).catch((error) => {
        switch (error.response.status) {
          case 401:
            dispatch(openResBar({}, {
              message: `${error.response.status} : ${error.response.statusText} (Maybe access token doesn't match)`,
              duration: window.config.get('statusBar').duration
            }, false));
            break;

          case 404:
            dispatch(openResBar({}, {
              message: `${error.response.status} : ${error.response.statusText} (Maybe requesting host got wrong)`,
              duration: window.config.get('statusBar').duration
            }, false));
            break;

          default:
            dispatch(openResBar({}, {
              message: `${error.response.status} : ${error.response.statusText} (New Pattern, Please fix actions/news)`,
              duration: window.config.get('statusBar').duration
            }, false));
            break;
        }

        dispatch(activate());
      });
  };
}

export const create = news => ({
  type: CREATE,
  news
});

export function createAsync(params) {
  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

  return (dispatch) => {
    axios.post(`${window.config.get('apiHost')}:${window.config.get('apiPort')}/v1/news`, {
      news: {
        title: params.title,
        description: params.description
      }
    }, {
      headers: {
        Authorization: localStorage.getItem('_accessToken')
      }
    })
      .then((response) => {
        if (response.status === 201) {
          delay(100)
            .then(() => {
              dispatch(inactivate());
            })
            .then(() => {
              dispatch(openResBar({
                message: 'News Successfully Created',
                duration: window.config.get('statusBar').duration
              }, {}, true));

              delay(window.config.get('statusBar').duration + 1000)
                .then(() => {
                  dispatch(initializeAsync());
                  delay(window.config.get('statusBar').duration - 1000)
                    .then(() => {
                      dispatch(activate());
                    })
                    .then(() => {
                      console.log('all done');
                    });
                });
            });
        }
      })
      .catch((error) => {
        dispatch(openResBar({}, {
          message: `${error.response.status} : ${error.response.statusText} (Rails Validation Errors)`,
          duration: window.config.get('statusBar').duration
        }, false));
      });
  };
}

export const edit = news => ({
  type: EDIT,
  news
});

export function editAsync(params) {
  return (dispatch) => {
    axios.put(`${window.config.get('apiHost')}:${window.config.get('apiPort')}/v1/news/${params.id}`, {
      news: {
        title: params.title,
        description: params.description
      }
    }, {
      headers: {
        Authorization: localStorage.getItem('_accessToken')
      }
    })
      .then((response) => {
        if (response.status === 200) {
          dispatch(initializeAsync());
        }
      });
  };
}

export const destroy = news => ({
  type: DESTROY,
  news
});

export function destroyAsync(id) {
  return (dispatch) => {
    axios.delete(`${window.config.get('apiHost')}:${window.config.get('apiPort')}/v1/news/${id}`, {
      headers: {
        Authorization: localStorage.getItem('_accessToken')
      }
    })
      .then((response) => {
        if (response.status === 204) {
          dispatch(initializeAsync());
        }
      });
  };
}
