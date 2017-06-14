import { combineReducers } from 'redux';

import hangman from './hangman';
import { routerReducer as routing } from 'react-router-redux';

const reducer = combineReducers({
  hangman,
  routing,
});

export default reducer;
