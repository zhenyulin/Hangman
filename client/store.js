import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import reducer from 'controllers';
import remoteAction from 'middleware/remote';
import { createTracker } from 'redux-segment';

export default function setupStore(socket, history) {
  const middleware = [
    remoteAction(socket),
    routerMiddleware(history),
    createTracker(),
  ];

  if (process.env.NODE_ENV !== 'production') {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const enhancer = composeEnhancers(applyMiddleware(...middleware));
    return createStore(reducer, enhancer);
  }

  return applyMiddleware(...middleware)(createStore)(reducer);
}
