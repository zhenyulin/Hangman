import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import setupStore from './store';
import io from 'socket.io-client';
import App from './containers/App';
import {setState} from 'actions';

const socket = io.connect();
const store = setupStore(socket);

socket.on('state', state => store.dispatch(setState(state)));

ReactDOM.render(
	<Provider store={store} >
		<App />
	</Provider>,
	document.getElementById('app')
);