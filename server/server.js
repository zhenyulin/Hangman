import express from 'express';
import bodyParser from 'body-parser';
import passport from 'passport';
import cors from 'cors';
import compression from 'compression';
// import favicon from 'favicon';
import expressValidator from 'express-validator';
import helmet from 'helmet';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware-webpack-2';
import webpackHotMiddleware from 'webpack-hot-middleware';
import morgan from 'morgan';

import router from './router';

const app = express();

if (process.env.NODE_ENV !== 'production') {
  const webpackConfig = require('config/webpack.dev');
  const compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
  }));
  app.use(webpackHotMiddleware(compiler));
  app.use(morgan('dev'));
}

app.use(helmet());
app.use(cors());
app.use(compression());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(expressValidator());
app.use(passport.initialize());
app.use(express.static(`${__dirname}/../client`));
app.use(router);

export default app;
