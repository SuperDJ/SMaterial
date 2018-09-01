const path = require('path'),
	MiniCSSExtractPlugin = require('mini-css-extract-plugin'),
	CleanWebpackPlugin = require('clean-webpack-plugin'),
	postCssPresetEnv = require('postcss-preset-env'),
	postCssScss = require('postcss-scss'),
	glob = require('glob'),
	autoprefixer = require('autoprefixer');

module.exports = env => {
	return {
		entry: {
			'material': glob.sync("./src/js/**/*.js"),
			'material-light': './src/sass/material.scss'
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
					use: [
						'babel-loader',
						{
							loader: 'eslint-loader',
							options: {
								fix: true
							}
						}
					]
				},
				{
					test: /\.css$/,
					exclude: ['/node_modules', '/dist', '/src/js'],
					use: [
						MiniCSSExtractPlugin.loader,
						{
							loader: 'css-loader',
							options: {
								sourceMap: true,
								minimize: process.env.NODE_ENV === 'development'
							}
						},
						{
							loader: 'postcss-loader',
							options: {
								sourceMap: true,
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
								sourceMap: true,
								minimize: process.env.NODE_ENV === 'production'
							}
						},
						{
							loader: 'postcss-loader',
							options: {
								sourceMap: true,
								syntax: postCssScss,
								plugins: () => [
									autoprefixer,
									postCssPresetEnv({
										stage: 0
									}),
								],
							},
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: true
							}
						}
					]
				}
			]
		},
		devServer: {
			overlay: true,
			contentBase: path.join(__dirname, 'docs')
		},
		devtool: process.env.NODE_ENV === 'development' ? 'cheap-module-eval-source-map' : 'source-map',
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