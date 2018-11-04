import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
import { signInSuccess, getUserProfile } from './actions';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

//check for token in localStore
const accessToken = localStorage.getItem('accessToken');
if (accessToken) {
  store.dispatch(signInSuccess(accessToken));
  store.dispatch(getUserProfile());
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

