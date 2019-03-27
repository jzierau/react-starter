import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import { Routr } from './core';
import allReducers from './reducers';

import './scss/styles.scss';

const { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ } = window;
const composeEnhancers = __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(allReducers, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter path="/">
      <Routr />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
