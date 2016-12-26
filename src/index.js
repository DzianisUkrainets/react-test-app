import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import NewContact from './components/NewContact';
import EditContact from './components/EditContact';

import { createStore}  from 'redux';
import Reducer from './reducers';

import { Provider } from 'react-redux';

import { Router, Route, hashHistory } from 'react-router';

let store = createStore(Reducer);

ReactDOM.render(
  <Provider store={store}>
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/contacts" component={App}/>
    <Route path="/contacts/new" component={NewContact}/>
    <Route path="/contacts/:contactId" component={EditContact}/>
  </Router>
  </Provider>,
  document.getElementById('root')
)