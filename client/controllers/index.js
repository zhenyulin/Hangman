import { combineReducers } from 'redux';

import hangman from './hangman';
import { routerReducer as router } from 'react-router-redux';

const reducer = combineReducers({
  hangman,
  router,
});

export default reducer;
