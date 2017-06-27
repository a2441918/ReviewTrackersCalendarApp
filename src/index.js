import { AppContainer } from 'react-hot-loader';
import { render } from 'react-dom';
import React from 'react';
import App from './assets/js/App';

render(
  <AppContainer><App /></AppContainer>,
  document.getElementById('root')
);

if (module && module.hot) {
  module.hot.accept('./assets/js/App', () => {
    const NewApp = require('./assets/js/App').default;
    render(
      <AppContainer>
        <NewApp />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}