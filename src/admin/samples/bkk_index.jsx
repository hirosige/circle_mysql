import React from 'react';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

import CounterReducer from '../reducers/CounterReducer';
import CounterContainer from '../containers/CounterContainer';

const store = createStore(
  CounterReducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <CounterContainer />
  </Provider>,
  document.getElementById('root')
);
