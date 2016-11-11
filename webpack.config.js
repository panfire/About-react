'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
	devtool: 'eval-source-map',
	resolve: {
		extensions: ['', '.js'],
	},
	debug: true,
	entry: {
		main: './src/app.js', //唯一入口文件
		vendor: ['react']
	},
	output: {
		path: __dirname+'/dist', //打包后文件存放的地方
		filename: 'bundle.js' //打包后输出的文件名
	},
	module: {
		loaders: [
			{ test: /\.js$/, loader: "jsx!babel", include: /src/},
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style", "css!postcss")},
            { test: /\.scss$/, loader: ExtractTextPlugin.extract("style", "css!postcss!sass")},
            { test: /\.(png|jpg|gif)$/, loader: 'url?limit=819200'}
		]
	},
	babel: {
	   presets: ['es2015', 'react'],
	   plugins: ['transform-runtime', ['import', {
	     libraryName: 'antd',
	     style: 'css'
	   }]]
	},
	postcss: [
	   require('autoprefixer')   //调用autoprefixer插件,css3自动补全
	],
	devServer: {
	    // contentBase: './src/views'  //本地服务器所加载的页面所在的目录
	    port: 8888,
	    colors: true,  //终端中输出结果为彩色
	    historyApiFallback: true,  //不跳转
	    inline: true  //实时刷新
	},
	plugins: [
		// new webpack.DefinePlugin({
		//   'process.env.NODE_ENV': JSON.stringify('production'),
		//   __DEV__: false
		// }),
		new CommonsChunkPlugin({
           name: 'vendor',
           filename: 'vendor.js'
        }),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new HtmlWebpackPlugin({
			filename: './index.html',
			template: './index.html'
		}),
		new webpack.HotModuleReplacementPlugin(), 
		new ExtractTextPlugin("style.css"), //CSS单独打包
		// new webpack.optimize.UglifyJsPlugin(), //压缩
		new webpack.NoErrorsPlugin() 

	]
}