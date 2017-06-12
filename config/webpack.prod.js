const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const clientBabelrc = require('./client_babelrc');

process.env.NODE_ENV = process.env.NODE_ENV || 'production';

module.exports = {
  devtool: 'eval-cheap-module-source-map',
  entry: path.resolve('./client/index.js'),
  output: {
    path: path.resolve('./dist/client/'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    modules: [
      path.resolve('./client'),
      'node_modules',
    ],
    extensions: ['.js', '.jsx'],
    alias: {
      request: 'browser-request',
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: Object.assign({}, {
              cacheDirectory: true,
              babelrc: false,
            }, clientBabelrc),
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|jpeg|gif|woff|woff2|svg|eot|ttf|otf|wav|mp3)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name]_[hash:base64:5].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      minimize: true,
      compress: {
        warnings: false,
      },
    }),
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: './client/index.html',
    }),
  ],
};
