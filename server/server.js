import express from 'express';
import http from 'http';
import path from 'path';
import fs from 'fs';
import cors from 'cors';
import compression from 'compression';
import SocketIO from 'socket.io';
import router from 'server/router';
import setupStore from 'server/store/store';
import connectDB from 'server/config/db';
import { PORT } from 'server/config/constant';

const MARK = `server started on port ${PORT}`;
console.time(MARK);
const app = express();
const server = http.Server(app);
const io = SocketIO(server);
const store = setupStore();
const db = connectDB();

//TODO: move this io controller funcs to a seperate module
io.on('connection', socket => {
	socket.emit('state', store.getState().toJS());
	socket.on('action', store.dispatch.bind(store));
});

store.subscribe(() => {
	const state = store.getState().toJS();
	io.emit('state', state);
	fs.writeFile('state.json', JSON.stringify(state));
});

//TODO: is there a better way to append the store to the middleware?
app.use((req, res, next) => {
	req.store = store;
	next();
});

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
	const morgan = require('morgan');
	app.use(morgan('dev'));
}
else {
	const helmet = require('helmet');
	app.use(helmet());
}

app.use(cors());
app.use(compression());
app.use(express.static(path.join(__dirname, '../client')));
app.use(router);

app.listen(PORT, () => console.timeEnd(MARK));