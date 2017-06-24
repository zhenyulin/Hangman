import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { createTracker } from 'redux-segment';

import reducer from 'controllers';
import socketMiddleware from 'middleware/socket';

export default function setupStore(socket, history) {
  const middleware = [
    socketMiddleware(socket),
    routerMiddleware(history),
    createTracker(),
  ];

  if (process.env.NODE_ENV !== 'production' && typeof window !== 'undefined') {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const enhancer = composeEnhancers(applyMiddleware(...middleware));
    return createStore(reducer, enhancer);
  }

  return applyMiddleware(...middleware)(createStore)(reducer);
}
