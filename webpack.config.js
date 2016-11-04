import webpack from 'webpack';
import path from 'path';

export default {
	devtool: 'eval-source-map',
	entry: [
		path.join(__dirname, '/client/index.js')
	],
	output: {
		path: path.join(__dirname, '/client/'),
		filename: 'bundle.js',
		publicPath: '/'
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
		}, {
			test: /\.css?$/,
			loader: 'style!css'
		}]
	},
	plugin: [
		new webpack.HotModuleReplacementPlugin()
	]
};