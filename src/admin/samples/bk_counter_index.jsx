import React from 'react';
import PropTypes from 'prop-types';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider, connect } from 'react-redux';

// Action
function actionIncrement() {
  return {
    type: 'INCREMENT',
    count: 1
  };
}

function actionIncrementAsync() {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(actionIncrement());
    }, 3000);
  };
}

function actionDecrement() {
  return {
    type: 'DECREMENT',
    count: -1
  };
}

function actionDecrementAsync() {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(actionDecrement());
    }, 1000);
  };
}

// Reducer
function counterReducer(state= { count: 0 }, action) {
  console.log(state.count);
  const { count } = state;

  switch (action.type) {
    case 'INCREMENT':
      console.log(count);
      return {
        count: count + 1
      };
    case 'DECREMENT':
      console.log(count);
      return {
        count: count -1
      };
    default:
      return state;
  }
}

// Component
function CounterComponent({ count, onClickPlus, onClickMinus }) {
  return (
    <div>
      <p><span>Count: {count}</span></p>
      <div>
        <button onClick={onClickPlus}>+1</button>
        <button onClick={onClickMinus}>-1</button>
      </div>
    </div>
  );
}

CounterComponent.propTypes = {
  count: PropTypes.number.isRequired,
  onClickPlus: PropTypes.func.isRequired,
  onClickMinus: PropTypes.func.isRequired
};

// Containers
function mapStateToPropsContainer(state) {
  return {
    count: state.count
  };
}

function mapDispatchToPropsContainer(dispatch) {
  return {
    onClickPlus: () => dispatch(actionIncrementAsync()),
    onClickMinus: () => dispatch(actionDecrementAsync())
  };
}

const App = connect(
  mapStateToPropsContainer,
  mapDispatchToPropsContainer
)(CounterComponent);

const store = createStore(
  counterReducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
