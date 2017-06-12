'use strict';

const path = require('path');

const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const clientBabelrc = require('./client_babelrc');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'webpack-hot-middleware/client',
    'react-hot-loader/patch',
    path.resolve('./client/index.js'),
  ],
  output: {
    path: path.resolve('./client/'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    modules: [
      // NOTE: new resolve pathes need to be above node_modules
      path.resolve('./client'),
      'node_modules',
    ],
    extensions: ['.js', '.jsx'],
    alias: {
      request: 'browser-request',
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: './client/index.html',
    }),
  ],
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
};
