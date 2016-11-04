export const setState = state => ({type: 'SET_STATE',  state});
export const guess = letter => ({remote: true, type: 'GUESS', letter});
export const next = () => ({remote: true, type: 'NEXT'});
export const restart = () => ({remote: true, type: 'RESTART'});