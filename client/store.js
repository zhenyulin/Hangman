import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers';
import remoteAction from 'middleware/remote';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';

const logger = createLogger();

export default function setupStore(socket){
	return createStore(
		reducer, 
		applyMiddleware(
			remoteAction(socket),
			thunk, 
			promise, 
			logger
		)
	);
}