import http from 'http';
import SocketIO from 'socket.io';

import app from './server';
import { PORT } from './config/constant';
import connectDB from './config/db';
import setupStore from './middleware/store';
import configIO from './middleware/socket';

let currentApp = app;
const server = http.createServer(app);
const io = SocketIO(server);
const store = setupStore();
const SERVER_START = `server started on port ${PORT}`;
console.time(SERVER_START);

connectDB();
configIO(io, store);
server.listen(PORT, () => console.timeEnd(SERVER_START));

if (module.hot) {
  module.hot.accept('./server', () => {
    server.removeListener('request', currentApp);
    const hotApp = require('./server').default;
    server.on('request', hotApp);
    currentApp = hotApp;
  });
}
