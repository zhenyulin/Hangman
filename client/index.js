import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import io from 'socket.io-client';
import setupStore from 'store';
import App from 'containers';
import { Actions } from 'controllers';

const socket = io.connect();
const store = setupStore(socket);

socket.on('state', state => store.dispatch(Actions.setState(state)));

ReactDOM.render(
	<Provider store={store} >
		<App />
	</Provider>,
	document.getElementById('app')
);