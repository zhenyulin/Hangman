import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers';
import remoteAction from 'middleware/remote';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';

export default function setupStore(socket) {
	let middleware = [remoteAction(socket)];

	if (process.env.NODE_ENV !== 'production') {
		const logger = createLogger();
		middleware = [...middleware, thunk, promise, logger];
	}
	
	return applyMiddleware(...middleware)(createStore)(reducer);
}