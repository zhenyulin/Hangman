import {List, Map} from 'immutable';

const initialState = Map({
	end: false,
	complete: false,
	guessed: List(),
	life: 0,
	mask: ''
});

export const SET_STATE = 'hangman:SET_STATE';
export const GUESS = 'hangman:GUESS';
export const NEXT = 'hangman:NEXT';
export const RESTART = 'hangman:RESTART';

export const Actions = {
	setState: state => ({type: SET_STATE,  state}),
	guess: letter => ({remote: true, type: GUESS, letter}),
	next: () => ({remote: true, type: NEXT}),
	restart: () => ({remote: true, type: RESTART}),
}

function setState(state, newState){
	return state.merge(newState);
}

export default function reducer(state=initialState, action){
	switch (action.type){
	case SET_STATE:
		return setState(state, action.state);
	default:
		return state;
	}
}