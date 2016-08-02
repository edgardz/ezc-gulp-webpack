import './styles/global.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

import { store, history } from './redux';

import App      from './sections/App';
import Landing  from './sections/Landing';
import Contact  from './sections/Contact';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Landing} />
        <Route path="contact" component={Contact}>
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);