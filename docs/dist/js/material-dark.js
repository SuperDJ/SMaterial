!function(){throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nHookWebpackError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: Module loop: this module is already being loaded.\n  ┌──> src\\sass\\foundation\\_settings.scss\n2 │ @use './../helpers/functions';\r\n  │ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ new load\n  ╵\n  ┌──> src\\sass\\colors\\_generate.scss\n2 │ @use './../helpers/functions';\r\n  │ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ original load\n  ╵\n  src\\sass\\foundation\\_settings.scss 2:1  @use\n  src\\sass\\helpers\\_functions.scss 3:1    @use\n  src\\sass\\colors\\_generate.scss 2:1      @use\n  src\\sass\\colors\\_index.scss 2:1         @forward\n  src\\sass\\material-dark.scss 2:1         root stylesheet\n    at tryRunOrWebpackError (C:\\xampp\\htdocs\\material\\node_modules\\webpack\\lib\\HookWebpackError.js:88:9)\n    at __webpack_require_module__ (C:\\xampp\\htdocs\\material\\node_modules\\webpack\\lib\\Compilation.js:5055:12)\n    at __webpack_require__ (C:\\xampp\\htdocs\\material\\node_modules\\webpack\\lib\\Compilation.js:5012:18)\n    at C:\\xampp\\htdocs\\material\\node_modules\\webpack\\lib\\Compilation.js:5083:20\n    at symbolIterator (C:\\xampp\\htdocs\\material\\node_modules\\neo-async\\async.js:3485:9)\n    at done (C:\\xampp\\htdocs\\material\\node_modules\\neo-async\\async.js:3527:9)\n    at Hook.eval [as callAsync] (eval at create (C:\\xampp\\htdocs\\material\\node_modules\\tapable\\lib\\HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at C:\\xampp\\htdocs\\material\\node_modules\\webpack\\lib\\Compilation.js:4990:43\n    at symbolIterator (C:\\xampp\\htdocs\\material\\node_modules\\neo-async\\async.js:3482:9)\n    at timesSync (C:\\xampp\\htdocs\\material\\node_modules\\neo-async\\async.js:2297:7)\n-- inner error --\nError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: Module loop: this module is already being loaded.\n  ┌──> src\\sass\\foundation\\_settings.scss\n2 │ @use './../helpers/functions';\r\n  │ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ new load\n  ╵\n  ┌──> src\\sass\\colors\\_generate.scss\n2 │ @use './../helpers/functions';\r\n  │ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ original load\n  ╵\n  src\\sass\\foundation\\_settings.scss 2:1  @use\n  src\\sass\\helpers\\_functions.scss 3:1    @use\n  src\\sass\\colors\\_generate.scss 2:1      @use\n  src\\sass\\colors\\_index.scss 2:1         @forward\n  src\\sass\\material-dark.scss 2:1         root stylesheet\n    at Object.<anonymous> (C:\\xampp\\htdocs\\material\\node_modules\\css-loader\\dist\\cjs.js!C:\\xampp\\htdocs\\material\\node_modules\\postcss-loader\\dist\\cjs.js??ruleSet[1].rules[1].use[2]!C:\\xampp\\htdocs\\material\\node_modules\\sass-loader\\dist\\cjs.js??ruleSet[1].rules[1].use[3]!C:\\xampp\\htdocs\\material\\src\\sass\\material-dark.scss:1:7)\n    at C:\\xampp\\htdocs\\material\\node_modules\\webpack\\lib\\javascript\\JavascriptModulesPlugin.js:441:11\n    at Hook.eval [as call] (eval at create (C:\\xampp\\htdocs\\material\\node_modules\\tapable\\lib\\HookCodeFactory.js:19:10), <anonymous>:7:1)\n    at C:\\xampp\\htdocs\\material\\node_modules\\webpack\\lib\\Compilation.js:5057:39\n    at tryRunOrWebpackError (C:\\xampp\\htdocs\\material\\node_modules\\webpack\\lib\\HookWebpackError.js:83:7)\n    at __webpack_require_module__ (C:\\xampp\\htdocs\\material\\node_modules\\webpack\\lib\\Compilation.js:5055:12)\n    at __webpack_require__ (C:\\xampp\\htdocs\\material\\node_modules\\webpack\\lib\\Compilation.js:5012:18)\n    at C:\\xampp\\htdocs\\material\\node_modules\\webpack\\lib\\Compilation.js:5083:20\n    at symbolIterator (C:\\xampp\\htdocs\\material\\node_modules\\neo-async\\async.js:3485:9)\n    at done (C:\\xampp\\htdocs\\material\\node_modules\\neo-async\\async.js:3527:9)\n\nGenerated code for C:\\xampp\\htdocs\\material\\node_modules\\css-loader\\dist\\cjs.js!C:\\xampp\\htdocs\\material\\node_modules\\postcss-loader\\dist\\cjs.js??ruleSet[1].rules[1].use[2]!C:\\xampp\\htdocs\\material\\node_modules\\sass-loader\\dist\\cjs.js??ruleSet[1].rules[1].use[3]!C:\\xampp\\htdocs\\material\\src\\sass\\material-dark.scss\n1 | throw new Error(\"Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\\nSassError: Module loop: this module is already being loaded.\\n  ┌──> src\\\\sass\\\\foundation\\\\_settings.scss\\n2 │ @use './../helpers/functions';\\r\\n  │ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ new load\\n  ╵\\n  ┌──> src\\\\sass\\\\colors\\\\_generate.scss\\n2 │ @use './../helpers/functions';\\r\\n  │ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ original load\\n  ╵\\n  src\\\\sass\\\\foundation\\\\_settings.scss 2:1  @use\\n  src\\\\sass\\\\helpers\\\\_functions.scss 3:1    @use\\n  src\\\\sass\\\\colors\\\\_generate.scss 2:1      @use\\n  src\\\\sass\\\\colors\\\\_index.scss 2:1         @forward\\n  src\\\\sass\\\\material-dark.scss 2:1         root stylesheet\");")}();
//# sourceMappingURL=material-dark.js.map