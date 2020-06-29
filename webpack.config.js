const
	autoprefixer = require('autoprefixer'),
	{ CleanWebpackPlugin } = require('clean-webpack-plugin'),
	MiniCSSExtractPlugin = require('mini-css-extract-plugin'),
	path = require('path'),
	postCssPresetEnv = require('postcss-preset-env');

const OUTPUT_DIR = path.resolve(__dirname, 'docs');

module.exports = {
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
							plugins: () => [
								autoprefixer,
								postCssPresetEnv({
									stage: 0,
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
		}),
		//new SassLintPlugin()
	]
};
