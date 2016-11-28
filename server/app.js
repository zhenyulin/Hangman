import express from 'express';
import http from 'http';
import SocketIO from 'socket.io';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from 'config/webpack';
import management from 'server/router/management';
import hangman from 'server/router/hangman';
import setupStore from 'server/store/store';
import fs from 'fs';

const app = express();
const server = http.Server(app);
const compiler = webpack(webpackConfig);
const io = SocketIO(server);
const store = setupStore();

io.on('connection', socket => {
	socket.emit('state', store.getState().toJS());
	socket.on('action', store.dispatch.bind(store));
});

store.subscribe(() => {
	const state = store.getState().toJS();
	io.emit('state', state);
	fs.writeFile('state.json', JSON.stringify(state));
});

app.use((req, res, next) => {
	req.store = store;
	next();
});
app.use(webpackDevMiddleware(compiler, {
	noInfo: true,
	publicPath: webpackConfig.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));
app.use('/management', management);
app.use('/', hangman);

server.listen(3000);
console.log('server started at port 3000');