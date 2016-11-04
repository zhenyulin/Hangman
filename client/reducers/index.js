import {List, Map} from 'immutable';

const initialState = Map({
	end: false,
	complete: false,
	guessed: List(),
	life: 0,
	mask: ''
});

function setState(state, newState){
	return state.merge(newState);
}

export default function reducer(state=initialState, action){
	switch (action.type){
	case 'SET_STATE':
		return setState(state, action.state);
	default:
		return state;
	}
}