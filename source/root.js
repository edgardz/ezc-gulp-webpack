import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';

import { store, history } from './redux';

import App      from './sections/App';
import Landing  from './sections/Landing';
import Contact  from './sections/Contact';

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={App}>
            <IndexRoute component={Landing} />
            <Route path="contact" component={Contact}>
            </Route>
          </Route>
        </Router>
      </Provider>
    );
  }
}