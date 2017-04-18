import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { hashHistory } from 'react-router';
import reducer from 'controllers';
import remoteAction from 'middleware/remote';

export default function setupStore(socket) {
	let middleware = [
		remoteAction(socket),
		routerMiddleware(hashHistory),
	];

	if (process.env.NODE_ENV !== 'production') {
		const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
		const enhancer = composeEnhancers(applyMiddleware(...middleware));
		return createStore(reducer, enhancer);
	}

	return applyMiddleware(...middleware)(createStore)(reducer);
}