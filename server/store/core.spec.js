import {expect} from 'chai';
import {List, Map} from 'immutable';
import {restart, next, guess} from './core';
import {MAX_LIFE} from './constant';

describe('application logic', () => {
	
	describe('restart', () => {
		it('resets the state and restart game', () => {
			const state = Map({
				end: false,
				wordlist: List(['Elephant']),
				played: Map(),
				current: 'Rabbit',
				complete: false,
				life: MAX_LIFE,
				mask: '******',
				guessed: List()
			});
			const nextState = restart(state);
			expect(nextState).to.equal(Map({
				end: false,
				wordlist: List([
					"Dog",
					"Cat",
					"Reindeer",
					"Lion",
					"Elephant"
				]),
				played: Map(),
				current: '',
				complete: false,
				life: 0,
				mask: '',
				guessed: List()
			}));
		});
	});

	describe('next', () => {
		it('end and store the last record when wordlist empty', () => {
			const state = Map({
				end: false,
				wordlist: List(),
				played: Map(),
				current: 'Cat',
				complete: false
			});
			const nextState = next(state);
			expect(nextState).to.equal(Map({
				end: true,
				wordlist: List(),
				played: Map({
					'Cat': false
				}),
				current: '',
				complete: false
			}));
		});

		it('prepare next word state from empty stage correctly', () => {
			const state = Map({
				end: false,
				wordlist: List(['Rabbit', 'Elephant']),
				played: Map(),
				current: '',
				complete: false,
				life: 0,
				mask: '',
				guessed: List()
			});
			const nextState = next(state);
			expect(nextState).to.equal(Map({
				end: false,
				wordlist: List(['Elephant']),
				played: Map(),
				current: 'Rabbit',
				complete: false,
				life: MAX_LIFE,
				mask: '******',
				guessed: List()
			}));
		});

		it('prepare next word and store record with complete state', () => {
			const state = Map({
				end: false,
				wordlist: List(['Rabbit', 'Elephant']),
				played: Map(),
				current: 'Cat',
				complete: true,
				life: 5,
				mask: 'Cat',
				guessed: List(['c', 'a', 'k', 't'])
			});
			const nextState = next(state);
			expect(nextState).to.deep.equal(Map({
				end: false,
				wordlist: List(['Elephant']),
				played: Map({
					'Cat': true
				}),
				current: 'Rabbit',
				complete: false,
				life: MAX_LIFE,
				mask: '******',
				guessed: List()
			}));
		});

		it('prepare next word and store record with incomplete state', () => {
			const state = Map({
				end: false,
				wordlist: List(['Rabbit', 'Elephant']),
				played: Map(),
				current: 'Cat',
				complete: false,
				life: 0,
				mask: 'C*t',
				guessed: List(['c', 'v', 'k', 't','b','e'])
			});
			const nextState = next(state);
			expect(nextState).to.deep.equal(Map({
				end: false,
				wordlist: List(['Elephant']),
				played: Map({
					'Cat': false
				}),
				current: 'Rabbit',
				complete: false,
				life: MAX_LIFE,
				mask: '******',
				guessed: List()
			}));
		});
	});

	describe('guess', () => {
		it('update the mask on correct guess', () => {
			const state = Map({
				current: 'Elephant',
				mask: '********',
				life: 6,
				guessed: List(),
				complete: false
			});
			const letter = 'e';
			const nextState = guess(state, letter);
			expect(nextState).to.equal(Map({
				current: 'Elephant',
				mask: 'E*e*****',
				life: 6,
				guessed: List(['e']),
				complete: false
			}));
		});

		it('handle letter cases in word correctly', () => {
			const state = Map({
				current: 'Dog',
				mask: '***',
				life: 6,
				guessed: List(),
				complete: false
			});
			const letter = 'd';
			const nextState = guess(state, letter);
			expect(nextState).to.equal(Map({
				current: 'Dog',
				mask: 'D**',
				guessed: List(['d']),
				life: 6,
				complete: false
			}));
		});

		it('update the game status on wrong guess', () => {
			const state = Map({
				current: 'Elephant',
				mask: '********',
				guessed: List(),
				life: 6
			});
			const letter = 'k';
			const nextState = guess(state, letter);
			expect(nextState).to.equal(Map({
				current: 'Elephant',
				mask: '********',
				guessed: List(['k']),
				life: 5
			}));
		});

		it('update the complete status when word guessed correctly', () => {
			const state = Map({
				complete: false,
				current: 'Cat',
				mask: 'C*t',
				guessed: List(['c','t','k']),
				life: 5
			});
			const letter = 'a';
			const nextState = guess(state, letter);
			expect(nextState).to.equal(Map({
				complete: true,
				current: 'Cat',
				mask: 'Cat',
				guessed: List(['c','t','k','a']),
				life: 5
			}));
		});

		it('log the game status when life is empty', () => {
			const state = Map({
				complete: false,
				current: 'Cat',
				mask: '***',
				guessed: List(['g','h','j','k','l']),
				life: 1,
				played: Map()
			});
			const letter = 'm';
			const nextState = guess(state, letter);
			expect(nextState).to.equal(Map({
				complete: false,
				current: 'Cat',
				mask: '***',
				guessed: List(['g','h','j','k','l','m']),
				life: 0,
				played: Map({
					'Cat': false
				})
			}));
		});
	});
});