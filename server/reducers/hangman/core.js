import { List, fromJS } from 'immutable';
import { MASK_SIGN, MAX_LIFE, INITIAL_STATE } from './constant';

export function restart(state) {
  return state.merge(fromJS(INITIAL_STATE));
}

export function next(state) {
  const wordlist = state.get('wordlist');
  const played = state.get('played');
  const word = state.get('current');
  const complete = state.get('complete');

  if (wordlist.size === 0) {
    return state.merge({
      end: true,
      played: word ? played.set(word, complete) : played,
      current: '',
    });
  }

  const nextWord = wordlist.get(0);

  return state.merge({
    wordlist: wordlist.skip(1),
    played: word ? played.set(word, complete) : played,
    current: nextWord,
    complete: false,
    life: MAX_LIFE,
    mask: MASK_SIGN.repeat(nextWord.length),
    guessed: List(),
  });
}

export function guess(state, letter) {
  const word = state.get('current');
  const guessed = state.get('guessed');

  if (word.toLowerCase().indexOf(letter.toLowerCase()) > -1) {
    const mask = state.get('mask');
    let nextMask = '';
    for (let i = 0; i < mask.length; i++) {
      word[i].toLowerCase() === letter ?
			nextMask += word[i] :
			nextMask += mask[i];
    }
    return state.merge({
      mask: nextMask,
      guessed: guessed.push(letter),
      complete: nextMask === word,
    });
  }

  const life = state.get('life');

  if (life === 1) {
    const played = state.get('played');
    const word = state.get('current');
    const complete = state.get('complete');
    return state.merge({
      guessed: guessed.push(letter),
      life: life - 1,
      played: word ? played.set(word, complete) : played,
    });
  }

  return state.merge({
    guessed: guessed.push(letter),
    life: life - 1,
  });
}

