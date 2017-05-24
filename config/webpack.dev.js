import webpack from 'webpack';
import path from 'path';

process.env.NODE_ENV = process.env.NODE_ENV || "development";

export default {
	devtool: 'eval-source-map',
	entry: [
		'webpack-hot-middleware/client',
		'webpack/hot/only-dev-server',
		path.resolve('./client/index.js')
	],
	output: {
		path: path.resolve('./client/'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
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
				test: /\.js$/,
				loaders: ['babel'],
				include: path.resolve('./client'),
				exclude: /node_modules/,
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
		    },
		]
	}
};