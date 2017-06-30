import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import hangman from './hangman';

const reducer = combineReducers({
  hangman,
  router,
});

export default reducer;
