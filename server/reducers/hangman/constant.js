export const MASK_SIGN = '*';
export const MAX_LIFE = 6;
export const INITIAL_STATE = {
  end: false,
  wordlist: [
    'Dog',
    'Cat',
    'Reindeer',
    'Lion',
    'Elephant',
  ],
  played: {},
  current: '',
  complete: false,
  life: 0,
  mask: '',
  guessed: [],
};
export const GUESS = 'hangman:GUESS';
export const NEXT = 'hangman:NEXT';
export const RESTART = 'hangman:RESTART';
