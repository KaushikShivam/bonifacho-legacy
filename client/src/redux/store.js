import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const INITIAL_STATE = {};

const middlewares = [thunk];

const store = createStore(
  rootReducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
