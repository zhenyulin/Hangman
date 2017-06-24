import { Actions as HangmanController } from 'controllers/hangman';

export default socket => store => next => (action) => {
  if (action.remote) {
    socket.emit('action', action);
  }
  socket.on('state', state => store.dispatch(HangmanController.setState(state)));
  return next(action);
};
