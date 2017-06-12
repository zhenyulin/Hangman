import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from 'react-hot-loader/lib/AppContainer';

import App from './App';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app'),
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    /**
     * require not needed with webpack 2's module support
     * https://github.com/gaearon/react-hot-loader/tree/master/docs#webpack-2
     *
     * const HotApp = require('./App').default;
     */
    render(App);
  });
}
