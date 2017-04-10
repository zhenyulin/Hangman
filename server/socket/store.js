import fs from 'fs';
import path from 'path';

export default function configIO(io, store, app) {
	io.on('connection', socket => {
		socket.emit('state', store.getState().toJS());
		socket.on('action', store.dispatch.bind(store));
	});

	store.subscribe(() => {
		const state = store.getState().toJS();
		const stateJson = JSON.stringify(state);
		io.emit('state', state);
		fs.writeFile(path.resolve('server/state.json'), stateJson, err => {
			if(err) { console.log(err); }
		});
	});

	// TODO: is there a better way to append the store to the middleware? / give data to management
	app.use((req, res, next) => {
		req.store = store;
		next();
	});
}