import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware-webpack-2';
import webpackHotMiddleware from 'webpack-hot-middleware';
import morgan from 'morgan';

import webpackConfig from 'config/webpack.dev';

const compiler = webpack(webpackConfig);

export default function setupOnlyMiddleware(app) {
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
  }));
  app.use(webpackHotMiddleware(compiler));
  app.use(morgan('dev'));
}
