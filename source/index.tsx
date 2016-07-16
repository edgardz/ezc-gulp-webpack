/// <reference path="index.d.ts" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { store, history } from './redux';
import { Provider } from 'react-redux';

import { App } from './sections/App';

require('./styles/global.css');

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>

      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);