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
eval("\n\n/**************************************\r\n * App bar\r\n **************************************/\n\nvar appBars = document.getElementsByClassName('app-bar');\nvar container = document.getElementsByClassName('container')[0];\n\nif (appBars) {\n\tvar _loop = function _loop(i) {\n\t\tvar appBar = appBars[i];\n\n\t\t['resize', 'load'].forEach(function (e) {\n\t\t\twindow.addEventListener(e, function () {\n\t\t\t\tvar height = appBar.getBoundingClientRect().height;\n\t\t\t\tcontainer.style.setProperty('--app-bar-height', height + 'px');\n\t\t\t});\n\t\t});\n\n\t\t/*\r\n  TODO turn back on when browser support is better\r\n  new ResizeObserver( () => {\r\n  \tlet height = appBar.getBoundingClientRect().height;\r\n  \tcontainer.style.setProperty( '--app-bar-height', `${height}px` );\r\n  }).observe(appBar);\r\n  */\n\t};\n\n\tfor (var i = 0; i < appBars.length; i++) {\n\t\t_loop(i);\n\t}\n}\n\n/**************************************\r\n * Banners\r\n */\n\nvar banners = document.getElementsByClassName('banner');\n\nif (banners) {\n\tfor (var i = 0; i < banners.length; i++) {\n\t\tvar banner = banners[i];\n\n\t\t// Set role\n\t\tbanner.setAttribute('role', 'banner');\n\t}\n}\n\n/**************************************\r\n* Buttons\r\n/**************************************/\n\nvar buttons = document.getElementsByClassName('button');\n\nif (buttons) {\n\tfor (var _i = 0; _i < buttons.length; _i++) {\n\t\tvar button = buttons[_i];\n\n\t\t// Set role\n\t\tbutton.setAttribute('role', 'button');\n\n\t\tbutton.addEventListener('click', function (e) {\n\t\t\tvar rect = e.target.getBoundingClientRect(),\n\t\t\t    x = Math.ceil(e.clientX - rect.left),\n\t\t\t    y = Math.ceil(e.clientY - rect.top);\n\n\t\t\tconsole.log(x, y);\n\t\t});\n\t}\n}\n\n/**************************************\r\n* Data tables\r\n**************************************/\n\nvar dataTables = document.getElementsByClassName('data-table');\n\nif (dataTables) {\n\tfor (var _i2 = 0; _i2 < dataTables.length; _i2++) {\n\t\tvar dataTable = dataTables[_i2];\n\n\t\tdataTable.setAttribute('role', 'table');\n\n\t\tvar rows = dataTable.querySelectorAll('tr');\n\t\tvar columnheaders = dataTable.querySelectorAll('th');\n\n\t\tfor (var _i3 = 0; _i3 < rows.length; _i3++) {\n\t\t\tvar row = rows[_i3];\n\t\t\trow.setAttribute('role', 'row');\n\t\t}\n\n\t\tfor (var _i4 = 0; _i4 < columnheaders.length; _i4++) {\n\t\t\tvar columnheader = columnheaders[_i4];\n\t\t\tcolumnheader.setAttribute('role', 'columnheader');\n\t\t}\n\n\t\tvar _container = document.createElement('div');\n\t\tdataTable.parentNode.insertBefore(_container, dataTable);\n\t\t_container.classList.add('data-table--responsive');\n\t\t_container.appendChild(dataTable);\n\t}\n}\n\n/**************************************\r\n * Dialogs\r\n **************************************/\n\nvar dialogs = document.getElementsByClassName('dialog');\n\nif (dialogs) {\n\tfor (var _i5 = 0; _i5 < dialogs.length; _i5++) {\n\t\tvar dialog = dialogs[_i5];\n\t\tdialog.setAttribute('role', 'dialog');\n\t}\n}\n\n/**************************************\r\n * Dividers\r\n **************************************/\n\nvar dividers = document.getElementsByClassName('divider');\n\nif (dividers) {\n\tfor (var _i6 = 0; _i6 < dividers.length; _i6++) {\n\t\tvar divider = dividers[_i6];\n\n\t\tdivider.setAttribute('role', 'separator');\n\t\tdivider.setAttribute('aria-orientation', 'horizontal');\n\t}\n}\n\n/**************************************\r\n* Navigation drawer\r\n**************************************/\n\nvar drawers = document.getElementsByClassName('drawer');\n\nif (drawers) {\n\tfor (var _i7 = 0; _i7 < drawers.length; _i7++) {\n\t\tvar drawer = drawers[_i7];\n\t\tvar parents = drawer.querySelectorAll('.drawer__item--parent');\n\t\tvar children = drawer.querySelectorAll('.drawer__item__children');\n\n\t\tchildren.forEach(function (child) {\n\t\t\tvar height = child.getBoundingClientRect().height;\n\t\t\tchild.style.setProperty('--drawer__item__children-height', height + 'px');\n\t\t\tchild.style.height = 0;\n\t\t});\n\t}\n}\n\n/**************************************\r\n * Menu\r\n **************************************/\n\nvar menus = document.getElementsByClassName('menu');\n\nif (menus) {\n\tvar _loop2 = function _loop2(_i8) {\n\t\tvar menu = menus[_i8];\n\t\tvar style = menu.getBoundingClientRect();\n\t\tvar width = style.width;\n\t\tvar height = style.height;\n\n\t\tmenu.style.setProperty('--menu-max-width', 0);\n\t\tmenu.style.setProperty('--menu-max-height', 0);\n\n\t\tvar observer = new MutationObserver(function (mutations) {\n\t\t\tmutations.forEach(function (mutation) {\n\t\t\t\tif (mutation.attributeName === 'class') {\n\t\t\t\t\tvar attributeValue = document.getElementById(mutation.target.id).getAttribute(mutation.attributeName);\n\n\t\t\t\t\tif (attributeValue.indexOf('active') > -1) {\n\t\t\t\t\t\tmenu.style.setProperty('--menu-max-width', width + 'px');\n\t\t\t\t\t\tmenu.style.setProperty('--menu-max-height', height + 'px');\n\t\t\t\t\t} else {\n\t\t\t\t\t\tmenu.style.setProperty('--menu-max-width', 0);\n\t\t\t\t\t\tmenu.style.setProperty('--menu-max-height', 0);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t});\n\t\t});\n\t\tobserver.observe(menu, {\n\t\t\tattributes: true\n\t\t});\n\t\t/*\r\n  \t\tmenu.addEventListener( 'active', () => {\r\n  \t\t\tconsole.log(1);\r\n  \t\t\tmenu.style.setProperty( '--menu-max-width', `${width}px`);\r\n  \t\t\tmenu.style.setProperty( '--menu-max-height', `${height}px` );\r\n  \t\t});\r\n  \r\n  \t\tmenu.addEventListener( 'inactive', () => {\r\n  \t\t\tconsole.log(2);\r\n  \t\t\tmenu.style.setProperty( '--menu-max-width', 0 );\r\n  \t\t\tmenu.style.setProperty( '--menu-max-height', 0 );\r\n  \t\t});*/\n\t};\n\n\tfor (var _i8 = 0; _i8 < menus.length; _i8++) {\n\t\t_loop2(_i8);\n\t}\n}\n\n/**************************************\r\n * Progress\r\n **************************************/\n\nvar progressBars = document.getElementsByClassName('progress');\n\nif (progressBars) {\n\tfor (var _i9 = 0; _i9 < progressBars.length; _i9++) {\n\t\tvar progressBar = progressBars[_i9];\n\t\tvar progressBarWidth = progressBar.getBoundingClientRect().width;\n\t\tvar progress = progressBar.querySelector('.progress__bar');\n\n\t\tconsole.log(progressBar.tagName);\n\n\t\tif (progress) {\n\t\t\tvar progressWidth = progress.getBoundingClientRect().width;\n\t\t\tprogressBar.setAttribute('aria-valuenow', progressWidth / progressBarWidth * 100);\n\t\t\tconsole.log(progressWidth / progressBarWidth * 100);\n\t\t}\n\n\t\tprogressBar.setAttribute('role', 'progressbar');\n\t\tprogressBar.setAttribute('aria-valuemin', '0');\n\t\tprogressBar.setAttribute('aria-valuemax', '100');\n\t}\n}\n\n/************************************** \r\n * Selection \r\n **************************************/\n\nvar switches = document.getElementsByClassName('switch');\n\nif (switches) {\n\tvar _loop3 = function _loop3(_i10) {\n\t\tvar switchElement = switches[_i10];\n\n\t\tswitchElement.setAttribute('role', 'switch');\n\t\tswitchElement.setAttribute('aria-checked', switchElement.checked);\n\t\tswitchElement.setAttribute('aria-disabled', switchElement.disabled);\n\n\t\tswitchElement.addEventListener('click', function () {\n\t\t\tswitchElement.setAttribute('aria-checked', switchElement.checked);\n\t\t});\n\t};\n\n\tfor (var _i10 = 0; _i10 < switches.length; _i10++) {\n\t\t_loop3(_i10);\n\t}\n}\n\nvar checkboxes = document.getElementsByClassName('switch');\n\nif (checkboxes) {\n\tvar _loop4 = function _loop4(_i11) {\n\t\tvar checkbox = checkboxes[_i11];\n\n\t\tcheckbox.setAttribute('role', 'switch');\n\t\tcheckbox.setAttribute('aria-checked', checkbox.checked);\n\t\tcheckbox.setAttribute('aria-disabled', checkbox.disabled);\n\n\t\tcheckbox.addEventListener('click', function () {\n\t\t\tcheckbox.setAttribute('aria-checked', checkbox.checked);\n\t\t});\n\t};\n\n\tfor (var _i11 = 0; _i11 < checkboxes.length; _i11++) {\n\t\t_loop4(_i11);\n\t}\n}\n\n/**************************************\r\n* Tabs\r\n* TODO add aria\r\n**************************************/\n\nvar tabs = document.getElementsByClassName('tabs__tab');\n\nif (tabs) {\n\tvar _loop5 = function _loop5(_i12) {\n\t\tvar tab = tabs[_i12];\n\t\tvar width = tab.getBoundingClientRect().width;\n\n\t\ttab.style.setProperty('--tabs__tab-width', width + 'px');\n\n\t\ttab.addEventListener('click', function (e) {\n\t\t\tvar rect = e.target.getBoundingClientRect(),\n\t\t\t    left = Math.ceil(e.clientX - rect.left),\n\t\t\t    top = Math.ceil(e.clientY - rect.top);\n\n\t\t\ttab.style.setProperty('--tabs__tab__ripple-left', left + 'px');\n\t\t\ttab.style.setProperty('--tabs__tab__ripple-top', top + 'px');\n\t\t});\n\t};\n\n\tfor (var _i12 = 0; _i12 < tabs.length; _i12++) {\n\t\t_loop5(_i12);\n\t}\n}\n\n/**************************************\r\n* Text fields\r\n**************************************/\n\nvar textFields = document.getElementsByClassName('text-field__input');\n\nif (textFields) {\n\tvar _loop6 = function _loop6(_i13) {\n\t\tvar textField = textFields[_i13];\n\t\tvar value = textField.value;\n\t\tvar container = textField.parentElement;\n\n\t\tif (!container) {\n\t\t\tconsole.error('Input does not have a container');\n\t\t}\n\n\t\tvalue !== '' && value.length > 0 ? container.classList.add('text-field--active') : container.classList.remove('text-field--active');\n\n\t\ttextField.addEventListener('focus', function () {\n\t\t\tcontainer.classList.add('text-field--focus');\n\t\t});\n\n\t\ttextField.addEventListener('blur', function () {\n\t\t\tcontainer.classList.remove('text-field--focus');\n\t\t});\n\n\t\ttextField.addEventListener('input', function () {\n\t\t\tvalue = textField.value;\n\n\t\t\tif (value !== '' && value.length > 0) {\n\t\t\t\tcontainer.classList.add('text-field--active');\n\t\t\t} else {\n\t\t\t\tcontainer.classList.remove('text-field--active');\n\t\t\t}\n\t\t});\n\t};\n\n\tfor (var _i13 = 0; _i13 < textFields.length; _i13++) {\n\t\t_loop6(_i13);\n\t}\n}\n\n/**************************************\r\n* Tooltips\r\n**************************************/\n\nvar tooltips = document.getElementsByClassName('tooltip');\n\nif (tooltips) {\n\tvar _loop7 = function _loop7(_i14) {\n\t\tvar tooltip = tooltips[_i14];\n\t\tvar content = tooltip.querySelector('.tooltip__content');\n\t\tvar width = content.getBoundingClientRect().width;\n\t\tvar id = 'tooltip-' + _i14;\n\n\t\t// Element triggering tooltip\n\t\tvar controller = tooltip.childNodes.forEach(function (controller) {\n\t\t\tif (controller.classList !== undefined && !controller.classList.contains('tooltip__content')) {\n\t\t\t\tcontroller.setAttribute('aria-describedby', id);\n\t\t\t\tcontroller.setAttribute('aria-haspopup', true);\n\t\t\t}\n\t\t});\n\n\t\tcontent.setAttribute('id', id);\n\t\tcontent.setAttribute('role', 'tooltip');\n\t\tcontent.style.setProperty('--tooltip-width', width + 'px');\n\t};\n\n\tfor (var _i14 = 0; _i14 < tooltips.length; _i14++) {\n\t\t_loop7(_i14);\n\t}\n}\n\n/**************************************\r\n* Triggers\r\n**************************************/\n\nvar triggers = document.querySelectorAll('[data-trigger]');\nvar active = new Event('active', { 'bubbles': true, 'cancelable': true });\nvar inactive = new Event('inactive', { 'bubbles': true, 'cancelable': true });\nvar triggered = []; // Store all elements that are triggered\n\nif (triggers) {\n\tvar _loop8 = function _loop8(_i15) {\n\t\tvar trigger = triggers[_i15];\n\t\tvar id = trigger.dataset.trigger;\n\t\tvar element = document.getElementById(id);\n\n\t\ttrigger.classList.add('cursor--pointer');\n\n\t\tif (!element) {\n\t\t\tconsole.error('Trigger element not found');\n\t\t}\n\n\t\tif (element) {\n\t\t\tvar className = element.classList[0] + '--active';\n\n\t\t\ttrigger.addEventListener('click', function () {\n\t\t\t\t// Set the currently triggered element(s) in array\n\t\t\t\ttriggered.indexOf(element) < 0 ? triggered.push(element) : '';\n\n\t\t\t\tif (element.classList.contains(className)) {\n\t\t\t\t\telement.classList.remove(className);\n\t\t\t\t\tdocument.dispatchEvent(inactive);\n\t\t\t\t} else {\n\t\t\t\t\telement.classList.add(className);\n\t\t\t\t\tdocument.dispatchEvent(active);\n\t\t\t\t}\n\t\t\t});\n\n\t\t\tdocument.addEventListener('mouseup', function (e) {\n\t\t\t\tfor (var _i16 = 0; _i16 < triggered.length; _i16++) {\n\t\t\t\t\tvar _trigger = triggered[_i16];\n\n\t\t\t\t\tif (_trigger === e.target || _trigger !== e.target && !_trigger.contains(e.target)) {\n\t\t\t\t\t\t_trigger.classList.remove(className);\n\t\t\t\t\t\tdocument.dispatchEvent(inactive);\n\n\t\t\t\t\t\t// Remove element from array\n\t\t\t\t\t\t_i16 === 0 ? triggered.shift() : triggered.slice(_i16, 1);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t});\n\t\t}\n\t};\n\n\tfor (var _i15 = 0; _i15 < triggers.length; _i15++) {\n\t\t_loop8(_i15);\n\t}\n}\n\n/**************************************\r\n * Typography\r\n **************************************/\n\nvar headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];\n\nheadings.forEach(function (heading) {\n\tvar headers = document.getElementsByClassName(heading);\n\n\tif (headers) {\n\t\tfor (var _i17 = 0; _i17 < headers.length; _i17++) {\n\t\t\tvar header = headers[_i17];\n\t\t\theader.setAttribute('role', 'heading');\n\t\t}\n\t}\n});\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ })

/******/ });