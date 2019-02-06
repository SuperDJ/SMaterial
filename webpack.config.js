const
	autoprefixer = require('autoprefixer'),
	CleanWebpackPlugin = require('clean-webpack-plugin'),
	glob = require('glob'),
	MiniCSSExtractPlugin = require('mini-css-extract-plugin'),
	path = require('path'),
	postCssPresetEnv = require('postcss-preset-env'),
	postCssScss = require('postcss-scss'),
	SassLintPlugin = require('sass-lint-webpack');

const OUTPUT_DIR = path.resolve(__dirname, 'docs');

module.exports = {
	entry: {
		'material': glob.sync("./src/js/**/*.js"),
		'material-light': './src/sass/material.scss'
	},
	output: {
		path: OUTPUT_DIR,
		filename: 'dist/js/[name].js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: ['/node_modules/', '/dist/', '/src/css', '/docs'],
				use: [
					'babel-loader',
					{
						loader: 'eslint-loader',
						options: {
							fix: true
						}
					}
				],
			},
			{
				test: /\.(sa|sc|c)ss$/,
				exclude: ['/node_modules', '/dist', '/src/js', '/docs'],
				use: [
					{
						loader: MiniCSSExtractPlugin.loader,
						options: {
							sourceMap: true,
							minimize: process.env.NODE_ENV === 'production',
						}
					},
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: true,
							syntax: postCssScss,
							plugins: () => [
								autoprefixer,
								postCssPresetEnv({
									stage: 0,
									features: {
										'color-mod-function': true,
										'alpha-hex-colors': true
									}
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
		contentBase: OUTPUT_DIR,
		watchContentBase: true,
	},
	devtool: process.env.NODE_ENV === 'development' ? 'cheap-module-eval-source-map' : 'source-map',
	resolve: {
		extensions: ['.js', '.css', '.styl', '.scss', '.sass', '.ts', '.tsx'],
		alias: {
			'js': path.resolve(__dirname, './src/js'),
			'css': path.resolve(__dirname, './src/css')
		}
	},
	plugins: [
		new MiniCSSExtractPlugin({
			filename: 'dist/css/[name].css',
		}),
		new CleanWebpackPlugin(['./dist/', './docs/dist']),
		//new SassLintPlugin()
	]
};