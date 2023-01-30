"use strict";
(self["webpackChunkwebpack_starter"] = self["webpackChunkwebpack_starter"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background-color: #DDDDDD;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.game-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  margin-top: 20vh;\n  margin-bottom: 25vh;\n}\n\n.title {\n  font-size: 2em;\n  margin: 25px;\n}\n\n.boards-container {\n  display: flex;\n  justify-content: center;\n  gap: 10%;\n  width: 100%;\n}\n\n.board {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  height: 300px;\n  width: 300px;\n  border: 1px solid black;\n}\n\n.cell {\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  border: 1px solid black;\n}\n\n.ship-cell {\n  background-color: #97fe7c;\n}\n", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA;EACE,yBAAyB;EACzB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,WAAW;EACX,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,YAAY;AACd;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,QAAQ;EACR,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,aAAa;EACb,YAAY;EACZ,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;EAChB,WAAW;EACX,YAAY;EACZ,uBAAuB;AACzB;;AAEA;EACE,yBAAyB;AAC3B","sourcesContent":["body {\n  background-color: #DDDDDD;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.game-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  margin-top: 20vh;\n  margin-bottom: 25vh;\n}\n\n.title {\n  font-size: 2em;\n  margin: 25px;\n}\n\n.boards-container {\n  display: flex;\n  justify-content: center;\n  gap: 10%;\n  width: 100%;\n}\n\n.board {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  height: 300px;\n  width: 300px;\n  border: 1px solid black;\n}\n\n.cell {\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  border: 1px solid black;\n}\n\n.ship-cell {\n  background-color: #97fe7c;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/domstuff/display.js":
/*!************************************!*\
  !*** ./src/js/domstuff/display.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _game_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game/player */ "./src/js/game/player.js");
/* harmony import */ var _game_ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game/ship */ "./src/js/game/ship.js");
/* harmony import */ var _game_coords__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game/coords */ "./src/js/game/coords.js");




class Display {
  constructor() {
    this.player = new _game_player__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.cpuPlayer = new _game_player__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.orientation = 'horizontal';
    this.currentShipLength = 5;
    this.planningPhase = true;
    this.cheater = false;
    this.gameComplete = false;
  }

  loadBoards() {
    let playerBoard = document.querySelector('.player-board');
    let cpuBoard = document.querySelector('.cpu-board');
    this.generateCells(playerBoard, true);
    this.generateCells(cpuBoard, false);
    this.cpuPlayer.computerPlaceShips();
  }

  generateCells(board, playerBoardBool) {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        let cell = document.createElement('div');
        cell.className = `${i}${j} cell`;
        if (this.player.board.board[i][j] == 1)
          cell.classList.add('ship-cell');
        if (playerBoardBool && this.planningPhase) {
          this.hoverShip(cell);
          this.clickShip(cell);
        }
        board.appendChild(cell);
      }
    }
  }

  hoverShip(cell) {
    if (this.orientation == 'horizontal') {
      cell.addEventListener('mouseover', (e) => {
        if (this.planningPhase) {
          let column = e.target.classList[0][1];
          let row = e.target.classList[0][0];
          if (!this.player.checkCollide(this.currentShipLength, (0,_game_coords__WEBPACK_IMPORTED_MODULE_2__["default"])(parseInt(row), parseInt(column)), this.orientation)) {
            for (let i = column; i > parseInt(column) - parseInt(this.currentShipLength); i--) {
              try {
                let cellsToBeHighlighted = document.getElementsByClassName(`${row}${i}`)[0];
                if (!cellsToBeHighlighted.classList.contains('ship-cell')) {
                  cellsToBeHighlighted.setAttribute('style', 'background-color: #3580c2');
                }
              } catch (TypeError) { };
            }
          }
        }
      }, false);
      cell.addEventListener('mouseout', (e) => {
        if (this.planningPhase) {
          let column = e.target.classList[0][1];
          let row = e.target.classList[0][0];
          for (let i = column; i > parseInt(column) - parseInt(this.currentShipLength); i--) {
            let cellsToBeErased;
            try {
              cellsToBeErased = document.getElementsByClassName(`${row}${i}`)[0];
              cellsToBeErased.setAttribute('style', '');
            } catch (TypeError) { };
          }
        }
      }, false);
    }

    if (this.orientation == 'vertical') {
      cell.addEventListener('mouseover', (e) => {
        if (this.planningPhase) {
          let column = e.target.classList[0][1];
          let row = e.target.classList[0][0];

          if (!this.player.checkCollide(this.currentShipLength, (0,_game_coords__WEBPACK_IMPORTED_MODULE_2__["default"])(parseInt(row), parseInt(column)), this.orientation)) {
            for (let i = row; i < parseInt(row) + parseInt(this.currentShipLength); i++) {
              try {
                let cellsToBeHighlighted = document.getElementsByClassName(`${i}${column}`)[0];
                cellsToBeHighlighted.setAttribute('style', 'background-color: #3580c2');
              } catch (TypeError) { };
            }
          }
        }
      }, false);
      cell.addEventListener('mouseout', (e) => {
        if (this.planningPhase) {
          let column = e.target.classList[0][1];
          let row = e.target.classList[0][0];
          for (let i = row; i < parseInt(row) + parseInt(this.currentShipLength); i++) {
            let cellsToBeErased;
            try {
              cellsToBeErased = document.getElementsByClassName(`${i}${column}`)[0];
              cellsToBeErased.setAttribute('style', '');
            } catch (TypeError) { };
          }
        }
      }, false);
    }
  }

  clickShip(cell) {
    if (this.orientation == 'horizontal') {
      cell.addEventListener('click', (e) => {
        if (this.planningPhase) {
          let column = e.target.classList[0][1];
          let row = e.target.classList[0][0];

          let colliding = this.player.checkCollide(this.currentShipLength, (0,_game_coords__WEBPACK_IMPORTED_MODULE_2__["default"])(parseInt(row), parseInt(column)), this.orientation);

          if (!(column < this.currentShipLength - 1) &&
            !(this.player.board.board[row][column] > 0) && !colliding) {
            this.playerPlaceShip(row, column);

            for (let i = column; i > parseInt(column) - parseInt(this.currentShipLength) - 1; i--) {
              let cellsToBeHighlighted;
              try {
                cellsToBeHighlighted = document.getElementsByClassName(`${row}${i}`)[0];
                cellsToBeHighlighted.setAttribute('style', 'background-color: #97fe7c');
                cellsToBeHighlighted.classList.add('ship-cell');
              } catch (TypeError) { };
            }
          }
        }
      }, false);
    }
    if (this.orientation == 'vertical') {
      cell.addEventListener('click', (e) => {
        if (this.planningPhase) {
          let column = e.target.classList[0][1];
          let row = e.target.classList[0][0];

          let colliding = this.player.checkCollide(this.length, (0,_game_coords__WEBPACK_IMPORTED_MODULE_2__["default"])(parseInt(row), parseInt(column)), this.orientation);
          if (!(this.orientation == 'vertical' && (9 - row) < this.currentShiplength) ||
            !(this.player.board.board[row][column] > 0) || !colliding) {
            this.playerPlaceShip(row, column);

            for (let i = row; i < parseInt(row) + parseInt(this.currentShipLength) + 1; i++) {
              let cellsToBeHighlighted;
              try {
                cellsToBeHighlighted = document.getElementsByClassName(`${i}${column}`)[0];
                cellsToBeHighlighted.setAttribute('style', 'background-color: #97fe7c');
                cellsToBeHighlighted.classList.add('ship-cell');
              } catch (TypeError) { };
            }
          }
        }
      }, false);
    }
  }

  destroyCells(board) {
    while (board.firstChild) {
      board.removeChild(board.firstChild);
    }
  }

  rotate() {
    let playerBoard = document.querySelector('.player-board');
    let rotateButton = document.querySelector('.rotate');
    rotateButton.addEventListener('click', () => {
      this.destroyCells(playerBoard);
      this.orientation == 'horizontal' ? this.orientation = 'vertical' : this.orientation = 'horizontal';
      this.generateCells(playerBoard, true);
    });
  }

  cpuDisplayShips() {
    let cpuBoard = document.querySelector('.cpu-board');
    let cell = cpuBoard.getElementsByClassName('cell');
    cell.innerHTML = '0';
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        let currentCell = cpuBoard.getElementsByClassName(`${i}${j}`)[0];
        if (this.cpuPlayer.board.board[i][j] == 1) {
          currentCell.setAttribute('style', 'background-color: black');
        }
      }
    }
  }

  attackHover() {
    let cpuBoard = document.querySelector('.cpu-board');
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        let currentCell = cpuBoard.getElementsByClassName(`${i}${j}`)[0];
        currentCell.addEventListener('mouseover', () => {
          if (this.cpuPlayer.board.board[i][j] < 2 && !this.gameComplete) {
            currentCell.setAttribute('style', 'background-color: gray; overflow: hidden;');
          }
        })
        currentCell.addEventListener('mouseout', () => {
          if (this.cpuPlayer.board.board[i][j] < 2 && !this.gameComplete && !this.cheater) {
            currentCell.setAttribute('style', '');
          }
          if (this.cpuPlayer.board.board[i][j] == 1 && !this.gameComplete && this.cheater) {
            currentCell.setAttribute('style', 'background-color: black; overflow:hidden;')
          }
          if (this.cpuPlayer.board.board[i][j] == 0 && !this.gameComplete && this.cheater) {
            currentCell.setAttribute('style', '');
          }

        })

      }
    }
  }

  playerPlaceShip(row, column) {
    let coords = (0,_game_coords__WEBPACK_IMPORTED_MODULE_2__["default"])(parseInt(row), parseInt(column));
    let thisShip = new _game_ship__WEBPACK_IMPORTED_MODULE_1__["default"](this.currentShipLength, coords, this.orientation);
    this.player.board.placeShip(thisShip);

    this.currentShipLength--;
    if (this.currentShipLength < 2) {
      this.planningPhase = false;
      let container = document.querySelector('.player-board-container');
      container.removeChild(container.querySelector('.rotate'));
      container.setAttribute('style', 'margin-top: 25px');
      this.attackPhase();
    }
  }

  attackPhase() {
    this.attackHover();
    let cpuBoard = document.querySelector('.cpu-board');
    let gameOver = (!this.player.board.allShipsSunk() &&
      !this.cpuPlayer.board.allShipsSunk());
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        let currentCell = cpuBoard.getElementsByClassName(`${i}${j}`)[0];
        currentCell.addEventListener('click', (e) => {
          let gameOver = (this.player.board.allShipsSunk() ||
            this.cpuPlayer.board.allShipsSunk());
          if (!gameOver) {
            let board = this.cpuPlayer.board.board;
            if (!(board[i][j] == 2 || board[i][j] == 3)) {
              if (board[i][j] == 1) {
                e.target.setAttribute('style', 'background-color: #fb6a6a');
                this.cpuPlayer.board.receiveAttack((0,_game_coords__WEBPACK_IMPORTED_MODULE_2__["default"])(i, j));
              }
              if (board[i][j] == 0) {
                e.target.setAttribute('style', 'background-color: #a8a8a8');
                this.cpuPlayer.board.receiveAttack((0,_game_coords__WEBPACK_IMPORTED_MODULE_2__["default"])(i, j));
              }
              this.player.computerAttack();
              this.refreshCells();
              if (this.player.board.allShipsSunk() ||
                this.cpuPlayer.board.allShipsSunk()) {
                this.gameComplete = true;
                this.gameOver();
              }
            }
          }
        });
      }
    }
  }

  refreshCells() {
    let playerBoard = document.querySelector('.player-board');
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        let currentCell = playerBoard.getElementsByClassName(`${i}${j}`)[0];
        let board = this.player.board.board;
        if (board[i][j] == 3) {
          currentCell.setAttribute('style', 'background-color: #a8a8a8');
        }
        if (board[i][j] == 2) {
          currentCell.setAttribute('style', 'background-color: #fb6a6a');
        }
        if (board[i][j] == 1) {
          currentCell.setAttribute('style', 'background-color: #97fe7c');
        }
      }
    }
  }

  gameOver() {
    let announceWinner = document.querySelector('.announce-winner');
    this.cpuPlayer.board.allShipsSunk() ? announceWinner.innerHTML = 'You win!' : announceWinner.innerHTML = 'You lose!'
    if (!this.cheater && this.cpuPlayer.board.allShipsSunk()) {
      let realWinnerMessage = document.createElement('div');
      realWinnerMessage.innerHTML = 'Without cheating!';
      let container = document.querySelector('.game-container');
      container.appendChild(realWinnerMessage);
    }
    if (this.cheater) {
      let cheaterMessage = document.createElement('div');
      cheaterMessage.innerHTML = 'but u cheated';
      let container = document.querySelector('.game-container');
      container.appendChild(cheaterMessage);
    }
    announceWinner.style.visibility = 'visible';
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Display);


/***/ }),

/***/ "./src/js/game/board.js":
/*!******************************!*\
  !*** ./src/js/game/board.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Board {
  constructor() {
    const arr = new Array(10);
    for (let i = 0; i < 10; i++) {
      arr[i] = new Array(10).fill(0);
    }
    this.board = arr;
    this.allSunk = false;
    this.ships = [];
  }

  // 1 = ship, 2 = hitship, 3 = miss
  placeShip(ship) {
    let row = ship.headCoords.row;
    let column = ship.headCoords.column;
    if (ship.orientation === 'horizontal') {
      for (let i = column - ship.length + 1; i < column + 1; i++) {
        this.board[row][i] = 1;
      }
    }
    if (ship.orientation === 'vertical') {
      for (let i = row; i < row + ship.length; i++) {
        this.board[i][column] = 1;
      }
    }
    this.ships.push(ship);
  }

  receiveAttack(coords) {
    let column = coords.column;
    let row = coords.row;
    let hit = false;
    for (const ship of this.ships) {
      if (ship.hit(coords)) {
        this.board[row][column] = 2;
        hit = true;
      }
    }
    if (!hit) {
      this.board[row][column] = 3;
    }
  }

  allShipsSunk() {
    let numberSunk = 0;
    for (const ship of this.ships) {
      if (ship.isSunk()) {
        numberSunk++;
      }
    }
    if (this.ships.length > 0 && numberSunk == this.ships.length) {
      return true;
    }
    return false;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Board);


/***/ }),

/***/ "./src/js/game/coords.js":
/*!*******************************!*\
  !*** ./src/js/game/coords.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Coords = (row, column) => {
  return { row, column };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Coords);


/***/ }),

/***/ "./src/js/game/player.js":
/*!*******************************!*\
  !*** ./src/js/game/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _board_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board.js */ "./src/js/game/board.js");
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship.js */ "./src/js/game/ship.js");
/* harmony import */ var _coords_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coords.js */ "./src/js/game/coords.js");




class Player {
  constructor() {
    this.board = new _board_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }

  computerPlaceShips() {
    for (let i = 2; i < 6; i++) {
      this.computerPlaceShip(i);
    }
    return true;
  }

  computerPlaceShip(length) {
    let positionArr = this.generateRandomCoord();
    let position = (0,_coords_js__WEBPACK_IMPORTED_MODULE_2__["default"])(positionArr[0], positionArr[1]);
    let orientation = this.randomOrientation();
    let colliding = this.checkCollide(length, position, orientation);

    // Generate new position if headCoords are invalid
    // (Occupied or overlapping length of ship)
    while ((orientation == 'vertical' && (9 - position.row) < length) ||
      (orientation == 'horizontal' && position.column < length) ||
      (this.board.board[position.row][position.column] > 0) ||
      colliding) {
      positionArr = this.generateRandomCoord();
      position = (0,_coords_js__WEBPACK_IMPORTED_MODULE_2__["default"])(positionArr[0], positionArr[1]);
      colliding = this.checkCollide(length, position, orientation);
    };

    let ship = new _ship_js__WEBPACK_IMPORTED_MODULE_1__["default"](length, position, orientation);
    this.board.placeShip(ship);
  }

  checkCollide(length, position, orientation) {
    let board = this.board.board;
    if (orientation == 'horizontal') {
      if (position.column < length - 1) return true;
      for (let i = position.column; i > parseInt(position.column) - parseInt(length); i--) {
        if (board[position.row][i] > 0) return true;
      }
    }
    if (orientation == 'vertical') {
      if ((9 - position.row) < length - 1) {
        return true;
      }
      for (let i = position.row; i < parseInt(position.row) + parseInt(length); i++) {
        if (board[i][position.column] > 0) {
          return true;
        }
      }
    }
    return false;
  }

  checkOnEdge(orientation, position, length) {
    let row = position.row;
    let column = position.column;
    if (orientation == 'horizontal') {
      try {
        if (this.board.board[row][column + 1] == undefined ||
          this.board.board[row][column - length - 1] == undefined ||
          this.board.board[row + 1][column] == undefined ||
          this.board.board[row - 1][column] == undefined)
          return true;
      } catch (TypeError) { return true; }
    }
    if (orientation == 'vertical') {
      try {
        if (this.board.board[row - 1][column] == undefined ||
          this.board.board[row + length + 1][column] == undefined ||
          this.board.board[row][column + 1] == undefined ||
          this.board.board[row][column - 1] == undefined)
          return true;
      } catch (TypeError) { return true; }
    }
    return false;
  }

  computerAttack() {
    let attackCoord = this.generateRandomCoord();
    let attackedCoord = this.board.board[attackCoord[0]][attackCoord[1]];
    if (attackedCoord < 2) {
      this.board.receiveAttack((0,_coords_js__WEBPACK_IMPORTED_MODULE_2__["default"])(attackCoord[0], attackCoord[1]));
      return;
    }
    this.computerAttack();
  }

  generateRandomCoord() {
    let randomX = Math.floor(Math.random() * 10);
    let randomY = Math.floor(Math.random() * 10);
    return [randomX, randomY];
  }

  randomOrientation() {
    let orientation = Math.floor(Math.random() * 2);
    if (orientation == 1) {
      return 'horizontal';
    }
    return 'vertical';
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);


/***/ }),

/***/ "./src/js/game/ship.js":
/*!*****************************!*\
  !*** ./src/js/game/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Ship {
  constructor(length, headCoords, orientation) {
    this.length = length;
    this.headCoords = headCoords;
    this.orientation = orientation;
    this.hits = new Array(length).fill(0);
  }

  hit(coords) {
    if (this.orientation === 'horizontal') {
      if (coords.row == this.headCoords.row) {
        if (coords.column <= this.headCoords.column &&
          coords.column >= (this.headCoords.column + 1 - this.length)) {
          this.addToHits(coords);
          return true;
        }
      }
    }
    if (this.orientation === 'vertical') {
      if (coords.column == this.headCoords.column) {
        if (coords.row >= this.headCoords.row &&
          coords.row <= (this.length + this.headCoords.row - 1)) {
          this.addToHits(coords);
          return true;
        }
      }
    }
    return false;
  }

  addToHits(coords) {
    if (this.orientation === 'horizontal')
      this.hits[this.length - (this.headCoords.column - coords.column) - 1] = 1;
    if (this.orientation === 'vertical')
      this.hits[coords.row - this.headCoords.row] = 1;
  }

  isSunk() {
    for (let i = 0; i < this.length; i++) {
      if (this.hits[i] == 0)
        return false;
    }
    return true;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);


/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");
/* harmony import */ var _domstuff_display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domstuff/display.js */ "./src/js/domstuff/display.js");



let display = new _domstuff_display_js__WEBPACK_IMPORTED_MODULE_1__["default"];
display.loadBoards();
document.querySelector('.cheat').addEventListener('click', () => {
  display.cpuDisplayShips();
  display.cheater = true;
});

display.rotate();


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isc0RBQU07QUFDckM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLE1BQU0sRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDM0d0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSSxFQUFDOzs7Ozs7Ozs7Ozs7OztBQzlDTTtBQUNrQjs7QUFFNUMsa0JBQWtCLDREQUFPO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stc3RhcnRlci8uL3NyYy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLy4vc3JjL2Nzcy9zdHlsZS5jc3M/OWZjZCIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci8uL3NyYy9qcy9kb21zdHVmZi9kaXNwbGF5LmpzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci8uL3NyYy9qcy9nYW1lL2JvYXJkLmpzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci8uL3NyYy9qcy9nYW1lL2Nvb3Jkcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvLi9zcmMvanMvZ2FtZS9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLy4vc3JjL2pzL2dhbWUvc2hpcC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNEREREREQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZ2FtZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tdG9wOiAyMHZoO1xcbiAgbWFyZ2luLWJvdHRvbTogMjV2aDtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgbWFyZ2luOiAyNXB4O1xcbn1cXG5cXG4uYm9hcmRzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5jZWxsIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uc2hpcC1jZWxsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5N2ZlN2M7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixRQUFRO0VBQ1IsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxtQ0FBbUM7RUFDbkMsYUFBYTtFQUNiLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREREREO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmdhbWUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLXRvcDogMjB2aDtcXG4gIG1hcmdpbi1ib3R0b206IDI1dmg7XFxufVxcblxcbi50aXRsZSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbjogMjVweDtcXG59XFxuXFxuLmJvYXJkcy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uY2VsbCB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnNoaXAtY2VsbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTdmZTdjO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi4vZ2FtZS9wbGF5ZXInO1xuaW1wb3J0IFNoaXAgZnJvbSAnLi4vZ2FtZS9zaGlwJztcbmltcG9ydCBDb29yZHMgZnJvbSAnLi4vZ2FtZS9jb29yZHMnO1xuXG5jbGFzcyBEaXNwbGF5IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKCk7XG4gICAgdGhpcy5jcHVQbGF5ZXIgPSBuZXcgUGxheWVyKCk7XG4gICAgdGhpcy5vcmllbnRhdGlvbiA9ICdob3Jpem9udGFsJztcbiAgICB0aGlzLmN1cnJlbnRTaGlwTGVuZ3RoID0gNTtcbiAgICB0aGlzLnBsYW5uaW5nUGhhc2UgPSB0cnVlO1xuICAgIHRoaXMuY2hlYXRlciA9IGZhbHNlO1xuICAgIHRoaXMuZ2FtZUNvbXBsZXRlID0gZmFsc2U7XG4gIH1cblxuICBsb2FkQm9hcmRzKCkge1xuICAgIGxldCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItYm9hcmQnKTtcbiAgICBsZXQgY3B1Qm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3B1LWJvYXJkJyk7XG4gICAgdGhpcy5nZW5lcmF0ZUNlbGxzKHBsYXllckJvYXJkLCB0cnVlKTtcbiAgICB0aGlzLmdlbmVyYXRlQ2VsbHMoY3B1Qm9hcmQsIGZhbHNlKTtcbiAgICB0aGlzLmNwdVBsYXllci5jb21wdXRlclBsYWNlU2hpcHMoKTtcbiAgfVxuXG4gIGdlbmVyYXRlQ2VsbHMoYm9hcmQsIHBsYXllckJvYXJkQm9vbCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNlbGwuY2xhc3NOYW1lID0gYCR7aX0ke2p9IGNlbGxgO1xuICAgICAgICBpZiAodGhpcy5wbGF5ZXIuYm9hcmQuYm9hcmRbaV1bal0gPT0gMSlcbiAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXAtY2VsbCcpO1xuICAgICAgICBpZiAocGxheWVyQm9hcmRCb29sICYmIHRoaXMucGxhbm5pbmdQaGFzZSkge1xuICAgICAgICAgIHRoaXMuaG92ZXJTaGlwKGNlbGwpO1xuICAgICAgICAgIHRoaXMuY2xpY2tTaGlwKGNlbGwpO1xuICAgICAgICB9XG4gICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKGNlbGwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGhvdmVyU2hpcChjZWxsKSB7XG4gICAgaWYgKHRoaXMub3JpZW50YXRpb24gPT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIChlKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnBsYW5uaW5nUGhhc2UpIHtcbiAgICAgICAgICBsZXQgY29sdW1uID0gZS50YXJnZXQuY2xhc3NMaXN0WzBdWzFdO1xuICAgICAgICAgIGxldCByb3cgPSBlLnRhcmdldC5jbGFzc0xpc3RbMF1bMF07XG4gICAgICAgICAgaWYgKCF0aGlzLnBsYXllci5jaGVja0NvbGxpZGUodGhpcy5jdXJyZW50U2hpcExlbmd0aCwgQ29vcmRzKHBhcnNlSW50KHJvdyksIHBhcnNlSW50KGNvbHVtbikpLCB0aGlzLm9yaWVudGF0aW9uKSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGNvbHVtbjsgaSA+IHBhcnNlSW50KGNvbHVtbikgLSBwYXJzZUludCh0aGlzLmN1cnJlbnRTaGlwTGVuZ3RoKTsgaS0tKSB7XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IGNlbGxzVG9CZUhpZ2hsaWdodGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHtyb3d9JHtpfWApWzBdO1xuICAgICAgICAgICAgICAgIGlmICghY2VsbHNUb0JlSGlnaGxpZ2h0ZWQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLWNlbGwnKSkge1xuICAgICAgICAgICAgICAgICAgY2VsbHNUb0JlSGlnaGxpZ2h0ZWQuc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kLWNvbG9yOiAjMzU4MGMyJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGNhdGNoIChUeXBlRXJyb3IpIHsgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIGZhbHNlKTtcbiAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoZSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5wbGFubmluZ1BoYXNlKSB7XG4gICAgICAgICAgbGV0IGNvbHVtbiA9IGUudGFyZ2V0LmNsYXNzTGlzdFswXVsxXTtcbiAgICAgICAgICBsZXQgcm93ID0gZS50YXJnZXQuY2xhc3NMaXN0WzBdWzBdO1xuICAgICAgICAgIGZvciAobGV0IGkgPSBjb2x1bW47IGkgPiBwYXJzZUludChjb2x1bW4pIC0gcGFyc2VJbnQodGhpcy5jdXJyZW50U2hpcExlbmd0aCk7IGktLSkge1xuICAgICAgICAgICAgbGV0IGNlbGxzVG9CZUVyYXNlZDtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGNlbGxzVG9CZUVyYXNlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7cm93fSR7aX1gKVswXTtcbiAgICAgICAgICAgICAgY2VsbHNUb0JlRXJhc2VkLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnJyk7XG4gICAgICAgICAgICB9IGNhdGNoIChUeXBlRXJyb3IpIHsgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIGZhbHNlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcmllbnRhdGlvbiA9PSAndmVydGljYWwnKSB7XG4gICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIChlKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnBsYW5uaW5nUGhhc2UpIHtcbiAgICAgICAgICBsZXQgY29sdW1uID0gZS50YXJnZXQuY2xhc3NMaXN0WzBdWzFdO1xuICAgICAgICAgIGxldCByb3cgPSBlLnRhcmdldC5jbGFzc0xpc3RbMF1bMF07XG5cbiAgICAgICAgICBpZiAoIXRoaXMucGxheWVyLmNoZWNrQ29sbGlkZSh0aGlzLmN1cnJlbnRTaGlwTGVuZ3RoLCBDb29yZHMocGFyc2VJbnQocm93KSwgcGFyc2VJbnQoY29sdW1uKSksIHRoaXMub3JpZW50YXRpb24pKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gcm93OyBpIDwgcGFyc2VJbnQocm93KSArIHBhcnNlSW50KHRoaXMuY3VycmVudFNoaXBMZW5ndGgpOyBpKyspIHtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgY2VsbHNUb0JlSGlnaGxpZ2h0ZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke2l9JHtjb2x1bW59YClbMF07XG4gICAgICAgICAgICAgICAgY2VsbHNUb0JlSGlnaGxpZ2h0ZWQuc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kLWNvbG9yOiAjMzU4MGMyJyk7XG4gICAgICAgICAgICAgIH0gY2F0Y2ggKFR5cGVFcnJvcikgeyB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgZmFsc2UpO1xuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIChlKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnBsYW5uaW5nUGhhc2UpIHtcbiAgICAgICAgICBsZXQgY29sdW1uID0gZS50YXJnZXQuY2xhc3NMaXN0WzBdWzFdO1xuICAgICAgICAgIGxldCByb3cgPSBlLnRhcmdldC5jbGFzc0xpc3RbMF1bMF07XG4gICAgICAgICAgZm9yIChsZXQgaSA9IHJvdzsgaSA8IHBhcnNlSW50KHJvdykgKyBwYXJzZUludCh0aGlzLmN1cnJlbnRTaGlwTGVuZ3RoKTsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY2VsbHNUb0JlRXJhc2VkO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgY2VsbHNUb0JlRXJhc2VkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHtpfSR7Y29sdW1ufWApWzBdO1xuICAgICAgICAgICAgICBjZWxsc1RvQmVFcmFzZWQuc2V0QXR0cmlidXRlKCdzdHlsZScsICcnKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKFR5cGVFcnJvcikgeyB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIGNsaWNrU2hpcChjZWxsKSB7XG4gICAgaWYgKHRoaXMub3JpZW50YXRpb24gPT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYgKHRoaXMucGxhbm5pbmdQaGFzZSkge1xuICAgICAgICAgIGxldCBjb2x1bW4gPSBlLnRhcmdldC5jbGFzc0xpc3RbMF1bMV07XG4gICAgICAgICAgbGV0IHJvdyA9IGUudGFyZ2V0LmNsYXNzTGlzdFswXVswXTtcblxuICAgICAgICAgIGxldCBjb2xsaWRpbmcgPSB0aGlzLnBsYXllci5jaGVja0NvbGxpZGUodGhpcy5jdXJyZW50U2hpcExlbmd0aCwgQ29vcmRzKHBhcnNlSW50KHJvdyksIHBhcnNlSW50KGNvbHVtbikpLCB0aGlzLm9yaWVudGF0aW9uKTtcblxuICAgICAgICAgIGlmICghKGNvbHVtbiA8IHRoaXMuY3VycmVudFNoaXBMZW5ndGggLSAxKSAmJlxuICAgICAgICAgICAgISh0aGlzLnBsYXllci5ib2FyZC5ib2FyZFtyb3ddW2NvbHVtbl0gPiAwKSAmJiAhY29sbGlkaW5nKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllclBsYWNlU2hpcChyb3csIGNvbHVtbik7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBjb2x1bW47IGkgPiBwYXJzZUludChjb2x1bW4pIC0gcGFyc2VJbnQodGhpcy5jdXJyZW50U2hpcExlbmd0aCkgLSAxOyBpLS0pIHtcbiAgICAgICAgICAgICAgbGV0IGNlbGxzVG9CZUhpZ2hsaWdodGVkO1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNlbGxzVG9CZUhpZ2hsaWdodGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHtyb3d9JHtpfWApWzBdO1xuICAgICAgICAgICAgICAgIGNlbGxzVG9CZUhpZ2hsaWdodGVkLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZC1jb2xvcjogIzk3ZmU3YycpO1xuICAgICAgICAgICAgICAgIGNlbGxzVG9CZUhpZ2hsaWdodGVkLmNsYXNzTGlzdC5hZGQoJ3NoaXAtY2VsbCcpO1xuICAgICAgICAgICAgICB9IGNhdGNoIChUeXBlRXJyb3IpIHsgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIGZhbHNlKTtcbiAgICB9XG4gICAgaWYgKHRoaXMub3JpZW50YXRpb24gPT0gJ3ZlcnRpY2FsJykge1xuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnBsYW5uaW5nUGhhc2UpIHtcbiAgICAgICAgICBsZXQgY29sdW1uID0gZS50YXJnZXQuY2xhc3NMaXN0WzBdWzFdO1xuICAgICAgICAgIGxldCByb3cgPSBlLnRhcmdldC5jbGFzc0xpc3RbMF1bMF07XG5cbiAgICAgICAgICBsZXQgY29sbGlkaW5nID0gdGhpcy5wbGF5ZXIuY2hlY2tDb2xsaWRlKHRoaXMubGVuZ3RoLCBDb29yZHMocGFyc2VJbnQocm93KSwgcGFyc2VJbnQoY29sdW1uKSksIHRoaXMub3JpZW50YXRpb24pO1xuICAgICAgICAgIGlmICghKHRoaXMub3JpZW50YXRpb24gPT0gJ3ZlcnRpY2FsJyAmJiAoOSAtIHJvdykgPCB0aGlzLmN1cnJlbnRTaGlwbGVuZ3RoKSB8fFxuICAgICAgICAgICAgISh0aGlzLnBsYXllci5ib2FyZC5ib2FyZFtyb3ddW2NvbHVtbl0gPiAwKSB8fCAhY29sbGlkaW5nKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllclBsYWNlU2hpcChyb3csIGNvbHVtbik7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSByb3c7IGkgPCBwYXJzZUludChyb3cpICsgcGFyc2VJbnQodGhpcy5jdXJyZW50U2hpcExlbmd0aCkgKyAxOyBpKyspIHtcbiAgICAgICAgICAgICAgbGV0IGNlbGxzVG9CZUhpZ2hsaWdodGVkO1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNlbGxzVG9CZUhpZ2hsaWdodGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHtpfSR7Y29sdW1ufWApWzBdO1xuICAgICAgICAgICAgICAgIGNlbGxzVG9CZUhpZ2hsaWdodGVkLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZC1jb2xvcjogIzk3ZmU3YycpO1xuICAgICAgICAgICAgICAgIGNlbGxzVG9CZUhpZ2hsaWdodGVkLmNsYXNzTGlzdC5hZGQoJ3NoaXAtY2VsbCcpO1xuICAgICAgICAgICAgICB9IGNhdGNoIChUeXBlRXJyb3IpIHsgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBkZXN0cm95Q2VsbHMoYm9hcmQpIHtcbiAgICB3aGlsZSAoYm9hcmQuZmlyc3RDaGlsZCkge1xuICAgICAgYm9hcmQucmVtb3ZlQ2hpbGQoYm9hcmQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICB9XG5cbiAgcm90YXRlKCkge1xuICAgIGxldCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItYm9hcmQnKTtcbiAgICBsZXQgcm90YXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJvdGF0ZScpO1xuICAgIHJvdGF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuZGVzdHJveUNlbGxzKHBsYXllckJvYXJkKTtcbiAgICAgIHRoaXMub3JpZW50YXRpb24gPT0gJ2hvcml6b250YWwnID8gdGhpcy5vcmllbnRhdGlvbiA9ICd2ZXJ0aWNhbCcgOiB0aGlzLm9yaWVudGF0aW9uID0gJ2hvcml6b250YWwnO1xuICAgICAgdGhpcy5nZW5lcmF0ZUNlbGxzKHBsYXllckJvYXJkLCB0cnVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNwdURpc3BsYXlTaGlwcygpIHtcbiAgICBsZXQgY3B1Qm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3B1LWJvYXJkJyk7XG4gICAgbGV0IGNlbGwgPSBjcHVCb2FyZC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjZWxsJyk7XG4gICAgY2VsbC5pbm5lckhUTUwgPSAnMCc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgbGV0IGN1cnJlbnRDZWxsID0gY3B1Qm9hcmQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHtpfSR7an1gKVswXTtcbiAgICAgICAgaWYgKHRoaXMuY3B1UGxheWVyLmJvYXJkLmJvYXJkW2ldW2pdID09IDEpIHtcbiAgICAgICAgICBjdXJyZW50Q2VsbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQtY29sb3I6IGJsYWNrJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhdHRhY2tIb3ZlcigpIHtcbiAgICBsZXQgY3B1Qm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3B1LWJvYXJkJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgbGV0IGN1cnJlbnRDZWxsID0gY3B1Qm9hcmQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHtpfSR7an1gKVswXTtcbiAgICAgICAgY3VycmVudENlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLmNwdVBsYXllci5ib2FyZC5ib2FyZFtpXVtqXSA8IDIgJiYgIXRoaXMuZ2FtZUNvbXBsZXRlKSB7XG4gICAgICAgICAgICBjdXJyZW50Q2VsbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQtY29sb3I6IGdyYXk7IG92ZXJmbG93OiBoaWRkZW47Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBjdXJyZW50Q2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5jcHVQbGF5ZXIuYm9hcmQuYm9hcmRbaV1bal0gPCAyICYmICF0aGlzLmdhbWVDb21wbGV0ZSAmJiAhdGhpcy5jaGVhdGVyKSB7XG4gICAgICAgICAgICBjdXJyZW50Q2VsbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJycpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5jcHVQbGF5ZXIuYm9hcmQuYm9hcmRbaV1bal0gPT0gMSAmJiAhdGhpcy5nYW1lQ29tcGxldGUgJiYgdGhpcy5jaGVhdGVyKSB7XG4gICAgICAgICAgICBjdXJyZW50Q2VsbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQtY29sb3I6IGJsYWNrOyBvdmVyZmxvdzpoaWRkZW47JylcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRoaXMuY3B1UGxheWVyLmJvYXJkLmJvYXJkW2ldW2pdID09IDAgJiYgIXRoaXMuZ2FtZUNvbXBsZXRlICYmIHRoaXMuY2hlYXRlcikge1xuICAgICAgICAgICAgY3VycmVudENlbGwuc2V0QXR0cmlidXRlKCdzdHlsZScsICcnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfSlcblxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHBsYXllclBsYWNlU2hpcChyb3csIGNvbHVtbikge1xuICAgIGxldCBjb29yZHMgPSBDb29yZHMocGFyc2VJbnQocm93KSwgcGFyc2VJbnQoY29sdW1uKSk7XG4gICAgbGV0IHRoaXNTaGlwID0gbmV3IFNoaXAodGhpcy5jdXJyZW50U2hpcExlbmd0aCwgY29vcmRzLCB0aGlzLm9yaWVudGF0aW9uKTtcbiAgICB0aGlzLnBsYXllci5ib2FyZC5wbGFjZVNoaXAodGhpc1NoaXApO1xuXG4gICAgdGhpcy5jdXJyZW50U2hpcExlbmd0aC0tO1xuICAgIGlmICh0aGlzLmN1cnJlbnRTaGlwTGVuZ3RoIDwgMikge1xuICAgICAgdGhpcy5wbGFubmluZ1BoYXNlID0gZmFsc2U7XG4gICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1ib2FyZC1jb250YWluZXInKTtcbiAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIucXVlcnlTZWxlY3RvcignLnJvdGF0ZScpKTtcbiAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21hcmdpbi10b3A6IDI1cHgnKTtcbiAgICAgIHRoaXMuYXR0YWNrUGhhc2UoKTtcbiAgICB9XG4gIH1cblxuICBhdHRhY2tQaGFzZSgpIHtcbiAgICB0aGlzLmF0dGFja0hvdmVyKCk7XG4gICAgbGV0IGNwdUJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNwdS1ib2FyZCcpO1xuICAgIGxldCBnYW1lT3ZlciA9ICghdGhpcy5wbGF5ZXIuYm9hcmQuYWxsU2hpcHNTdW5rKCkgJiZcbiAgICAgICF0aGlzLmNwdVBsYXllci5ib2FyZC5hbGxTaGlwc1N1bmsoKSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgbGV0IGN1cnJlbnRDZWxsID0gY3B1Qm9hcmQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHtpfSR7an1gKVswXTtcbiAgICAgICAgY3VycmVudENlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgIGxldCBnYW1lT3ZlciA9ICh0aGlzLnBsYXllci5ib2FyZC5hbGxTaGlwc1N1bmsoKSB8fFxuICAgICAgICAgICAgdGhpcy5jcHVQbGF5ZXIuYm9hcmQuYWxsU2hpcHNTdW5rKCkpO1xuICAgICAgICAgIGlmICghZ2FtZU92ZXIpIHtcbiAgICAgICAgICAgIGxldCBib2FyZCA9IHRoaXMuY3B1UGxheWVyLmJvYXJkLmJvYXJkO1xuICAgICAgICAgICAgaWYgKCEoYm9hcmRbaV1bal0gPT0gMiB8fCBib2FyZFtpXVtqXSA9PSAzKSkge1xuICAgICAgICAgICAgICBpZiAoYm9hcmRbaV1bal0gPT0gMSkge1xuICAgICAgICAgICAgICAgIGUudGFyZ2V0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZC1jb2xvcjogI2ZiNmE2YScpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3B1UGxheWVyLmJvYXJkLnJlY2VpdmVBdHRhY2soQ29vcmRzKGksIGopKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoYm9hcmRbaV1bal0gPT0gMCkge1xuICAgICAgICAgICAgICAgIGUudGFyZ2V0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZC1jb2xvcjogI2E4YThhOCcpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3B1UGxheWVyLmJvYXJkLnJlY2VpdmVBdHRhY2soQ29vcmRzKGksIGopKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLnBsYXllci5jb21wdXRlckF0dGFjaygpO1xuICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hDZWxscygpO1xuICAgICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXIuYm9hcmQuYWxsU2hpcHNTdW5rKCkgfHxcbiAgICAgICAgICAgICAgICB0aGlzLmNwdVBsYXllci5ib2FyZC5hbGxTaGlwc1N1bmsoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUNvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hDZWxscygpIHtcbiAgICBsZXQgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLWJvYXJkJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgbGV0IGN1cnJlbnRDZWxsID0gcGxheWVyQm9hcmQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHtpfSR7an1gKVswXTtcbiAgICAgICAgbGV0IGJvYXJkID0gdGhpcy5wbGF5ZXIuYm9hcmQuYm9hcmQ7XG4gICAgICAgIGlmIChib2FyZFtpXVtqXSA9PSAzKSB7XG4gICAgICAgICAgY3VycmVudENlbGwuc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kLWNvbG9yOiAjYThhOGE4Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvYXJkW2ldW2pdID09IDIpIHtcbiAgICAgICAgICBjdXJyZW50Q2VsbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQtY29sb3I6ICNmYjZhNmEnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm9hcmRbaV1bal0gPT0gMSkge1xuICAgICAgICAgIGN1cnJlbnRDZWxsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZC1jb2xvcjogIzk3ZmU3YycpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2FtZU92ZXIoKSB7XG4gICAgbGV0IGFubm91bmNlV2lubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFubm91bmNlLXdpbm5lcicpO1xuICAgIHRoaXMuY3B1UGxheWVyLmJvYXJkLmFsbFNoaXBzU3VuaygpID8gYW5ub3VuY2VXaW5uZXIuaW5uZXJIVE1MID0gJ1lvdSB3aW4hJyA6IGFubm91bmNlV2lubmVyLmlubmVySFRNTCA9ICdZb3UgbG9zZSEnXG4gICAgaWYgKCF0aGlzLmNoZWF0ZXIgJiYgdGhpcy5jcHVQbGF5ZXIuYm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgIGxldCByZWFsV2lubmVyTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgcmVhbFdpbm5lck1lc3NhZ2UuaW5uZXJIVE1MID0gJ1dpdGhvdXQgY2hlYXRpbmchJztcbiAgICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1jb250YWluZXInKTtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyZWFsV2lubmVyTWVzc2FnZSk7XG4gICAgfVxuICAgIGlmICh0aGlzLmNoZWF0ZXIpIHtcbiAgICAgIGxldCBjaGVhdGVyTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY2hlYXRlck1lc3NhZ2UuaW5uZXJIVE1MID0gJ2J1dCB1IGNoZWF0ZWQnO1xuICAgICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLWNvbnRhaW5lcicpO1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWF0ZXJNZXNzYWdlKTtcbiAgICB9XG4gICAgYW5ub3VuY2VXaW5uZXIuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgRGlzcGxheTtcbiIsImNsYXNzIEJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgYXJyID0gbmV3IEFycmF5KDEwKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIGFycltpXSA9IG5ldyBBcnJheSgxMCkuZmlsbCgwKTtcbiAgICB9XG4gICAgdGhpcy5ib2FyZCA9IGFycjtcbiAgICB0aGlzLmFsbFN1bmsgPSBmYWxzZTtcbiAgICB0aGlzLnNoaXBzID0gW107XG4gIH1cblxuICAvLyAxID0gc2hpcCwgMiA9IGhpdHNoaXAsIDMgPSBtaXNzXG4gIHBsYWNlU2hpcChzaGlwKSB7XG4gICAgbGV0IHJvdyA9IHNoaXAuaGVhZENvb3Jkcy5yb3c7XG4gICAgbGV0IGNvbHVtbiA9IHNoaXAuaGVhZENvb3Jkcy5jb2x1bW47XG4gICAgaWYgKHNoaXAub3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgZm9yIChsZXQgaSA9IGNvbHVtbiAtIHNoaXAubGVuZ3RoICsgMTsgaSA8IGNvbHVtbiArIDE7IGkrKykge1xuICAgICAgICB0aGlzLmJvYXJkW3Jvd11baV0gPSAxO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoc2hpcC5vcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgZm9yIChsZXQgaSA9IHJvdzsgaSA8IHJvdyArIHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5ib2FyZFtpXVtjb2x1bW5dID0gMTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zaGlwcy5wdXNoKHNoaXApO1xuICB9XG5cbiAgcmVjZWl2ZUF0dGFjayhjb29yZHMpIHtcbiAgICBsZXQgY29sdW1uID0gY29vcmRzLmNvbHVtbjtcbiAgICBsZXQgcm93ID0gY29vcmRzLnJvdztcbiAgICBsZXQgaGl0ID0gZmFsc2U7XG4gICAgZm9yIChjb25zdCBzaGlwIG9mIHRoaXMuc2hpcHMpIHtcbiAgICAgIGlmIChzaGlwLmhpdChjb29yZHMpKSB7XG4gICAgICAgIHRoaXMuYm9hcmRbcm93XVtjb2x1bW5dID0gMjtcbiAgICAgICAgaGl0ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFoaXQpIHtcbiAgICAgIHRoaXMuYm9hcmRbcm93XVtjb2x1bW5dID0gMztcbiAgICB9XG4gIH1cblxuICBhbGxTaGlwc1N1bmsoKSB7XG4gICAgbGV0IG51bWJlclN1bmsgPSAwO1xuICAgIGZvciAoY29uc3Qgc2hpcCBvZiB0aGlzLnNoaXBzKSB7XG4gICAgICBpZiAoc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICBudW1iZXJTdW5rKys7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLnNoaXBzLmxlbmd0aCA+IDAgJiYgbnVtYmVyU3VuayA9PSB0aGlzLnNoaXBzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvYXJkO1xuIiwiY29uc3QgQ29vcmRzID0gKHJvdywgY29sdW1uKSA9PiB7XG4gIHJldHVybiB7IHJvdywgY29sdW1uIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvb3JkcztcbiIsImltcG9ydCBCb2FyZCBmcm9tICcuL2JvYXJkLmpzJztcbmltcG9ydCBTaGlwIGZyb20gJy4vc2hpcC5qcyc7XG5pbXBvcnQgQ29vcmRzIGZyb20gJy4vY29vcmRzLmpzJztcblxuY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5ib2FyZCA9IG5ldyBCb2FyZCgpO1xuICB9XG5cbiAgY29tcHV0ZXJQbGFjZVNoaXBzKCkge1xuICAgIGZvciAobGV0IGkgPSAyOyBpIDwgNjsgaSsrKSB7XG4gICAgICB0aGlzLmNvbXB1dGVyUGxhY2VTaGlwKGkpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGNvbXB1dGVyUGxhY2VTaGlwKGxlbmd0aCkge1xuICAgIGxldCBwb3NpdGlvbkFyciA9IHRoaXMuZ2VuZXJhdGVSYW5kb21Db29yZCgpO1xuICAgIGxldCBwb3NpdGlvbiA9IENvb3Jkcyhwb3NpdGlvbkFyclswXSwgcG9zaXRpb25BcnJbMV0pO1xuICAgIGxldCBvcmllbnRhdGlvbiA9IHRoaXMucmFuZG9tT3JpZW50YXRpb24oKTtcbiAgICBsZXQgY29sbGlkaW5nID0gdGhpcy5jaGVja0NvbGxpZGUobGVuZ3RoLCBwb3NpdGlvbiwgb3JpZW50YXRpb24pO1xuXG4gICAgLy8gR2VuZXJhdGUgbmV3IHBvc2l0aW9uIGlmIGhlYWRDb29yZHMgYXJlIGludmFsaWRcbiAgICAvLyAoT2NjdXBpZWQgb3Igb3ZlcmxhcHBpbmcgbGVuZ3RoIG9mIHNoaXApXG4gICAgd2hpbGUgKChvcmllbnRhdGlvbiA9PSAndmVydGljYWwnICYmICg5IC0gcG9zaXRpb24ucm93KSA8IGxlbmd0aCkgfHxcbiAgICAgIChvcmllbnRhdGlvbiA9PSAnaG9yaXpvbnRhbCcgJiYgcG9zaXRpb24uY29sdW1uIDwgbGVuZ3RoKSB8fFxuICAgICAgKHRoaXMuYm9hcmQuYm9hcmRbcG9zaXRpb24ucm93XVtwb3NpdGlvbi5jb2x1bW5dID4gMCkgfHxcbiAgICAgIGNvbGxpZGluZykge1xuICAgICAgcG9zaXRpb25BcnIgPSB0aGlzLmdlbmVyYXRlUmFuZG9tQ29vcmQoKTtcbiAgICAgIHBvc2l0aW9uID0gQ29vcmRzKHBvc2l0aW9uQXJyWzBdLCBwb3NpdGlvbkFyclsxXSk7XG4gICAgICBjb2xsaWRpbmcgPSB0aGlzLmNoZWNrQ29sbGlkZShsZW5ndGgsIHBvc2l0aW9uLCBvcmllbnRhdGlvbik7XG4gICAgfTtcblxuICAgIGxldCBzaGlwID0gbmV3IFNoaXAobGVuZ3RoLCBwb3NpdGlvbiwgb3JpZW50YXRpb24pO1xuICAgIHRoaXMuYm9hcmQucGxhY2VTaGlwKHNoaXApO1xuICB9XG5cbiAgY2hlY2tDb2xsaWRlKGxlbmd0aCwgcG9zaXRpb24sIG9yaWVudGF0aW9uKSB7XG4gICAgbGV0IGJvYXJkID0gdGhpcy5ib2FyZC5ib2FyZDtcbiAgICBpZiAob3JpZW50YXRpb24gPT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBpZiAocG9zaXRpb24uY29sdW1uIDwgbGVuZ3RoIC0gMSkgcmV0dXJuIHRydWU7XG4gICAgICBmb3IgKGxldCBpID0gcG9zaXRpb24uY29sdW1uOyBpID4gcGFyc2VJbnQocG9zaXRpb24uY29sdW1uKSAtIHBhcnNlSW50KGxlbmd0aCk7IGktLSkge1xuICAgICAgICBpZiAoYm9hcmRbcG9zaXRpb24ucm93XVtpXSA+IDApIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAob3JpZW50YXRpb24gPT0gJ3ZlcnRpY2FsJykge1xuICAgICAgaWYgKCg5IC0gcG9zaXRpb24ucm93KSA8IGxlbmd0aCAtIDEpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gcG9zaXRpb24ucm93OyBpIDwgcGFyc2VJbnQocG9zaXRpb24ucm93KSArIHBhcnNlSW50KGxlbmd0aCk7IGkrKykge1xuICAgICAgICBpZiAoYm9hcmRbaV1bcG9zaXRpb24uY29sdW1uXSA+IDApIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjaGVja09uRWRnZShvcmllbnRhdGlvbiwgcG9zaXRpb24sIGxlbmd0aCkge1xuICAgIGxldCByb3cgPSBwb3NpdGlvbi5yb3c7XG4gICAgbGV0IGNvbHVtbiA9IHBvc2l0aW9uLmNvbHVtbjtcbiAgICBpZiAob3JpZW50YXRpb24gPT0gJ2hvcml6b250YWwnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAodGhpcy5ib2FyZC5ib2FyZFtyb3ddW2NvbHVtbiArIDFdID09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgIHRoaXMuYm9hcmQuYm9hcmRbcm93XVtjb2x1bW4gLSBsZW5ndGggLSAxXSA9PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICB0aGlzLmJvYXJkLmJvYXJkW3JvdyArIDFdW2NvbHVtbl0gPT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgdGhpcy5ib2FyZC5ib2FyZFtyb3cgLSAxXVtjb2x1bW5dID09IHVuZGVmaW5lZClcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gY2F0Y2ggKFR5cGVFcnJvcikgeyByZXR1cm4gdHJ1ZTsgfVxuICAgIH1cbiAgICBpZiAob3JpZW50YXRpb24gPT0gJ3ZlcnRpY2FsJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKHRoaXMuYm9hcmQuYm9hcmRbcm93IC0gMV1bY29sdW1uXSA9PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICB0aGlzLmJvYXJkLmJvYXJkW3JvdyArIGxlbmd0aCArIDFdW2NvbHVtbl0gPT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgdGhpcy5ib2FyZC5ib2FyZFtyb3ddW2NvbHVtbiArIDFdID09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgIHRoaXMuYm9hcmQuYm9hcmRbcm93XVtjb2x1bW4gLSAxXSA9PSB1bmRlZmluZWQpXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGNhdGNoIChUeXBlRXJyb3IpIHsgcmV0dXJuIHRydWU7IH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29tcHV0ZXJBdHRhY2soKSB7XG4gICAgbGV0IGF0dGFja0Nvb3JkID0gdGhpcy5nZW5lcmF0ZVJhbmRvbUNvb3JkKCk7XG4gICAgbGV0IGF0dGFja2VkQ29vcmQgPSB0aGlzLmJvYXJkLmJvYXJkW2F0dGFja0Nvb3JkWzBdXVthdHRhY2tDb29yZFsxXV07XG4gICAgaWYgKGF0dGFja2VkQ29vcmQgPCAyKSB7XG4gICAgICB0aGlzLmJvYXJkLnJlY2VpdmVBdHRhY2soQ29vcmRzKGF0dGFja0Nvb3JkWzBdLCBhdHRhY2tDb29yZFsxXSkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmNvbXB1dGVyQXR0YWNrKCk7XG4gIH1cblxuICBnZW5lcmF0ZVJhbmRvbUNvb3JkKCkge1xuICAgIGxldCByYW5kb21YID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIGxldCByYW5kb21ZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIHJldHVybiBbcmFuZG9tWCwgcmFuZG9tWV07XG4gIH1cblxuICByYW5kb21PcmllbnRhdGlvbigpIHtcbiAgICBsZXQgb3JpZW50YXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcbiAgICBpZiAob3JpZW50YXRpb24gPT0gMSkge1xuICAgICAgcmV0dXJuICdob3Jpem9udGFsJztcbiAgICB9XG4gICAgcmV0dXJuICd2ZXJ0aWNhbCc7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xuIiwiY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKGxlbmd0aCwgaGVhZENvb3Jkcywgb3JpZW50YXRpb24pIHtcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICB0aGlzLmhlYWRDb29yZHMgPSBoZWFkQ29vcmRzO1xuICAgIHRoaXMub3JpZW50YXRpb24gPSBvcmllbnRhdGlvbjtcbiAgICB0aGlzLmhpdHMgPSBuZXcgQXJyYXkobGVuZ3RoKS5maWxsKDApO1xuICB9XG5cbiAgaGl0KGNvb3Jkcykge1xuICAgIGlmICh0aGlzLm9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIGlmIChjb29yZHMucm93ID09IHRoaXMuaGVhZENvb3Jkcy5yb3cpIHtcbiAgICAgICAgaWYgKGNvb3Jkcy5jb2x1bW4gPD0gdGhpcy5oZWFkQ29vcmRzLmNvbHVtbiAmJlxuICAgICAgICAgIGNvb3Jkcy5jb2x1bW4gPj0gKHRoaXMuaGVhZENvb3Jkcy5jb2x1bW4gKyAxIC0gdGhpcy5sZW5ndGgpKSB7XG4gICAgICAgICAgdGhpcy5hZGRUb0hpdHMoY29vcmRzKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5vcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgaWYgKGNvb3Jkcy5jb2x1bW4gPT0gdGhpcy5oZWFkQ29vcmRzLmNvbHVtbikge1xuICAgICAgICBpZiAoY29vcmRzLnJvdyA+PSB0aGlzLmhlYWRDb29yZHMucm93ICYmXG4gICAgICAgICAgY29vcmRzLnJvdyA8PSAodGhpcy5sZW5ndGggKyB0aGlzLmhlYWRDb29yZHMucm93IC0gMSkpIHtcbiAgICAgICAgICB0aGlzLmFkZFRvSGl0cyhjb29yZHMpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGFkZFRvSGl0cyhjb29yZHMpIHtcbiAgICBpZiAodGhpcy5vcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKVxuICAgICAgdGhpcy5oaXRzW3RoaXMubGVuZ3RoIC0gKHRoaXMuaGVhZENvb3Jkcy5jb2x1bW4gLSBjb29yZHMuY29sdW1uKSAtIDFdID0gMTtcbiAgICBpZiAodGhpcy5vcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJylcbiAgICAgIHRoaXMuaGl0c1tjb29yZHMucm93IC0gdGhpcy5oZWFkQ29vcmRzLnJvd10gPSAxO1xuICB9XG5cbiAgaXNTdW5rKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMuaGl0c1tpXSA9PSAwKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7XG4iLCJpbXBvcnQgJy4uL2Nzcy9zdHlsZS5jc3MnO1xuaW1wb3J0IERpc3BsYXkgZnJvbSAnLi9kb21zdHVmZi9kaXNwbGF5LmpzJztcblxubGV0IGRpc3BsYXkgPSBuZXcgRGlzcGxheTtcbmRpc3BsYXkubG9hZEJvYXJkcygpO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoZWF0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGRpc3BsYXkuY3B1RGlzcGxheVNoaXBzKCk7XG4gIGRpc3BsYXkuY2hlYXRlciA9IHRydWU7XG59KTtcblxuZGlzcGxheS5yb3RhdGUoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==