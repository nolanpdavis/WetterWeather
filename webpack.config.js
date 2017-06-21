var webpack = require('webpack')
var path = require('path')
var CommonsChunkPlugin = new require('webpack/lib/optimize/CommonsChunkPlugin')
var chunks = ['app']
var config = require('./package.json')

module.exports = {

	entry: {
		app: './src/app.js'
	},
	output: {
		path: __dirname+'/build/',
		filename: 'bundle/[name].js',
        sourceMapFilename: 'bundle/[name].map'
	},
	devtool: '#source-map',
	plugins: process.env.NODE_ENV === 'production' ? [
		new CommonsChunkPlugin({
			name: 'commons',
			chunks: chunks
		}),
	    new webpack.DefinePlugin({
	        'process.env': {
	        	'NODE_ENV': JSON.stringify('production')
	        }
	    }),
    	new webpack.optimize.UglifyJsPlugin({
    		minimize: true,
		    compress: {
		        warnings: false,
		        drop_console: true
		    }
    	}),
	] : [
		new CommonsChunkPlugin({
			name: 'commons',
			chunks: chunks
		}),
	],
	node: {
		fs: 'empty'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query:{
					presets:['react', 'es2015']
				}
			},
			{
		        test: /\.json$/,
		        loader: 'json-loader'
		    },
			{
				test: /\.(jpg|png|svg)$/,
				loader: 'url-loader'
			},
			{
		        test: /\.(scss|css)$/,
		        loader: 'style-loader!css-loader!sass-loader'
		    },
			{
		        test: /\.(eot|woff2|woff|ttf)$/,
		        loader: 'url-loader'
		    }
		]
	}
}
