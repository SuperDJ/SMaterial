const
	autoprefixer = require('autoprefixer'),
	{ CleanWebpackPlugin } = require('clean-webpack-plugin'),
	MiniCSSExtractPlugin = require('mini-css-extract-plugin'),
	path = require('path'),
	TerserPlugin = require("terser-webpack-plugin");

const OUTPUT_DIR = path.resolve(__dirname, 'docs');

module.exports = {    optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				test: /\.js(\?.*)?$/i,
				parallel: 2,
				terserOptions: {
					format: {
						comments: false,
					},
				},
				extractComments: false,
			}),
		],
	},
	entry: {
		'material': './src/js/main.js',
		'material-light': './src/sass/material-light.scss',
		'material-dark': './src/sass/material-dark.scss'
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
					},
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: true,
							postcssOptions: {
								plugins: {
									autoprefixer: {}
								},
							}
						},
					},
					{
						loader: 'sass-loader',
						options: {
							implementation: require("sass"),
							sourceMap: true
						}
					}
				]
			}
		]
	},
	devtool: process.env.NODE_ENV === 'development' ? 'cheap-source-map' : 'source-map',
	resolve: {
		extensions: ['.js', '.css', '.scss', '.ts', '.tsx'],
		alias: {
			'js': path.resolve(__dirname, './src/js'),
			'css': path.resolve(__dirname, './src/css')
		}
	},
	plugins: [
		new MiniCSSExtractPlugin({
			filename: 'dist/css/[name].css',
		}),
		new CleanWebpackPlugin({
			cleanOnceBeforeBuildPatterns: ['dist/']
		})
	]
};
