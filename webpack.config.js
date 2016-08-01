const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const webpack = require('webpack');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
	app: path.join(__dirname, 'src'),
	build: path.join(__dirname, 'dist'),
	node_modules: path.join(__dirname, 'node_modules')
};

process.env.BABEL_ENV = TARGET;

const common = {
	entry: [path.join(PATHS.app, 'index.jsx')],
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	stats: {
		hash: false,
		version: false,
		timings: false,
		assets: true,
		chunks: true,
		modules: true,
		reasons: true,
		children: false,
		source: false,
		errors: true,
		errorDetails: true,
		warnings: false,
		publicPath: false
	},
	output: {
		path: PATHS.build
	},
	module: {
		loaders: [
			{
				test: /\.scss$/,
				loaders: ["style", "css", "sass"]
			},
			{
				test: /\.css$/,
				loaders: ['css']
			},
			{
				test: /\.js(x|)?$/,
				loaders: ['transform?envify', 'babel?cacheDirectory'],
				include: [PATHS.app, path.resolve(__dirname, './node_modules/rebass')]
			},
			{
				test: /\.json$/,
				loaders: ['json']
			},
			{
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: "url-loader?limit=10000&minetype=application/font-woff"
			},
			{
				test: /\.(ttf|eot|svg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: "file-loader"
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
			ENVIRONMENT_IS_LIVE: JSON.stringify((process.env.NODE_ENV || 'development').toLowerCase() === 'production'),
			VERSION: JSON.stringify('v' + process.env.npm_package_version),
			'process.env.npm_lifecycle_event': JSON.stringify(TARGET || 'dev')
		}),
		new HtmlWebpackPlugin()
	],
	node: {
		fs: 'empty',
		net: 'empty',
		tls: 'empty'
	},
	browser: {"fs": false}
};

if (TARGET === 'start' || !TARGET) {
	module.exports = merge(common, {
		devtool: 'eval-source-map',
		devServer: {
			historyApiFallback: true,
			hot: true,
			inline: true,
			progress: true,

			// display only errors to reduce the amount of output
			stats: {
				// Config for minimal console.log mess.
				assets: false,
				colors: true,
				version: false,
				hash: false,
				timings: false,
				chunks: false,
				chunkModules: false
			},

			// parse host and port from env so this is easy
			// to customize
			host: process.env.HOST,
			port: process.env.PORT
		},
		plugins: common.plugins.concat([
			new webpack.HotModuleReplacementPlugin()
		])
	});
} else if (TARGET === 'test') {
	module.exports = merge(common, {
		externals: {
			'react/addons': true,
			'react/lib/ExecutionEnvironment': true,
			'react/lib/ReactContext': true
		}
	});
} else {
	module.exports = merge(common, {});
}
