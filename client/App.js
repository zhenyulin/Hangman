import io from 'socket.io-client';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import setupStore from './store';
import routes from './routes';

import { Actions as HangmanController } from 'controllers/hangman';

const socket = io.connect();
const store = setupStore(socket);
const history = syncHistoryWithStore(browserHistory, store);

// TODO: put socket setup in a seperate module
socket.on('state', state => store.dispatch(HangmanController.setState(state)));

export default class App extends Component {


  render() {
    return (
      <Provider store={store} >
        <Router history={history} routes={routes} />
      </Provider>
    );
  }
}
