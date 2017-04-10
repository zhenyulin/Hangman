import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './reducers';
import remoteAction from 'middleware/remote';

export default function setupStore(socket) {
	let middleware = [remoteAction(socket)];

	if (process.env.NODE_ENV !== 'production') {
		const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
		const enhancer = composeEnhancers(applyMiddleware(...middleware));
		return createStore(reducer, enhancer);
	}

	return applyMiddleware(...middleware)(createStore)(reducer);
}