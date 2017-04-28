import io from 'socket.io-client';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import setupStore from 'store';
import routes from './routes';

import { Actions as HangmanController } from 'controllers/hangman';

const socket = io.connect();
const store = setupStore(socket);
const history = syncHistoryWithStore(browserHistory, store);

//TODO: put socket setup in a seperate module
socket.on('state', state => store.dispatch(HangmanController.setState(state)));

ReactDOM.render(
	<Provider store={store} >
		<Router history={history} routes={routes} />
	</Provider>,
	document.getElementById('app')
);