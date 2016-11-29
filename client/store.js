import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers';
import remoteAction from 'middleware/remote';

export default function setupStore(socket) {
	let middleware = [remoteAction(socket)];

	if (process.env.NODE_ENV !== 'production') {
		const thunk = require('redux-thunk');
		const promise = require('redux-promise');
		const logger = require('redux-logger').createLogger();
		middleware = [...middleware, thunk, promise, logger];
	}
	
	return applyMiddleware(...middleware)(createStore)(reducer);
}