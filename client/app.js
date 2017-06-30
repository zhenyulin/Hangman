import React from 'react';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';
import io from 'socket.io-client';

import setupStore from './store';
import Router from './router';

const history = createHistory();
const socket = io.connect();
const store = setupStore(socket, history);

export default () => (
  <Provider store={store} >
    <ConnectedRouter history={history}>
      <Router />
    </ConnectedRouter>
  </Provider>
);
