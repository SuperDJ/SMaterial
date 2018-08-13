const path = require('path'),
	MiniCSSExtractPlugin = require('mini-css-extract-plugin'),
	CleanWebpackPlugin = require('clean-webpack-plugin'),
	postCssPresetEnv = require('postcss-preset-env'),
	postCssScss = require('postcss-scss'),
	autoprefixer = require('autoprefixer');

module.exports = env => {
	return {
		entry: {
			'material-js': './src/js/main.js',
			'material-css': './src/css/material.scss'
		},
		output: {
			path: __dirname,
			filename: './dist/js/[name].js',
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: ['/node_modules/', '/dist/', '/src/css'],
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['babel-preset-env', 'babel-preset-es2015', 'babel-preset-stage-2'],
							plugins: ['babel-plugin-dynamic-import-node']
						}
					}
				},
				{
					test: /\.css$/,
					exclude: ['/node_modules', '/dist', '/src/js'],
					use: [
						MiniCSSExtractPlugin.loader,
						{
							loader: 'css-loader',
							options: {
								minimize: process.env.NODE_ENV === 'development'
							}
						},
						{
							loader: 'postcss-loader',
							options: {
								plugins: () => [
									autoprefixer,
									postCssPresetEnv({
										stage: 0
									}),
								]
							}
						}
					]
				},
				{
					test: /\.scss$/,
					exclude: ['/node_modules', '/dist', '/src/js'],
					use: [
						MiniCSSExtractPlugin.loader,
						{
							loader: 'css-loader',
							options: {
								minimize: process.env.NODE_ENV === 'production'
							}
						},
						{
							loader: 'postcss-loader',
							options: {
								syntax: postCssScss,
								plugins: () => [
									autoprefixer,
									postCssPresetEnv({
										stage: 0
									}),
								],
							},
						},
						'sass-loader'
					]
				},
				{
					test: /\.styl$/,
					exclude: ['/node_modules', '/dist', '/src/js'],
					use: [
						MiniCSSExtractPlugin.loader,
						{
							loader: 'css-loader',
							options: {
								minimize: process.env.NODE_ENV === 'production'
							}
						},
						{
							loader: 'postcss-loader',
							options: {
								plugins: () => [
									autoprefixer,
									postCssPresetEnv({
										stage: 0
									}),
								]
							}
						},
						'stylus-loader'
					]
				}
			]
		},
		resolve: {
			extensions: ['.js', '.css', '.styl', '.scss'],
			alias: {
				'js': path.resolve(__dirname, './src/js'),
				'css': path.resolve(__dirname, './src/css')
			}
		},
		plugins: [
			new MiniCSSExtractPlugin({
				filename: 'dist/css/[name].css',
			}),
			new CleanWebpackPlugin(['./dist/']),
		]
	}
};