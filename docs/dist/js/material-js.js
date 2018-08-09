/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**************************************\r\n * App bar\r\n **************************************/\n\nvar appBars = document.getElementsByClassName('app-bar');\nvar container = document.getElementsByClassName('container')[0];\n\nif (appBars) {\n\tvar _loop = function _loop(i) {\n\t\tvar appBar = appBars[i];\n\n\t\tnew ResizeObserver(function () {\n\t\t\tvar height = appBar.getBoundingClientRect().height;\n\t\t\tcontainer.style.setProperty('--app-bar-height', height + 'px');\n\t\t}).observe(appBar);\n\t};\n\n\tfor (var i = 0; i < appBars.length; i++) {\n\t\t_loop(i);\n\t}\n}\n\n/**************************************\r\n * Buttons\r\n /**************************************/\n\nvar buttons = document.getElementsByClassName('button');\n\nif (buttons) {\n\tfor (var i = 0; i < buttons.length; i++) {\n\t\tvar button = buttons[i];\n\n\t\tbutton.addEventListener('click', function (e) {\n\t\t\tvar rect = e.target.getBoundingClientRect(),\n\t\t\t    x = Math.ceil(e.clientX - rect.left),\n\t\t\t    y = Math.ceil(e.clientY - rect.top);\n\n\t\t\tconsole.log(x, y);\n\t\t});\n\t}\n}\n\n/**************************************\r\n * Data tables\r\n **************************************/\nvar dataTables = document.getElementsByClassName('data-table');\n\nif (dataTables) {\n\tfor (var _i = 0; _i < dataTables.length; _i++) {\n\t\tvar dataTable = dataTables[_i];\n\n\t\tvar _container = document.createElement('div');\n\t\tdataTable.parentNode.insertBefore(_container, dataTable);\n\t\t_container.classList.add('data-table--responsive');\n\t\t_container.appendChild(dataTable);\n\t}\n}\n\n/**************************************\r\n * Navigation drawer\r\n **************************************/\n\nvar drawers = document.getElementsByClassName('drawer');\n\nif (drawers) {\n\tfor (var _i2 = 0; _i2 < drawers.length; _i2++) {\n\t\tvar drawer = drawers[_i2];\n\t\tvar parents = drawer.querySelectorAll('.drawer__item--parent');\n\t\tvar children = drawer.querySelectorAll('.drawer__item__children');\n\n\t\tchildren.forEach(function (child) {\n\t\t\tvar height = child.getBoundingClientRect().height;\n\t\t\tchild.style.setProperty('--drawer__item__children-height', height + 'px');\n\t\t\tchild.style.height = 0;\n\t\t});\n\t}\n}\n\n/**************************************\r\n * Tabs\r\n **************************************/\n\nvar tabs = document.getElementsByClassName('tabs__tab');\n\nif (tabs) {\n\tvar _loop2 = function _loop2(_i3) {\n\t\tvar tab = tabs[_i3];\n\t\tvar width = tab.getBoundingClientRect().width;\n\n\t\ttab.style.setProperty('--tabs__tab-width', width + 'px');\n\n\t\ttab.addEventListener('click', function (e) {\n\t\t\tvar rect = e.target.getBoundingClientRect(),\n\t\t\t    left = Math.ceil(e.clientX - rect.left),\n\t\t\t    top = Math.ceil(e.clientY - rect.top);\n\n\t\t\ttab.style.setProperty('--tabs__tab__riple-left', left + 'px');\n\t\t\ttab.style.setProperty('--tabs__tab__riple-top', top + 'px');\n\t\t});\n\t};\n\n\tfor (var _i3 = 0; _i3 < tabs.length; _i3++) {\n\t\t_loop2(_i3);\n\t}\n}\n\n/**************************************\r\n * Text fields\r\n **************************************/\nvar textFields = document.getElementsByClassName('text-field__input');\n\nif (textFields) {\n\tvar _loop3 = function _loop3(_i4) {\n\t\tvar textField = textFields[_i4];\n\t\tvar value = textField.value;\n\t\tvar container = textField.parentElement;\n\n\t\tif (!container) {\n\t\t\tconsole.error('Input does not have a container');\n\t\t}\n\n\t\tvalue !== '' && value.length > 0 ? container.classList.add('text-field--active') : container.classList.remove('text-field--active');\n\n\t\ttextField.addEventListener('focus', function () {\n\t\t\tcontainer.classList.add('text-field--focus');\n\t\t});\n\n\t\ttextField.addEventListener('blur', function () {\n\t\t\tcontainer.classList.remove('text-field--focus');\n\t\t});\n\n\t\ttextField.addEventListener('input', function () {\n\t\t\tvalue = textField.value;\n\t\t\tif (value !== '' && value.length > 0) {\n\t\t\t\tcontainer.classList.add('text-field--active');\n\t\t\t} else {\n\t\t\t\tcontainer.classList.remove('text-field--active');\n\t\t\t}\n\t\t});\n\t};\n\n\tfor (var _i4 = 0; _i4 < textFields.length; _i4++) {\n\t\t_loop3(_i4);\n\t}\n}\n\n/**************************************\r\n * Tooltips\r\n **************************************/\n\nvar tooltips = document.getElementsByClassName('tooltip__content');\n\nif (tooltips) {\n\tfor (var _i5 = 0; _i5 < tooltips.length; _i5++) {\n\t\tvar tooltip = tooltips[_i5];\n\t\tvar width = tooltip.getBoundingClientRect().width;\n\t\ttooltip.style.setProperty('--tooltip-width', width + 'px');\n\t}\n}\n\n/**************************************\r\n * Triggers\r\n **************************************/\n\nvar triggers = document.querySelectorAll('[data-trigger]');\nvar triggered = []; // Store all elements that are triggered\n\nif (triggers) {\n\tvar _loop4 = function _loop4(_i6) {\n\t\tvar trigger = triggers[_i6];\n\t\tvar id = trigger.dataset.trigger;\n\t\tvar element = document.getElementById(id);\n\t\tvar className = element.classList[0] + '--active';\n\n\t\ttrigger.addEventListener('click', function () {\n\t\t\t// Set the currently triggered element(s) in array\n\t\t\ttriggered.indexOf(element) < 0 ? triggered.push(element) : '';\n\n\t\t\tif (element.classList.contains(className)) {\n\t\t\t\telement.classList.remove(className);\n\t\t\t} else {\n\t\t\t\telement.classList.add(className);\n\t\t\t}\n\t\t});\n\n\t\tdocument.addEventListener('mouseup', function (e) {\n\t\t\tfor (var _i7 = 0; _i7 < triggered.length; _i7++) {\n\t\t\t\tvar _trigger = triggered[_i7];\n\n\t\t\t\tif (_trigger === e.target || _trigger !== e.target && !_trigger.contains(e.target)) {\n\t\t\t\t\t_trigger.classList.remove(className);\n\n\t\t\t\t\t// Remove element from array\n\t\t\t\t\t_i7 === 0 ? triggered.shift() : triggered.slice(_i7, 1);\n\t\t\t\t}\n\t\t\t}\n\t\t});\n\t};\n\n\tfor (var _i6 = 0; _i6 < triggers.length; _i6++) {\n\t\t_loop4(_i6);\n\t}\n}\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ })

/******/ });