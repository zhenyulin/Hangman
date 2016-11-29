const path = require('path');
const webpack = require('webpack');

process.env.NODE_ENV = process.env.NODE_ENV || "production";

module.exports = {
	devtool: 'cheap-module-source-map',
	entry: path.resolve('./client/index.js'),
	output: {
		path: path.resolve('./dist/client/'),
		filename: 'bundle.js',
		publicPath: '/',
	},
	resolve: {
		root: path.resolve('./client'),
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [{
			test: /\.js?$/,
			exclude: /node_modules/,
			loader: 'babel'
		}],
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			minimize: true,
			compress: {
				warnings: false
			}
		})
	],
};