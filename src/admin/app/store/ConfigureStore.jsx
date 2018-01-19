import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducers';

export default function configureStore(initialState) {
  let store;

  if (window.store) {
    console.log('あるよ');
    console.log(window.store.getState());
    store = createStore(
      rootReducer,
      composeWithDevTools(applyMiddleware(thunk)),
      window.store.getState(),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
  } else {
    store = createStore(
      rootReducer,
      initialState,
      composeWithDevTools(applyMiddleware(thunk)),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
  }

  store.subscribe(() => {
    console.log(store.getState());
    console.log(window.STATE_FROM_SERVER);
  });
  window.store = store;
  return store;
}
