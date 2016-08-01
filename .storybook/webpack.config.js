var path = require('path');
var webpack = require('webpack');

module.exports = {
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	output: {
		publicPath: 'astro-airlock/'
	},
	plugins: [
		new webpack.DefinePlugin({
			GIT_BRANCH: JSON.stringify(process.env.GIT_BRANCH),
			VERSION: JSON.stringify('v' + process.env.npm_package_version + '+' + (process.env.JENKINS_BUILD || '0'))
		})
	],
	module: {
		loaders: [
			{
				test: /.js(x|)?$/,
				loader: 'babel-loader',
				include: [
					path.resolve(__dirname, '../node_modules/thl-ui-components'),
					path.resolve(__dirname, '../node_modules/astro-hyperspace-core'),
					path.resolve(__dirname, '../node_modules/rebass'),
					path.resolve(__dirname, '../src')
				],
				query: {
					presets: ['es2015', 'react', 'stage-0']
				}
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
				test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: "file-loader"
			}
		]
	}
};
    
