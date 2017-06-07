import { List, Map } from 'immutable';
import { EventTypes } from 'redux-segment';

export const SET_STATE = 'hangman:SET_STATE';
export const GUESS = 'hangman:GUESS';
export const NEXT = 'hangman:NEXT';
export const RESTART = 'hangman:RESTART';

export const Actions = {
  setState: state => ({ type: SET_STATE, state }),
  guess: letter => ({
    remote: true,
    type: GUESS,
    letter,
    meta: {
      analytics: {
        eventType: EventTypes.track,
        eventPayload: {
          event: GUESS,
          properties: {
            letter,
          },
        },
      },
    },
  }),
  next: () => ({
    remote: true,
    type: NEXT,
    meta: {
      analytics: EventTypes.track,
    },
  }),
  restart: () => ({
    remote: true,
    type: RESTART,
    meta: {
      analytics: EventTypes.track,
    },
  }),
};

const initialState = Map({
  end: false,
  complete: false,
  guessed: List(),
  life: 0,
  mask: '',
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_STATE:
      return setState(state, action.state);
    default:
      return state;
  }
}

function setState(state, newState) {
  return state.merge(newState);
}
