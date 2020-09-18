(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["style-index"],{

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);

/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","style-index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: TEXT_DOMAIN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXT_DOMAIN", function() { return TEXT_DOMAIN; });
var TEXT_DOMAIN = "cwp_gf_wb_addon";

/***/ }),

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/*! exports provided: validateWebhookAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateWebhookAction", function() { return validateWebhookAction; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");

var _window$lodash = window.lodash,
    has = _window$lodash.has,
    get = _window$lodash.get,
    isEmpty = _window$lodash.isEmpty,
    trim = _window$lodash.trim;
var __ = wp.i18n.__;
/**
 * Run some validation based on the given webhook action
 * @param {object} action Webhook Action Object
 * @return {boolean} isValid
 */

function validateWebhookAction(action) {
  // initially the webhook is valid
  var errors = {};
  var urlRegex = /(https?:\/\/)?([\da-z\.-]+)\.([a-z]{2,6})([\/\w\.-]*)*\/?/;
  var _ref = [get(action, "name"), get(action, "url"), get(action, "requestMethod"), get(action, "requestFormat"), get(action, "includeHeaders"), get(action, "requestHeaders"), get(action, "requestHeaders"), get(action, "includeSelectiveFields"), get(action, "requestBody")],
      name = _ref[0],
      url = _ref[1],
      requestMethod = _ref[2],
      requestFormat = _ref[3],
      includeHeaders = _ref[4],
      requestHeaders = _ref[5],
      includeSelectiveFields = _ref[6],
      requestBody = _ref[7];

  if (typeof name === "undefined" || isEmpty(trim(name))) {
    errors["name"] = {
      message: __("Please Enter A Webhook Name", _constants__WEBPACK_IMPORTED_MODULE_0__["TEXT_DOMAIN"])
    };
  }

  if (typeof url === "undefined" || isEmpty(trim(url))) {
    errors["url"] = {
      message: __("Please Enter A Webhook URL", _constants__WEBPACK_IMPORTED_MODULE_0__["TEXT_DOMAIN"])
    };
  } else if (!urlRegex.test(url)) {
    errors["url"] = {
      message: __("Please Enter A Valid URL", _constants__WEBPACK_IMPORTED_MODULE_0__["TEXT_DOMAIN"])
    };
  }

  return errors;
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _webhook_picker_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webhook_picker/index */ "./src/webhook_picker/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./src/constants.js");




var _window$lodash = window.lodash,
    isEqual = _window$lodash.isEqual,
    isEmpty = _window$lodash.isEmpty,
    has = _window$lodash.has,
    get = _window$lodash.get,
    includes = _window$lodash.includes;
var addFilter = wp.hooks.addFilter;
var createHigherOrderComponent = wp.compose.createHigherOrderComponent;
var Fragment = wp.element.Fragment;

var _wp$data$select = wp.data.select("core/block-editor"),
    getBlock = _wp$data$select.getBlock;

var InspectorControls = wp.blockEditor.InspectorControls;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    Button = _wp$components.Button;
var __ = wp.i18n.__;
var withCustomControls = createHigherOrderComponent(function (BlockEdit) {
  return function (props) {
    var currentBlock = getBlock(props.clientId),
        currentBlockName = get(currentBlock, "name"),
        isBlockSupported = isEqual(currentBlockName, "cwp/block-gutenberg-forms");

    if (!isBlockSupported) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockEdit, props);
    }

    var actions = props.attributes.actions;
    var isWebhookActionAdded = includes(actions, "Webhook");
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockEdit, props), !!props.isSelected && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, isWebhookActionAdded && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      initialOpen: false,
      title: __("Webhook", _constants__WEBPACK_IMPORTED_MODULE_3__["TEXT_DOMAIN"])
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_webhook_picker_index__WEBPACK_IMPORTED_MODULE_1__["default"], props))));
  };
});
var isAddonEnabled = get(window, "cwpGlobal.settings.integrations.webhook.enable");

if (isAddonEnabled === true || isAddonEnabled === "1") {
  addFilter("editor.BlockEdit", "cwp-wb-gutenberg-forms-webhook-addon/custom-panel", withCustomControls);
}

/***/ }),

/***/ "./src/webhook_picker/components/actionsList.js":
/*!******************************************************!*\
  !*** ./src/webhook_picker/components/actionsList.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");




var _window$lodash = window.lodash,
    map = _window$lodash.map,
    get = _window$lodash.get;
var _wp$components = wp.components,
    FormToggle = _wp$components.FormToggle,
    IconButton = _wp$components.IconButton,
    Flex = _wp$components.Flex,
    Button = _wp$components.Button,
    Modal = _wp$components.Modal;
var __ = wp.i18n.__;
var _wp$element = wp.element,
    useEffect = _wp$element.useEffect,
    useState = _wp$element.useState;
/**
 * Will render added webhook lists
 */

function ActionsList(_ref) {
  var actions = _ref.actions,
      addNew = _ref.addNew,
      onDelete = _ref.onDelete,
      onSelect = _ref.onSelect;

  var _useState = useState({
    render: false,
    id: ""
  }),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      deleteConfirmationModal = _useState2[0],
      setDeleteConfirmationModal = _useState2[1];

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "cwp-gf-wb-webhook-list"
  }, deleteConfirmationModal.render && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Modal, {
    title: __("Delete Webhook?", _constants__WEBPACK_IMPORTED_MODULE_3__["TEXT_DOMAIN"]),
    onRequestClose: function onRequestClose() {
      return setDeleteConfirmationModal({
        render: false,
        id: ""
      });
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, " ", __("This will permanently delete the webhook action.", _constants__WEBPACK_IMPORTED_MODULE_3__["TEXT_DOMAIN"])), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    style: {
      textAlign: "right"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
    isDefault: true,
    style: {
      marginRight: 10
    }
  }, " ", __("Cancel", _constants__WEBPACK_IMPORTED_MODULE_3__["TEXT_DOMAIN"])), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
    isPrimary: true,
    onClick: function onClick() {
      onDelete(deleteConfirmationModal.id);
      setDeleteConfirmationModal({
        render: false,
        id: ""
      });
    }
  }, " ", __("Delete", _constants__WEBPACK_IMPORTED_MODULE_3__["TEXT_DOMAIN"])))), map(actions, function (action) {
    var name = get(action, "name");
    var id = get(action, "id");
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "cwp-gf-wb-action"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", null, name)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "options"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(IconButton, {
      icon: "trash",
      isSmall: true,
      onClick: function onClick() {
        return setDeleteConfirmationModal({
          render: true,
          id: id
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(IconButton, {
      icon: "admin-generic",
      isSmall: true,
      onClick: function onClick() {
        return onSelect(action);
      }
    })));
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "cwp-gf-wb-action-foot"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
    isSmall: true,
    isPrimary: true,
    onClick: addNew
  }, __("Add New"))));
}

/* harmony default export */ __webpack_exports__["default"] = (ActionsList);

/***/ }),

/***/ "./src/webhook_picker/components/empty.js":
/*!************************************************!*\
  !*** ./src/webhook_picker/components/empty.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Empty; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");



var Button = wp.components.Button;
var __ = wp.i18n.__;
function Empty(_ref) {
  var onAdd = _ref.onAdd;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "cwp-gf-wb-empty"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
    className: "editor-post-featured-image__toggle",
    onClick: onAdd
  }, __("Add New", _constants__WEBPACK_IMPORTED_MODULE_2__["TEXT_DOMAIN"])));
}

/***/ }),

/***/ "./src/webhook_picker/components/fields.js":
/*!*************************************************!*\
  !*** ./src/webhook_picker/components/fields.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
/* harmony import */ var _repeater__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./repeater */ "./src/webhook_picker/components/repeater.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../functions */ "./src/functions.js");
/* harmony import */ var _supports__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../supports */ "./src/webhook_picker/supports.js");





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var _wp$element = wp.element,
    useEffect = _wp$element.useEffect,
    useState = _wp$element.useState;
var _wp$components = wp.components,
    Modal = _wp$components.Modal,
    Button = _wp$components.Button,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    Radio = _wp$components.__experimentalRadio,
    RadioGroup = _wp$components.__experimentalRadioGroup;
var _window$lodash = window.lodash,
    isEmpty = _window$lodash.isEmpty,
    map = _window$lodash.map,
    clone = _window$lodash.clone,
    set = _window$lodash.set,
    get = _window$lodash.get,
    has = _window$lodash.has,
    each = _window$lodash.each,
    omit = _window$lodash.omit,
    trim = _window$lodash.trim,
    isString = _window$lodash.isString;
var __ = wp.i18n.__;

function WebhookFields(props) {
  var _useState = useState({
    name: "",
    url: "",
    requestMethod: "post",
    requestFormat: "json",
    includeHeaders: "false",
    requestHeaders: [],
    includeSelectiveFields: "false",
    requestBody: []
  }),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var _useState3 = useState({}),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState3, 2),
      validationErrors = _useState4[0],
      setValidationErrors = _useState4[1];

  useEffect(function () {
    var value = props.value;

    if (!isEmpty(value)) {
      setState(value);
    }
  }, []);

  var handleChange = function handleChange() {
    var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var newState = clone(state);
    set(newState, type, val);
    setState(newState);
    detectValidationErrorsFields(newState, type);
  };

  var getValue = function getValue(type) {
    return get(state, type);
  };

  var saveAction = function saveAction() {
    var currentValidationErrors = Object(_functions__WEBPACK_IMPORTED_MODULE_7__["validateWebhookAction"])(state);

    if (!isEmpty(currentValidationErrors)) {
      setValidationErrors(currentValidationErrors);
    } else {
      props.onAdd(state);
      setValidationErrors({});
    }
  };

  var getHelpText = function getHelpText(field) {
    var hasErrorInField = has(validationErrors, field);

    var fieldError = __(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("span", {
      className: "cwp-gf-wb-error-help"
    }, get(validationErrors, "".concat(field, ".message"))));

    switch (field) {
      case "name":
        return hasErrorInField ? fieldError : __("Custom Name For Webhook", _constants__WEBPACK_IMPORTED_MODULE_5__["TEXT_DOMAIN"]);
        break;

      case "url":
        return hasErrorInField ? fieldError : __("Will be used in the webhook request.", _constants__WEBPACK_IMPORTED_MODULE_5__["TEXT_DOMAIN"]);
    }
  };

  var hasError = function hasError(field) {
    return has(validationErrors, field) && !isEmpty(validationErrors, field);
  };
  /**
   * Will detect if the field that has validation error is changing according to the
   * validity of the field and removing the error notice
   */


  var detectValidationErrorsFields = function detectValidationErrorsFields(updatedState, fieldType) {
    var updatedValidationErrors = Object(_functions__WEBPACK_IMPORTED_MODULE_7__["validateWebhookAction"])(updatedState); // this condition tests if the upcoming state has resolved the validation error

    if (!has(updatedValidationErrors, fieldType)) {
      var newValidationErrors = omit(validationErrors, [fieldType]);
      setValidationErrors(newValidationErrors);
    } else if (has(updatedValidationErrors, fieldType)) {
      setValidationErrors(_objectSpread(_objectSpread({}, validationErrors), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, fieldType, get(updatedValidationErrors, fieldType))));
    }
  };

  var SaveTrigger = function SaveTrigger() {
    if (!isEmpty(validationErrors)) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(Button, {
        disabled: true,
        isDefault: true,
        onClick: saveAction
      }, __("Save Action", _constants__WEBPACK_IMPORTED_MODULE_5__["TEXT_DOMAIN"]));
    } else {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(Button, {
        isPrimary: true,
        onClick: saveAction
      }, __("Save Action", _constants__WEBPACK_IMPORTED_MODULE_5__["TEXT_DOMAIN"]));
    }
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
    className: "wb-field"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(TextControl, {
    className: hasError("name") ? "cwp-gf-wb-field-error" : "",
    label: __(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("span", null, "Webhook Name", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("span", {
      className: "cwp-gf-wb-required-field"
    }, "*")), _constants__WEBPACK_IMPORTED_MODULE_5__["TEXT_DOMAIN"]),
    value: getValue("name"),
    onChange: function onChange(name) {
      return handleChange(name, "name");
    },
    help: getHelpText("name"),
    placeholder: __("Webhook Name", _constants__WEBPACK_IMPORTED_MODULE_5__["TEXT_DOMAIN"]),
    type: "text"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
    className: "wb-field"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(TextControl, {
    className: hasError("url") ? "cwp-gf-wb-field-error" : "",
    placeholder: __("URL", _constants__WEBPACK_IMPORTED_MODULE_5__["TEXT_DOMAIN"]),
    help: getHelpText("url"),
    value: getValue("url"),
    onChange: function onChange(url) {
      return handleChange(url, "url");
    },
    label: __(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("span", null, "Request URL", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("span", {
      className: "cwp-gf-wb-required-field"
    }, "*")), _constants__WEBPACK_IMPORTED_MODULE_5__["TEXT_DOMAIN"]),
    type: "text"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
    className: "row wb-field"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
    className: "row-v"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(SelectControl, {
    value: getValue("requestMethod"),
    onChange: function onChange(requestMethod) {
      return handleChange(requestMethod, "requestMethod");
    },
    label: __("Request Method", _constants__WEBPACK_IMPORTED_MODULE_5__["TEXT_DOMAIN"]),
    options: _supports__WEBPACK_IMPORTED_MODULE_8__["supportedRequestMethods"],
    help: __("HTTP Method used for request", _constants__WEBPACK_IMPORTED_MODULE_5__["TEXT_DOMAIN"])
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
    className: "row-v"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(SelectControl, {
    value: getValue("requestFormat"),
    onChange: function onChange(requestFormat) {
      return handleChange(requestFormat, "requestFormat");
    },
    label: __("Request Formats", _constants__WEBPACK_IMPORTED_MODULE_5__["TEXT_DOMAIN"]),
    help: __("Select Format for request", _constants__WEBPACK_IMPORTED_MODULE_5__["TEXT_DOMAIN"]),
    options: _supports__WEBPACK_IMPORTED_MODULE_8__["supportedFormats"]
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
    className: "wb-field row"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("span", {
    className: "mr-10"
  }, " ", __("Request Headers", _constants__WEBPACK_IMPORTED_MODULE_5__["TEXT_DOMAIN"]), " "), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(RadioGroup, {
    label: __("Headers", _constants__WEBPACK_IMPORTED_MODULE_5__["TEXT_DOMAIN"]),
    onChange: function onChange(includeHeaders) {
      return handleChange(includeHeaders, "includeHeaders");
    },
    checked: getValue("includeHeaders")
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(Radio, {
    value: "false"
  }, __("No Headers")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(Radio, {
    value: "true"
  }, __("With Headers")))), getValue("includeHeaders") === "true" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
    className: "wb-field"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_repeater__WEBPACK_IMPORTED_MODULE_6__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    context: "Header",
    value: getValue("requestHeaders"),
    onChange: function onChange(value) {
      return handleChange(value, "requestHeaders");
    },
    queryTitle: __("Header Name", _constants__WEBPACK_IMPORTED_MODULE_5__["TEXT_DOMAIN"]),
    queryOptions: _supports__WEBPACK_IMPORTED_MODULE_8__["supportedDefaultHeaders"],
    optionTitle: __("Header Value", _constants__WEBPACK_IMPORTED_MODULE_5__["TEXT_DOMAIN"])
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
    className: "wb-field row"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("span", {
    className: "mr-10"
  }, " ", __(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("span", null, "Request Body", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("span", {
    className: "cwp-gf-wb-required-field"
  }, "*")), _constants__WEBPACK_IMPORTED_MODULE_5__["TEXT_DOMAIN"]), " "), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(RadioGroup, {
    label: __("Request Body", _constants__WEBPACK_IMPORTED_MODULE_5__["TEXT_DOMAIN"]),
    onChange: function onChange(includeSelectiveFields) {
      return handleChange(includeSelectiveFields, "includeSelectiveFields");
    },
    checked: getValue("includeSelectiveFields")
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(Radio, {
    value: "false"
  }, __("All Fields")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(Radio, {
    value: "true"
  }, __("Selected Fields")))), getValue("includeSelectiveFields") === "true" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
    className: "wb-field"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_repeater__WEBPACK_IMPORTED_MODULE_6__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    defaultCustom: true,
    context: "Field",
    queryTitle: __("Field Name", _constants__WEBPACK_IMPORTED_MODULE_5__["TEXT_DOMAIN"]),
    value: getValue("requestBody"),
    onChange: function onChange(value) {
      return handleChange(value, "requestBody");
    },
    queryOptions: [{
      label: "Select Field",
      value: ""
    }],
    optionTitle: __("Field Value", _constants__WEBPACK_IMPORTED_MODULE_5__["TEXT_DOMAIN"])
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
    className: "cwp-gf-wb-footer"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(Button, {
    isDefault: true,
    onClick: props.closeModal
  }, __("Cancel", _constants__WEBPACK_IMPORTED_MODULE_5__["TEXT_DOMAIN"])), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(SaveTrigger, null)));
}

/* harmony default export */ __webpack_exports__["default"] = (WebhookFields);

/***/ }),

/***/ "./src/webhook_picker/components/repeater.js":
/*!***************************************************!*\
  !*** ./src/webhook_picker/components/repeater.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    Button = _wp$components.Button,
    Popover = _wp$components.Popover;
var _wp$element = wp.element,
    useEffect = _wp$element.useEffect,
    useState = _wp$element.useState;
var __ = wp.i18n.__;
var _window$lodash = window.lodash,
    clone = _window$lodash.clone,
    set = _window$lodash.set,
    uniqueId = _window$lodash.uniqueId,
    isEqual = _window$lodash.isEqual,
    findIndex = _window$lodash.findIndex,
    find = _window$lodash.find,
    isEmpty = _window$lodash.isEmpty,
    get = _window$lodash.get,
    each = _window$lodash.each,
    has = _window$lodash.has;
var TagSelector = get(window.cwp_gf_select("cwp/components"), "TagSelector");

function Repeater(props) {
  var _useState = useState([]),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      fields = _useState2[0],
      setFields = _useState2[1];

  var queryOptions = props.queryOptions,
      queryTitle = props.queryTitle,
      optionTitle = props.optionTitle;
  var defaultCustom = has(props, "defaultCustom") ? props.defaultCustom : false;

  var addField = function addField() {
    var custom = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var newFields = clone(fields);
    var generatedID = Math.floor(Math.random() * 10000);
    var fieldToAdd = {
      queryValue: "",
      optionValue: "",
      id: generatedID,
      displayTagSelector: false,
      addCustom: custom
    };

    if (defaultCustom) {
      fieldToAdd.addCustom = true;
    }

    newFields.push(fieldToAdd);
    setFields(newFields);
  };

  var deleteField = function deleteField(id) {
    var newFields = clone(fields); // deleting field matching the given id

    newFields = newFields.filter(function (field) {
      return !isEqual(field.id, id);
    });
    setFields(newFields);
  };

  var handleChange = function handleChange(value, type, id) {
    var newFields = clone(fields); // finding the target field

    var targetField = find(newFields, {
      id: id
    }); // finding the index of the target field

    var targetIndex = findIndex(newFields, {
      id: id
    });

    if (type === "displayTagSelector") {
      each(newFields, function (field) {
        return set(field, "displayTagSelector", false);
      });
    }

    newFields.splice(targetIndex, 1, _objectSpread(_objectSpread({}, targetField), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, type, value)));
    setFields(newFields);
  };

  useEffect(function () {
    props.onChange(fields); // updating the value
  }, [fields]);
  useEffect(function () {
    var value = props.value;

    if (isEmpty(value)) {
      addField(); // adding placeholder first field
    } else {
      setFields(value);
    }
  }, []);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
    className: "cwp-gf-wb-repeater-field"
  }, !isEmpty(fields) && fields.map(function (field, idx) {
    var queryValue = field.queryValue,
        optionValue = field.optionValue,
        id = field.id,
        displayTagSelector = field.displayTagSelector,
        addCustom = field.addCustom;
    var includeLabel = idx === 0;
    var totalFields = fields.length;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
      className: "row"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
      className: "query_select"
    }, !addCustom && !defaultCustom && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(SelectControl, {
      value: queryValue,
      onChange: function onChange(newQueryValue) {
        handleChange(newQueryValue, "queryValue", id);
      },
      label: includeLabel ? __(queryTitle, _constants__WEBPACK_IMPORTED_MODULE_5__["TEXT_DOMAIN"]) : "",
      options: queryOptions
    }), addCustom && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(TextControl, {
      onChange: function onChange(newQueryValue) {
        return handleChange(newQueryValue, "queryValue", id);
      },
      placeholder: __("Custom ".concat(props.context, "..."), _constants__WEBPACK_IMPORTED_MODULE_5__["TEXT_DOMAIN"]),
      value: queryValue,
      label: includeLabel ? __(queryTitle, _constants__WEBPACK_IMPORTED_MODULE_5__["TEXT_DOMAIN"]) : ""
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
      className: "query_value"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
      className: "query_value_select"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(TextControl, {
      value: optionValue,
      onChange: function onChange(newOptionValue) {
        return handleChange(newOptionValue, "optionValue", id);
      },
      label: includeLabel ? __(optionTitle, _constants__WEBPACK_IMPORTED_MODULE_5__["TEXT_DOMAIN"]) : "",
      placeholder: __("Value..", _constants__WEBPACK_IMPORTED_MODULE_5__["TEXT_DOMAIN"])
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
      className: "query_value_options"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", null, displayTagSelector && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(Popover, {
      position: "bottom center",
      className: "cwp-tag-selector"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(TagSelector, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      clientId: props.clientId
    }, props, {
      insertTag: function insertTag(tag) {
        handleChange(optionValue.concat(" ", tag), "optionValue", id);
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(Button, {
      onClick: function onClick() {
        return handleChange(!displayTagSelector, "displayTagSelector", id);
      },
      showTooltip: true,
      label: __(displayTagSelector ? "Close Inserter" : "Insert Tag", _constants__WEBPACK_IMPORTED_MODULE_5__["TEXT_DOMAIN"]),
      icon: displayTagSelector ? "no-alt" : "list-view",
      isSmall: true
    })), totalFields > 1 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(Button, {
      onClick: function onClick() {
        return deleteField(id);
      },
      showTooltip: true,
      label: __("Delete ".concat(props.context), _constants__WEBPACK_IMPORTED_MODULE_5__["TEXT_DOMAIN"]),
      icon: "trash",
      isSmall: true
    }))));
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
    className: "foot"
  }, !defaultCustom && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(Button, {
    isSmall: true,
    isDefault: true,
    onClick: function onClick() {
      return addField(true);
    }
  }, __("Add Custom ".concat(props.context), _constants__WEBPACK_IMPORTED_MODULE_5__["TEXT_DOMAIN"])), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(Button, {
    isSmall: true,
    isPrimary: true,
    onClick: function onClick() {
      return addField(false);
    }
  }, __("Add ".concat(props.context), _constants__WEBPACK_IMPORTED_MODULE_5__["TEXT_DOMAIN"]))));
}

/* harmony default export */ __webpack_exports__["default"] = (Repeater);

/***/ }),

/***/ "./src/webhook_picker/index.js":
/*!*************************************!*\
  !*** ./src/webhook_picker/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_empty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/empty */ "./src/webhook_picker/components/empty.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants */ "./src/constants.js");
/* harmony import */ var _components_fields__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/fields */ "./src/webhook_picker/components/fields.js");
/* harmony import */ var _components_actionsList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/actionsList */ "./src/webhook_picker/components/actionsList.js");
/* harmony import */ var _supports__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./supports */ "./src/webhook_picker/supports.js");





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var _wp$element = wp.element,
    useEffect = _wp$element.useEffect,
    useState = _wp$element.useState;
var _wp$components = wp.components,
    Modal = _wp$components.Modal,
    Button = _wp$components.Button,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    Radio = _wp$components.__experimentalRadio,
    RadioGroup = _wp$components.__experimentalRadioGroup;
var _window$lodash = window.lodash,
    isEmpty = _window$lodash.isEmpty,
    map = _window$lodash.map,
    clone = _window$lodash.clone,
    set = _window$lodash.set,
    get = _window$lodash.get,
    uniqueId = _window$lodash.uniqueId,
    isEqual = _window$lodash.isEqual,
    has = _window$lodash.has,
    findIndex = _window$lodash.findIndex;
var __ = wp.i18n.__;

function WebhookPicker(props) {
  var _useState = useState(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      modal = _useState2[0],
      setModal = _useState2[1];

  var _useState3 = useState([]),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState3, 2),
      webhookActions = _useState4[0],
      setWebhookActions = _useState4[1];

  var _useState5 = useState([]),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState5, 2),
      selectedWebhook = _useState6[0],
      setSelectedWebhook = _useState6[1];

  var openModal = function openModal() {
    return setModal(true);
  };

  var closeModal = function closeModal() {
    setModal(false);
    setSelectedWebhook({}); // un selecting the selected webhook
  }; // this will update the webhook if there is selected in the selectedWebhook


  var addAction = function addAction(webhookAction) {
    var newActions = clone(webhookActions);
    var generatedId = Math.floor(Math.random() * 1000);

    if (has(webhookAction, "id") && !isEmpty(selectedWebhook)) {
      var selectedWebhookIndex = findIndex(webhookActions, {
        id: webhookAction.id
      });
      newActions.splice(selectedWebhookIndex, 1, webhookAction); // updating the selected webhook

      setWebhookActions(newActions);
      setSelectedWebhook({}); // un selecting the selected webhook
    } else {
      newActions.push(_objectSpread(_objectSpread({}, webhookAction), {}, {
        id: generatedId
      }));
      setWebhookActions(newActions);
    }

    props.setAttributes({
      extendedData: _objectSpread(_objectSpread({}, props.attributes.extendedData), {}, {
        webhooks: newActions
      })
    });
    closeModal();
  };

  var deleteAction = function deleteAction(id) {
    var newActions = clone(webhookActions);
    newActions = newActions.filter(function (action) {
      return !isEqual(action.id, id);
    });
    setWebhookActions(newActions);
    props.setAttributes({
      extendedData: _objectSpread(_objectSpread({}, props.attributes.extendedData), {}, {
        webhooks: newActions
      })
    });
  };

  var onSelect = function onSelect(action) {
    setSelectedWebhook(action);
    openModal();
  };

  useEffect(function () {
    var savedWebhooks = get(props.attributes, "extendedData.webhooks");

    if (!isEmpty(savedWebhooks)) {
      setWebhookActions(savedWebhooks);
    }
  }, []);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
    className: "cwp-webhook-picker"
  }, isEmpty(webhookActions) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_components_empty__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onAdd: openModal
  }), !isEmpty(webhookActions) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_components_actionsList__WEBPACK_IMPORTED_MODULE_8__["default"], {
    addNew: openModal,
    onDelete: deleteAction,
    onSelect: onSelect,
    actions: webhookActions
  }), modal && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(Modal, {
    className: "cwp-gf-wb-action-modal",
    title: __("Webhook Action", _constants__WEBPACK_IMPORTED_MODULE_6__["TEXT_DOMAIN"]),
    onRequestClose: closeModal,
    shouldCloseOnEsc: false,
    shouldCloseOnClickOutside: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_components_fields__WEBPACK_IMPORTED_MODULE_7__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    value: selectedWebhook,
    onAdd: addAction,
    closeModal: closeModal
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (WebhookPicker);

/***/ }),

/***/ "./src/webhook_picker/supports.js":
/*!****************************************!*\
  !*** ./src/webhook_picker/supports.js ***!
  \****************************************/
/*! exports provided: supportedRequestMethods, supportedFormats, supportedDefaultHeaders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportedRequestMethods", function() { return supportedRequestMethods; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportedFormats", function() { return supportedFormats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportedDefaultHeaders", function() { return supportedDefaultHeaders; });
var supportedRequestMethods = [{
  label: "GET",
  method: "get"
}, {
  label: "POST",
  value: "post"
}, {
  label: "PUT",
  value: "put"
}, {
  label: "PATCH",
  value: "patch"
}, {
  label: "DELETE",
  value: "delete"
}];
var supportedFormats = [{
  label: "JSON",
  value: "json"
}, {
  label: "FORM",
  value: "form"
}];
var supportedDefaultHeaders = [{
  label: "Accept",
  value: "accept"
}, {
  label: "Accept-Charset",
  value: "accept-charset"
}, {
  label: "Accept-Encoding",
  value: "accept-encoding"
}, {
  label: "Accept-Language",
  value: "accept-language"
}, {
  label: "Accept-Datetime",
  value: "accept-datetime"
}, {
  label: "Authorization",
  value: "authorization"
}, {
  label: "Cache-Control",
  value: "cache-control"
}, {
  label: "Connection",
  value: "connection"
}, {
  label: "Cookie",
  value: "cookie"
}, {
  label: "Content-Length",
  value: "content-length"
}, {
  label: "Date",
  value: "date"
}, {
  label: "Expect",
  value: "expect"
}, {
  label: "Forwarded",
  value: "forwarded"
}, {
  label: "Host",
  value: "host"
}, {
  label: "If-Match",
  value: "if-match"
}, {
  label: "If-Modified-Since",
  value: "if-modified-since"
}, {
  label: "If-None-Match",
  value: "if-none-match"
}, {
  label: "If-Range",
  value: "if-range"
}, {
  label: "If-Unmodified-Since",
  value: "if-unmodified-since"
}, {
  label: "Max-Forwards",
  value: "max-forwards"
}, {
  label: "Origin",
  value: "origin"
}, {
  label: "Pragma",
  value: "pragma"
}, {
  label: "Proxy-Authorization",
  value: "proxy-authorization"
}, {
  label: "Range",
  value: "range"
}, {
  label: "Referer",
  value: "referer"
}, {
  label: "TE",
  value: "te"
}, {
  label: "User-Agent",
  value: "user-agent"
}, {
  label: "Via",
  value: "via"
}, {
  label: "Warning",
  value: "warning"
}];

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "react":
/*!*********************************!*\
  !*** external {"this":"React"} ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map