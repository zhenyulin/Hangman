import webpack from 'webpack';
import path from 'path';

export default {
	devtool: 'eval-source-map',
	entry: [
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