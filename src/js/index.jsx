import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import App from './app';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUXDEVTOOLS_EXTENSION_COMPOSE || compose;

const store = createStore(
  reducers, composeEnhancers(applyMiddleware(promiseMiddleware()))
);
/* eslint-enable */

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
