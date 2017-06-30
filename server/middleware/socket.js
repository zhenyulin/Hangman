import fs from 'fs';
import path from 'path';

export default function configIO(io, store) {
  io.on('connection', (socket) => {
    socket.emit('state', store.getState().hangman.toJS());
    socket.on('action', store.dispatch.bind(store));
  });

  store.subscribe(() => {
    const state = store.getState().hangman.toJS();
    const stateJson = JSON.stringify(state);
    io.emit('state', state);
    fs.writeFile(path.resolve('data/state.json'), stateJson, (err) => {
      if (err) { console.log(err); }
    });
  });
}
