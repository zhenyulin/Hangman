import { combineReducers } from 'redux';

import hangman from './hangman';

const reducer = combineReducers({
  hangman,
});

export default reducer;
