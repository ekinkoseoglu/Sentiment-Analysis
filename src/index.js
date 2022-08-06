// eslint-disable-next-line import/no-unresolved
import '@jotforminc/router-bridge/init';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import './styles/style.scss';
import store from './store/store';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
