[![npm version](https://badge.fury.io/js/smaterial.svg)](https://badge.fury.io/js/smaterial)

# Content

- About Material
- Getting started
- Minify files
- Contributing

# About Material
[Material](https://superdj.github.io/material/) is a CSS framework based on the Material Design guidelines.

# Getting started
To get started you can choose to use the source files or the minified files.
In order to use the minified files the easiest way is to load them from GitHub for now:

	<link rel="styleheet" href="//superdj.github.io/material/dist/css/material-light.css">
	<script src="//superdj.github.io/material/dist/js/material.js"></script>
	
If you prefer to use the source file you can do so by installing the package:

	npm i -D smaterial
	
In order to use the source files for sass you case use one of the following:

	@import '~smaterial/src/sass/material-light'
	@import '~smaterial/src/sass/material-dark'
	@import '~smaterial/src/sass/index'
	
Both `index` and `material-light` are basically the same. However `material-dark` will result in a dark theme.
The dark theme can also be achieved by importing `index` and override the variable `$theme: dark`

and for js:

	import '~smaterial/src/js/main.js'
	
# Minify files
To minify the output of both SASS and JS files there are a couple of tricks you can use. Do note that this only works for the source files.

## JS
When using the source files for JS you can simply import only the required classes. 
How you can do this is shown below, the full list of classes can be found in `src/js/main.js`

## SASS
For SASS you can simply edit defined arrays which specify the used components.
For example copy and paste the following variable into your own sass file: `$icon-settings: (18, 24, 36, 48);`.
If you then delete `18` the class `.icon--18` will not be included in the outputted CSS file.