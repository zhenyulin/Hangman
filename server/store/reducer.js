import {fromJS} from 'immutable';
import {restart, next, guess} from './core';
import storedState from 'server/state.json';
import {RESTART, NEXT, GUESS} from './constant';

export default function reducer(state=fromJS(storedState), action){
	switch (action.type) {
	case RESTART:
		return next(restart(state));
	case NEXT:
		return next(state);
	case GUESS:
		return guess(state, action.letter);
	default:
		return state;
	}
}