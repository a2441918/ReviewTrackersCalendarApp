import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './assets/js/App';

const render = Component =>
  ReactDOM.render(
    <AppContainer><Component /></AppContainer>,
    document.getElementById('root')
  );

render(App);

if (module.hot) {
  module.hot.accept('./assets/js/App', () => {
    const newApp = require('./assets/js/App').default;
    render(newApp);
  });
}