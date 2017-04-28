import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import reducer from 'controllers';
import remoteAction from 'middleware/remote';
import { createTracker, EventTypes } from 'redux-segment';

export default function setupStore(socket) {
	let middleware = [
		remoteAction(socket),
		createTracker(),
		routerMiddleware(browserHistory),
	];

	if (process.env.NODE_ENV !== 'production') {
		const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
		const enhancer = composeEnhancers(applyMiddleware(...middleware));
		return createStore(reducer, enhancer);
	}

	return applyMiddleware(...middleware)(createStore)(reducer);
}