import express from 'express';
import http from 'http';
import SocketIO from 'socket.io';
import fs from 'fs';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from 'config/webpack';
import setupStore from 'server/store/store';
import router from 'server/router';

const app = express();
const server = http.Server(app);
const io = SocketIO(server);
const compiler = webpack(webpackConfig);
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
app.use(webpackDevMiddleware(compiler, {
	noInfo: true,
	publicPath: webpackConfig.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));
app.use(router);

server.listen(3000);
console.log('server started at port 3000');