const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: path.resolve('./client/index.js'),
  output: {
    path: path.resolve('./dist/client/'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve('./client'),
    ],
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
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
