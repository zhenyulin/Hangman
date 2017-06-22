import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import passport from 'passport';
import cors from 'cors';
import compression from 'compression';
// import favicon from 'favicon';
import expressValidator from 'express-validator';
import SocketIO from 'socket.io';
import helmet from 'helmet';

import setupStore from 'server/store';
import connectDB from 'server/config/db';
import configIO from 'server/socket';
import router from 'server/router';
import { PORT } from 'server/config/constant';
import setupDevMiddleware from 'server/middleware/dev';

const SERVER_START = `server started on port ${PORT}`;
console.time(SERVER_START);
const app = express();
const server = http.Server(app);
const io = SocketIO(server);
const store = setupStore();
connectDB();

if (process.env.NODE_ENV !== 'production') {
  setupDevMiddleware(app);
}

configIO(io, store);

app.use(helmet());
app.use(cors());
app.use(compression());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(expressValidator());
app.use(passport.initialize());
app.use(express.static(`${__dirname}/../client`));
app.use(router);

server.listen(PORT, () => console.timeEnd(SERVER_START));
