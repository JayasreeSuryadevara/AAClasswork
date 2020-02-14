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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection {\n    constructor(htmlEl) {\n        this.htmlEl = htmlEl;\n    }\n}\nDOMNodeCollection.prototype.html = function(arg){\n    if(arg){\n        return this.htmlEl.map( el => {\n            el.innerHTML(arg);\n        });\n    } else {\n        return this.htmlEl[0].innerHTML();\n    }\n}\nDOMNodeCollection.prototype.empty = function(){\n    return this.htmlEl.map(el =>  el = \"\");\n}\n\nDOMNodeCollection.prototype.append = function(htmlArr) {\n    htmlArr.forEach(el1 => {\n        this.htmlEl.forEach(el2 => {\n            el2.innerHTML.append(el1.outerHTML);\n        });\n    });\n    return this.htmlEl;\n    //.each(el) this.htmlEl(el).innerHTML.append(el.outerHTML)\n}\n\nDOMNodeCollection.prototype.attr = function (...args) {\n    if ((args.length === 1) && (typeof args !== Object)){\n        this.htmlEl.forEach( el => {\n            return el.getAttribute(args[0]);\n        });\n    } else if (args.length === 2) {\n        if (args[1] instanceof Function){\n            const callback = args[1];\n            const el = args[0];\n            return callback(args.indexOf(el), el.value);\n        } else {\n            this.htmlEl.map(el => {\n                return el.setAttribute(args[0],args[1]);\n            })\n        }\n    } else {\n        const attributes = Object.keys(args);\n        const values = Object.values(args);\n        for(let i = 0; i < args.length; i++){\n            this.htmlEl[i].setAttribute(attributes[i],values[i]);\n        }\n    }\n}\n\n\nDOMNodeCollection.prototype.addClass = function (...args) {\n    if (args.length === 1) {\n        this.htmlEl.map (el => {\n            return el.classList.add(args[0]);\n        });\n    } else {\n        if (args[1] instanceof Function) {\n            const callback = args[1];\n            this.htmlEl.map((el, index) => {\n                return callback(index, el.className);\n            })\n        } else {\n            this.htmlEl.map (el => {\n                return args.forEach(el1 => el.classList.add(el1));\n            });\n        }\n    }\n}\n\nDOMNodeCollection.prototype.removeClass = function (...args) {\n    if (args.length === 1) {\n        this.htmlEl.map (el => {\n            return el.classList.remove(args[0]);\n        });\n    } else {\n        if (args[1] instanceof Function) {\n            const callback = args[1];\n            this.htmlEl.map((el, index) => {\n                return callback(index, el.className);\n            })\n        } else {\n            this.htmlEl.map (el => {\n                return el.classList.remove(...args);\n            });\n        }\n    }\n}\n// element.classList\n\n\n// Syntax\n\n// Return content:\n// $(selector).html()\n\n// Set content:\n// $(selector).html(content)\n\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection */ \"./src/dom_node_collection.js\");\n\nwindow.$1 = arg => {\n    if (typeof arg === \"string\") {\n        const nodes = document.querySelectorAll(arg);\n        const nodesList = Array.from(nodes);\n        return new DOMNodeCollection(nodesList);\n        \n    } else if (arg instanceof HTMLElement) {\n        // debugger;\n        const nodes = document.querySelectorAll(arg.tagName);\n        const nodesList = Array.from(arg);\n        return new DOMNodeCollection(nodesList);\n    }\n}\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });