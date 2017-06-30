import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
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

  if (process.env.NODE_ENV === 'development') {
    const enhancer = composeWithDevTools(applyMiddleware(...middleware));
    const store = createStore(reducer, enhancer);

    if (module.hot) {
      module.hot.accept('./controllers', () => {
        const nextRootReducer = require('./controllers').default;
        store.replaceReducer(nextRootReducer);
      });
    }

    return store;
  }

  return applyMiddleware(...middleware)(createStore)(reducer);
}
