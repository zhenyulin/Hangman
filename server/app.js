import express from 'express';
import http from 'http';
import SocketIO from 'socket.io';
import fs from 'fs';
import path from 'path';
import setupStore from 'server/store/store';
import router from 'server/router';

const app = express();
const server = http.Server(app);
const io = SocketIO(server);
const store = setupStore();

io.on('connection', socket => {
	socket.emit('state', store.getState().toJS());
	socket.on('action', store.dispatch.bind(store));
});

store.subscribe(() => {
	const state = store.getState().toJS();
	io.emit('state', state);
	fs.writeFile('server/state.json', JSON.stringify(state));
});

app.use((req, res, next) => {
	req.store = store;
	next();
});

app.use(express.static(path.join(__dirname, '../client')));
app.use(router);

if (process.env.NODE_ENV !== 'production') {
	const webpack = require('webpack');
	const webpackDevMiddleware = require('webpack-dev-middleware');
	const webpackHotMiddleware = require('webpack-hot-middleware');
	const webpackConfig = require('config/webpack.dev');
	const compiler = webpack(webpackConfig);
	app.use(webpackHotMiddleware(compiler));
	app.use(webpackDevMiddleware(compiler, {
		noInfo: true,
		publicPath: webpackConfig.output.publicPath
	}));
}

server.listen(3000);
console.log('server started at port 3000');