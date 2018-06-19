const path = require('path'),
	MiniCSSExtractPlugin = require('mini-css-extract-plugin'),
	CleanWebpackPlugin = require('clean-webpack-plugin'),
	swp = require('sw-precache-webpack-plugin'),
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
			extensions: ['.js', '.css', '.styl'],
			alias: {
				'js': path.resolve(__dirname, './resources/assets/js'),
				'css': path.resolve(__dirname, '')
			}
		},
		plugins: [
			new MiniCSSExtractPlugin( {
				filename: 'dist/css/[name].css'
			}),
			new CleanWebpackPlugin(['./dist/js', './dist/fonts', './dist/css']),
			/*new swp({
			 cacheId: 'travel-app',
			 filename: 'service-worker.js',
			 minify: process.env.NODE_ENV === 'production',
			 staticFileGlobs: [
			 'public/**.{css,eot,svg,ttf,woff,woff2,js,html}',
			 'https://fonts.googleapis.com/icon?family=Material+Icons',
			 'https://unpkg.com/vuetify/dist/vuetify.min.css',
			 '/en',
			 '/nl',
			 '/'

			 ],
			 handleFetch: true,
			 stripPrefix: 'public',
			 dynamicUrlToDependencies: {
			 '/': ['resources/views/index.blade.php'],
			 },
			 runtimeCaching: [
			 {
			 urlPattern: /^https:\/\/fonts\.googleapis\.com\//,
			 handler: 'cacheFirst'
			 },
			 {
			 urlPattern: /^https:\/\/fonts\.gstatic\.com\//,
			 handler: 'cacheFirst'
			 },
			 {
			 urlPattern: /^https:\/\/maps\.gstatic\.com\//,
			 handler: 'cacheFirst'
			 },
			 {
			 urlPattern: /^https:\/\/unpkg\.com\//,
			 handler: 'cacheFirst'
			 },
			 {
			 urlPattern: /^https:\/\/travel\.dsuper\.nl\/api\//,
			 handler: 'cacheFirst'
			 },
			 {
			 urlPattern: /^https:\/\/images\.pexels\.com\//,
			 handler: 'cacheFirst'
			 }
			 ],
			 staticFileGlobsIgnorePatterns: [/\.map$/, /mix-manifest\.json$/, /manifest\.json$/, /service-worker\.js$/],
			 ]})   */
		]
	}
};