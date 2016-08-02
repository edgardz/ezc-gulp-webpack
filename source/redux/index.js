import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { routerReducer, routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import ReduxPromise from 'redux-promise';

import platform from './reducers/platform';

const rootReducer = combineReducers({
  platform,
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


