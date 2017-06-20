import io from 'socket.io-client';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';

import setupStore from './store';
import Router from './router';

import { Actions as HangmanController } from 'controllers/hangman';

const history = createHistory();
const socket = io.connect();
const store = setupStore(socket, history);

// TODO: put socket setup in a seperate module
socket.on('state', state => store.dispatch(HangmanController.setState(state)));

export default class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <ConnectedRouter history={history}>
          <Router />
        </ConnectedRouter>
      </Provider>
    );
  }
}
