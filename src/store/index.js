// import { createStore, applyMiddleware } from 'redux';
import { createStore, applyMiddleware } from '../my-redux';

// import thunk from 'redux-thunk';
import promise from 'redux-promise';
// import logger from 'redux-logger';

function countReducer(state = 0, action) {
  switch (action.type) {
    case 'ADD':
      return state + 1;
    case 'MINUS':
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(
  countReducer,
  applyMiddleware(thunk, promise, logger)
);

function logger({ getState, dispatch }) {
  return (next) => (action) => {
    console.log('-----------------------');

    console.log(action.type + '执行了');

    const prevState = getState();

    console.log('prev state', prevState);

    const returnValue = next(action);

    // 等状态值修改之后，再执行getState，拿到了新的状态值
    const nextState = getState();

    console.log('next state', nextState);

    console.log('-----------------------');

    return returnValue;
  };
}

function thunk({ getState, dispatch }) {
  return (next) => (action) => {
    if (typeof action === 'function') {
      return action(dispatch, getState);
    }
    return next(action);
  };
}

export default store;
