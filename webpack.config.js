const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


function dirPath(dest){
	return path.resolve(__dirname, dest);
};
function webPath(dest){
	return dirPath('app/' + dest);
};

const config = {
	entry: [
		webPath('scss/style.scss'),
		webPath('js/main.jsx')
	],
	output: {
		path: process.env.NODE_ENV === 'production' ? dirPath('dist') : dirPath('build'),
		filename: 'js/bundle.js'
	},
	module: {
		loaders: [{
			test: /\.scss$/,
			loader: ExtractTextPlugin.extract('style', 'css!sass')
		},
		{
			test: /\.jsx$/,
			exclude: /node_modules/,
			loader: 'babel',
			query: {
				presets: ['es2015', 'react']
			}
		},
		{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel',
			query: {
				presets: ['es2015']
			}
		}]
	},
	plugins: [
		new ExtractTextPlugin('css/style.css'),
		new HtmlWebpackPlugin({
			template: webPath('index.html'),
			inject: 'body'
		})
	],
	devServer: {
		quite: false,
		noInfo: false,
		stats: {
			assets: false,
			colors: true,
			version: false,
			hash: false,
			timings: false,
			chunks: false,
			chunkModules: false
		}
	}
};

// production mode
if(process.env.NODE_ENV === 'production'){
	config.plugins.push(
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin({minimize: true})
	);
} else {
	config.entry.push(
		'webpack/hot/dev-server',
		'webpack-dev-server/client?http://localhost:8080'
	);
}

module.exports = config;