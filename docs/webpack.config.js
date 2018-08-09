const path = require('path'),
	{ VueLoaderPlugin } = require('vue-loader'),
	CleanWebpackPlugin = require('clean-webpack-plugin');

	console.log(process.env);

module.exports = env => {
	return {
		entry: {
			'app': './src/js/app.js',
		},
		output: {
			path: __dirname,
			filename: './dist/js/[name].js',
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: ['./node_modules/', './dist/', './src/css', '../'],
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['babel-preset-env', 'babel-preset-es2015', 'babel-preset-stage-2'],
							plugins: ['babel-plugin-dynamic-import-node']
						}
					}
				},
				{
					test: /\.vue$/,
					exclude: ['./node_modules', './src/scss/', '../'],
					loader: 'vue-loader',
				}
			]
		},
		resolve: {
			extensions: ['.js', '.vue'],
			alias: {
				'@': path.resolve(__dirname, './src/js')
			}
		},
		plugins: [
			new VueLoaderPlugin(),
			new CleanWebpackPlugin(['./dist/js']),
		]
	}
};