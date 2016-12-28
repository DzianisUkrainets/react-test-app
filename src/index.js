import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import NewContact from './components/NewContact';
import EditContact from './components/EditContact';

import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';


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