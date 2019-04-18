# Content

- About Material
- Getting started
- Minify files
- Contributing

# About Material
[Material](https://superdj.github.io/material/) is a CSS framework based on the Material Design guidelines.

# Getting started
To get started all you need to do is run:

	npm i -D smaterial
	
This will install the required packages.

Then you can either use the minified or source files. In order to use the minified files the easiest way is to import them into the desired stylesheet or js file.
The minified files can be found in `~smaterial/docs/dist/css/material-light.css` and `~smaterial/docs/dist/js/material.js` 
	
In order to use the source files for sass you can use:

	@import '~smaterial/src/sass/material'

and for js:

	import '~smaterial/src/js/main.js'
	
# Minify files
To minify the output of both SASS and JS files there are a couple of tricks you can use. Do note that you need to use the source files.

## JS
When using the source files for JS you can simply import only the required classes. 
How you can do this is shown below, the full list of classes can be found in `src/js/main.js`

## SASS
For the SASS files there are a couple of ways to minify the output. 
The most simple way is to comment some of the imported partials from `src/sass/material.css`.
However it's more efficient to adjust the defined arrays.

For example copy and paste the following variable into your own sass file: `$icon-settings: (18, 24, 36, 48);`.
If you then delete `18` the class `.icon--18` will not be included in the outputted CSS file.