'use strict';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { routerReducer, routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// not typed imports
const ReduxPromise = require('redux-promise');


const rootReducer = combineReducers({
  routing: routerReducer
});

const enhancer = compose(
  applyMiddleware( ReduxPromise ),
  applyMiddleware(routerMiddleware(browserHistory)),
  window.devToolsExtension
    ? window.devToolsExtension()
    : f => f
);

export const store   = createStore(rootReducer, {}, enhancer);
export const history = syncHistoryWithStore(browserHistory, store);


