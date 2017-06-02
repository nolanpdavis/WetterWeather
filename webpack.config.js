var webpack = require('webpack')
var path = require('path')
var CommonsChunkPlugin = new require('webpack/lib/optimize/CommonsChunkPlugin')
var chunks = ['app']
var config = require('./package.json')
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

	entry: {
		app: './src/app.js'
	},
	output: {
		path: __dirname+'/dist',
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
    	})
	] : [
		new CommonsChunkPlugin({
			name: 'commons',
			chunks: chunks
		}),
		new ExtractTextPlugin({ filename: 'styles/main.css',
		   allChunks: true
	   })
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
				loader: 'file-loader',
				query: {
					name: '[name].[ext]',
					outputPath: 'images/',
					publicPath: (config.server) ? '/' : 'dist/',
					useRelativePath: false
				}
			},
			{
		        test: /\.(scss|css)$/,
		        loader: ExtractTextPlugin.extract('css-loader!sass-loader')
		    },
			{
		        test: /\.(eot|woff2|woff|ttf)$/,
		        loader: 'file-loader',
				query: {
					name: '[name].[ext]',
					outputPath: 'styles/',
					publicPath: (config.server) ? '/' : 'dist/',
					useRelativePath: false
				}
		    }
		]
	}
}
