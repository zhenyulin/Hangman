const path = require('path');
const webpack = require('webpack');

process.env.NODE_ENV = process.env.NODE_ENV || "production";

module.exports = {
	devtool: 'eval-cheap-module-source-map',
	entry: path.resolve('./client/index.js'),
	output: {
		path: path.resolve('./dist/client/'),
		filename: 'bundle.js',
		publicPath: '/',
	},
	resolve: {
		root: path.resolve('./client'),
		extensions: ['', '.js', '.jsx'],
		alias: {
			request: 'browser-request',
		}
	},
	module: {
		loaders: [
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				loader: 'babel'
			},
			{
				test: /\.json$/,
				loader: 'json'
			},
			{
		        test: /\.(jpe?g|png|gif|svg)$/i,
		        loaders: [
		            'file?hash=sha512&digest=hex&name=[hash].[ext]',
		            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
		        ]
		    }
		],
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