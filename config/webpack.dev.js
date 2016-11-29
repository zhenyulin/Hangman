import webpack from 'webpack';
import path from 'path';

process.env.NODE_ENV = process.env.NODE_ENV || "development";

export default {
	devtool: 'eval-source-map',
	entry: [
		'webpack-hot-middleware/client',
		path.resolve('./client/index.js')
	],
	output: {
		path: path.resolve('./client/'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	resolve: {
		root: path.resolve('./client'),
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				loader: 'babel'
			}
		]
	},
	plugin: [
		new webpack.HotModuleReplacementPlugin()
	]
};