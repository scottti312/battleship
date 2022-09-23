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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  display: flex;\n  justify-content: space-around;\n}\n\n.board {\n  display: grid;\n  grid-template-columns: repeat(10, 10%);\n  grid-template-rows: repeat(10, 10%);\n  height: 300px;\n  width: 300px;\n  border: 2px solid black;\n}\n\n.cell {\n  width: 100%;\n  height: 100%;\n  border: 1px solid black;\n}\n\n.cpu-board {\n  margin-top: 25px;\n}\n", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,aAAa;EACb,YAAY;EACZ,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;AAClB","sourcesContent":["body {\n  display: flex;\n  justify-content: space-around;\n}\n\n.board {\n  display: grid;\n  grid-template-columns: repeat(10, 10%);\n  grid-template-rows: repeat(10, 10%);\n  height: 300px;\n  width: 300px;\n  border: 2px solid black;\n}\n\n.cell {\n  width: 100%;\n  height: 100%;\n  border: 1px solid black;\n}\n\n.cpu-board {\n  margin-top: 25px;\n}\n"],"sourceRoot":""}]);
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
    this.orientation = 'horizontal';
    this.currentShipLength = 5;
  }

  loadBoards() {
    let playerBoard = document.querySelector('.player-board');
    let cpuBoard = document.querySelector('.cpu-board');
    this.generateCells(playerBoard, true);
    this.generateCells(cpuBoard, false);

    this.player.computerPlaceShips();
  }

  generateCells(board, playerBoardBool) {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        let cell = document.createElement('div');
        cell.className = `${i}${j} cell`;
        if (playerBoardBool) {
          this.hoverShip(cell);
        }
        board.appendChild(cell);
      }
    }
  }

  destroyCells(board) {
    while (board.firstChild) {
      board.removeChild(board.firstChild);
    }
  }

  hoverShip(cell) {
    if (this.orientation == 'horizontal') {
      cell.addEventListener('mouseover', (e) => {
        let column = e.target.classList[0][1];
        let row = e.target.classList[0][0];
        for (let i = column; i > parseInt(column) - parseInt(this.currentShipLength); i--) {
          let cellsToBeHighlighted;
          try {
            cellsToBeHighlighted = document.getElementsByClassName(`${row}${i}`)[0];
            cellsToBeHighlighted.setAttribute('style', 'background-color: purple');
          } catch (TypeError) { };
        }
      }, false);
      cell.addEventListener('mouseout', (e) => {
        let column = e.target.classList[0][1];
        let row = e.target.classList[0][0];
        for (let i = column; i > parseInt(column) - parseInt(this.currentShipLength); i--) {
          let cellsToBeErased;
          try {
            cellsToBeErased = document.getElementsByClassName(`${row}${i}`)[0];
            cellsToBeErased.setAttribute('style', '');
          } catch (TypeError) { };
        }
      }, false);
    }

    if (this.orientation == 'vertical') {
      cell.addEventListener('mouseover', (e) => {
        let column = e.target.classList[0][1];
        let row = e.target.classList[0][0];
        console.log(row + this.currentShipLength);
        for (let i = row; i < parseInt(row) + parseInt(this.currentShipLength); i++) {
          let cellsToBeHighlighted;
          try {
            cellsToBeHighlighted = document.getElementsByClassName(`${i}${column}`)[0];
            cellsToBeHighlighted.setAttribute('style', 'background-color: purple');
          } catch (TypeError) { };
        }
      }, false);
      cell.addEventListener('mouseout', (e) => {
        let column = e.target.classList[0][1];
        let row = e.target.classList[0][0];
        for (let i = row; i < parseInt(row) + parseInt(this.currentShipLength); i++) {
          let cellsToBeErased;
          try {
            cellsToBeErased = document.getElementsByClassName(`${i}${column}`)[0];
            cellsToBeErased.setAttribute('style', '');
          } catch (TypeError) { };
        }
      }, false);
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
        if (this.player.board.board[i][j] == 1) {
          currentCell.setAttribute('style', 'background-color: black');
        }
      }
    }
  }

  playerPlaceShip(length, rawCoords, orientation) {
    let coords = new _game_coords__WEBPACK_IMPORTED_MODULE_2__["default"](rawCoords[0], rawCoords[1]);
    let thisShip = new _game_ship__WEBPACK_IMPORTED_MODULE_1__["default"](length, coords, orientation);
    this.currentShipLength--;
    this.player.board.placeShip();
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
    if (this.allShipsSunk()) {
      this.gameOver();
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

  gameOver() {
    console.log('Game Over!');
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
    console.log(this.board.ships);
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

  // checkSurroundings(orientation, position, length) {
  //   let board = this.board.board;
  //   if (orientation == 'horizontal') {
  //     for (let i = position.column; i > position.column - length; i--) {
  //       if (board[position.row - 1][i] > 0) return true;
  //       if (board[position.row + 1][i] > 0) return true;
  //       if (board[position.row][position.column + 1] > 0) return true;
  //       if (board[position.row][position.column - length] > 0) return true;
  //       if (board[position.row][i] > 0) return true;
  //     }
  //   }

  //   if (orientation == 'vertical') {
  //     console.log(`${position.row}, ${position.row + length - 1}`)
  //     for (let i = position.row; i < position.row + length; i++) {
  //       console.log('fuck');
  //       if (board[i][position.column + 1] > 0) return true;
  //       if (board[i][position.column - 1] > 0) return true;
  //       if (board[position.row + 1][position.column] > 0) return true;
  //       if (board[position.row - 1][position.column] > 0) return true;
  //       if (board[i][position.column] > 0) return true;
  //     }
  //   }
  //   return false;
  // }

  checkCollide(length, position, orientation) {
    console.log(this.board.ships);
    console.log(`${length}, (${position.row},${position.column}), ${orientation}`);
    let board = this.board.board;
    if (orientation == 'horizontal') {
      if (position.column < length) return true;
      for (let i = position.column; i > position.column - length; i--) {
        if (board[position.row][i] > 0) return true;
      }
    }
    if (orientation == 'vertical') {
      if ((9 - position.row) < length) return true;
      for (let i = position.row; i < position.row + length; i++) {
        if (board[i][position.column] > 0) return true;
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
display.cpuDisplayShips();

display.rotate();


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxrQkFBa0IsNERBQU87QUFDekI7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stc3RhcnRlci8uL3NyYy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLy4vc3JjL2Nzcy9zdHlsZS5jc3M/OWZjZCIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci8uL3NyYy9qcy9kb21zdHVmZi9kaXNwbGF5LmpzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci8uL3NyYy9qcy9nYW1lL2JvYXJkLmpzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci8uL3NyYy9qcy9nYW1lL2Nvb3Jkcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvLi9zcmMvanMvZ2FtZS9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLy4vc3JjL2pzL2dhbWUvc2hpcC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLmJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMTAlKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxMCUpO1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uY2VsbCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uY3B1LWJvYXJkIHtcXG4gIG1hcmdpbi10b3A6IDI1cHg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsbUNBQW1DO0VBQ25DLGFBQWE7RUFDYixZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5ib2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDEwJSk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMTAlKTtcXG4gIGhlaWdodDogMzAwcHg7XFxuICB3aWR0aDogMzAwcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmNlbGwge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmNwdS1ib2FyZCB7XFxuICBtYXJnaW4tdG9wOiAyNXB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi4vZ2FtZS9wbGF5ZXInO1xuaW1wb3J0IFNoaXAgZnJvbSAnLi4vZ2FtZS9zaGlwJztcbmltcG9ydCBDb29yZHMgZnJvbSAnLi4vZ2FtZS9jb29yZHMnO1xuXG5jbGFzcyBEaXNwbGF5IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKCk7XG4gICAgdGhpcy5vcmllbnRhdGlvbiA9ICdob3Jpem9udGFsJztcbiAgICB0aGlzLmN1cnJlbnRTaGlwTGVuZ3RoID0gNTtcbiAgfVxuXG4gIGxvYWRCb2FyZHMoKSB7XG4gICAgbGV0IHBsYXllckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1ib2FyZCcpO1xuICAgIGxldCBjcHVCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcHUtYm9hcmQnKTtcbiAgICB0aGlzLmdlbmVyYXRlQ2VsbHMocGxheWVyQm9hcmQsIHRydWUpO1xuICAgIHRoaXMuZ2VuZXJhdGVDZWxscyhjcHVCb2FyZCwgZmFsc2UpO1xuXG4gICAgdGhpcy5wbGF5ZXIuY29tcHV0ZXJQbGFjZVNoaXBzKCk7XG4gIH1cblxuICBnZW5lcmF0ZUNlbGxzKGJvYXJkLCBwbGF5ZXJCb2FyZEJvb2wpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjZWxsLmNsYXNzTmFtZSA9IGAke2l9JHtqfSBjZWxsYDtcbiAgICAgICAgaWYgKHBsYXllckJvYXJkQm9vbCkge1xuICAgICAgICAgIHRoaXMuaG92ZXJTaGlwKGNlbGwpO1xuICAgICAgICB9XG4gICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKGNlbGwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRlc3Ryb3lDZWxscyhib2FyZCkge1xuICAgIHdoaWxlIChib2FyZC5maXJzdENoaWxkKSB7XG4gICAgICBib2FyZC5yZW1vdmVDaGlsZChib2FyZC5maXJzdENoaWxkKTtcbiAgICB9XG4gIH1cblxuICBob3ZlclNoaXAoY2VsbCkge1xuICAgIGlmICh0aGlzLm9yaWVudGF0aW9uID09ICdob3Jpem9udGFsJykge1xuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoZSkgPT4ge1xuICAgICAgICBsZXQgY29sdW1uID0gZS50YXJnZXQuY2xhc3NMaXN0WzBdWzFdO1xuICAgICAgICBsZXQgcm93ID0gZS50YXJnZXQuY2xhc3NMaXN0WzBdWzBdO1xuICAgICAgICBmb3IgKGxldCBpID0gY29sdW1uOyBpID4gcGFyc2VJbnQoY29sdW1uKSAtIHBhcnNlSW50KHRoaXMuY3VycmVudFNoaXBMZW5ndGgpOyBpLS0pIHtcbiAgICAgICAgICBsZXQgY2VsbHNUb0JlSGlnaGxpZ2h0ZWQ7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNlbGxzVG9CZUhpZ2hsaWdodGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHtyb3d9JHtpfWApWzBdO1xuICAgICAgICAgICAgY2VsbHNUb0JlSGlnaGxpZ2h0ZWQuc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGUnKTtcbiAgICAgICAgICB9IGNhdGNoIChUeXBlRXJyb3IpIHsgfTtcbiAgICAgICAgfVxuICAgICAgfSwgZmFsc2UpO1xuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIChlKSA9PiB7XG4gICAgICAgIGxldCBjb2x1bW4gPSBlLnRhcmdldC5jbGFzc0xpc3RbMF1bMV07XG4gICAgICAgIGxldCByb3cgPSBlLnRhcmdldC5jbGFzc0xpc3RbMF1bMF07XG4gICAgICAgIGZvciAobGV0IGkgPSBjb2x1bW47IGkgPiBwYXJzZUludChjb2x1bW4pIC0gcGFyc2VJbnQodGhpcy5jdXJyZW50U2hpcExlbmd0aCk7IGktLSkge1xuICAgICAgICAgIGxldCBjZWxsc1RvQmVFcmFzZWQ7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNlbGxzVG9CZUVyYXNlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7cm93fSR7aX1gKVswXTtcbiAgICAgICAgICAgIGNlbGxzVG9CZUVyYXNlZC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJycpO1xuICAgICAgICAgIH0gY2F0Y2ggKFR5cGVFcnJvcikgeyB9O1xuICAgICAgICB9XG4gICAgICB9LCBmYWxzZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3JpZW50YXRpb24gPT0gJ3ZlcnRpY2FsJykge1xuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoZSkgPT4ge1xuICAgICAgICBsZXQgY29sdW1uID0gZS50YXJnZXQuY2xhc3NMaXN0WzBdWzFdO1xuICAgICAgICBsZXQgcm93ID0gZS50YXJnZXQuY2xhc3NMaXN0WzBdWzBdO1xuICAgICAgICBjb25zb2xlLmxvZyhyb3cgKyB0aGlzLmN1cnJlbnRTaGlwTGVuZ3RoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IHJvdzsgaSA8IHBhcnNlSW50KHJvdykgKyBwYXJzZUludCh0aGlzLmN1cnJlbnRTaGlwTGVuZ3RoKTsgaSsrKSB7XG4gICAgICAgICAgbGV0IGNlbGxzVG9CZUhpZ2hsaWdodGVkO1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjZWxsc1RvQmVIaWdobGlnaHRlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7aX0ke2NvbHVtbn1gKVswXTtcbiAgICAgICAgICAgIGNlbGxzVG9CZUhpZ2hsaWdodGVkLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZC1jb2xvcjogcHVycGxlJyk7XG4gICAgICAgICAgfSBjYXRjaCAoVHlwZUVycm9yKSB7IH07XG4gICAgICAgIH1cbiAgICAgIH0sIGZhbHNlKTtcbiAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoZSkgPT4ge1xuICAgICAgICBsZXQgY29sdW1uID0gZS50YXJnZXQuY2xhc3NMaXN0WzBdWzFdO1xuICAgICAgICBsZXQgcm93ID0gZS50YXJnZXQuY2xhc3NMaXN0WzBdWzBdO1xuICAgICAgICBmb3IgKGxldCBpID0gcm93OyBpIDwgcGFyc2VJbnQocm93KSArIHBhcnNlSW50KHRoaXMuY3VycmVudFNoaXBMZW5ndGgpOyBpKyspIHtcbiAgICAgICAgICBsZXQgY2VsbHNUb0JlRXJhc2VkO1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjZWxsc1RvQmVFcmFzZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke2l9JHtjb2x1bW59YClbMF07XG4gICAgICAgICAgICBjZWxsc1RvQmVFcmFzZWQuc2V0QXR0cmlidXRlKCdzdHlsZScsICcnKTtcbiAgICAgICAgICB9IGNhdGNoIChUeXBlRXJyb3IpIHsgfTtcbiAgICAgICAgfVxuICAgICAgfSwgZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIHJvdGF0ZSgpIHtcbiAgICBsZXQgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLWJvYXJkJyk7XG4gICAgbGV0IHJvdGF0ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb3RhdGUnKTtcbiAgICByb3RhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLmRlc3Ryb3lDZWxscyhwbGF5ZXJCb2FyZCk7XG4gICAgICB0aGlzLm9yaWVudGF0aW9uID09ICdob3Jpem9udGFsJyA/IHRoaXMub3JpZW50YXRpb24gPSAndmVydGljYWwnIDogdGhpcy5vcmllbnRhdGlvbiA9ICdob3Jpem9udGFsJztcbiAgICAgIHRoaXMuZ2VuZXJhdGVDZWxscyhwbGF5ZXJCb2FyZCwgdHJ1ZSk7XG4gICAgfSk7XG4gIH1cblxuICBjcHVEaXNwbGF5U2hpcHMoKSB7XG4gICAgbGV0IGNwdUJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNwdS1ib2FyZCcpO1xuICAgIGxldCBjZWxsID0gY3B1Qm9hcmQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2VsbCcpO1xuICAgIGNlbGwuaW5uZXJIVE1MID0gJzAnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgIGxldCBjdXJyZW50Q2VsbCA9IGNwdUJvYXJkLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7aX0ke2p9YClbMF07XG4gICAgICAgIGlmICh0aGlzLnBsYXllci5ib2FyZC5ib2FyZFtpXVtqXSA9PSAxKSB7XG4gICAgICAgICAgY3VycmVudENlbGwuc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaycpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcGxheWVyUGxhY2VTaGlwKGxlbmd0aCwgcmF3Q29vcmRzLCBvcmllbnRhdGlvbikge1xuICAgIGxldCBjb29yZHMgPSBuZXcgQ29vcmRzKHJhd0Nvb3Jkc1swXSwgcmF3Q29vcmRzWzFdKTtcbiAgICBsZXQgdGhpc1NoaXAgPSBuZXcgU2hpcChsZW5ndGgsIGNvb3Jkcywgb3JpZW50YXRpb24pO1xuICAgIHRoaXMuY3VycmVudFNoaXBMZW5ndGgtLTtcbiAgICB0aGlzLnBsYXllci5ib2FyZC5wbGFjZVNoaXAoKTtcbiAgfVxuXG59XG5leHBvcnQgZGVmYXVsdCBEaXNwbGF5O1xuIiwiY2xhc3MgQm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBhcnIgPSBuZXcgQXJyYXkoMTApO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgYXJyW2ldID0gbmV3IEFycmF5KDEwKS5maWxsKDApO1xuICAgIH1cbiAgICB0aGlzLmJvYXJkID0gYXJyO1xuICAgIHRoaXMuYWxsU3VuayA9IGZhbHNlO1xuICAgIHRoaXMuc2hpcHMgPSBbXTtcbiAgfVxuXG4gIC8vIDEgPSBzaGlwLCAyID0gaGl0c2hpcCwgMyA9IG1pc3NcbiAgcGxhY2VTaGlwKHNoaXApIHtcbiAgICBsZXQgcm93ID0gc2hpcC5oZWFkQ29vcmRzLnJvdztcbiAgICBsZXQgY29sdW1uID0gc2hpcC5oZWFkQ29vcmRzLmNvbHVtbjtcbiAgICBpZiAoc2hpcC5vcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBmb3IgKGxldCBpID0gY29sdW1uIC0gc2hpcC5sZW5ndGggKyAxOyBpIDwgY29sdW1uICsgMTsgaSsrKSB7XG4gICAgICAgIHRoaXMuYm9hcmRbcm93XVtpXSA9IDE7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChzaGlwLm9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICBmb3IgKGxldCBpID0gcm93OyBpIDwgcm93ICsgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLmJvYXJkW2ldW2NvbHVtbl0gPSAxO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNoaXBzLnB1c2goc2hpcCk7XG4gIH1cblxuICByZWNlaXZlQXR0YWNrKGNvb3Jkcykge1xuICAgIGxldCBjb2x1bW4gPSBjb29yZHMuY29sdW1uO1xuICAgIGxldCByb3cgPSBjb29yZHMucm93O1xuICAgIGxldCBoaXQgPSBmYWxzZTtcbiAgICBmb3IgKGNvbnN0IHNoaXAgb2YgdGhpcy5zaGlwcykge1xuICAgICAgaWYgKHNoaXAuaGl0KGNvb3JkcykpIHtcbiAgICAgICAgdGhpcy5ib2FyZFtyb3ddW2NvbHVtbl0gPSAyO1xuICAgICAgICBoaXQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5hbGxTaGlwc1N1bmsoKSkge1xuICAgICAgdGhpcy5nYW1lT3ZlcigpO1xuICAgIH1cbiAgICBpZiAoIWhpdCkge1xuICAgICAgdGhpcy5ib2FyZFtyb3ddW2NvbHVtbl0gPSAzO1xuICAgIH1cbiAgfVxuXG4gIGFsbFNoaXBzU3VuaygpIHtcbiAgICBsZXQgbnVtYmVyU3VuayA9IDA7XG4gICAgZm9yIChjb25zdCBzaGlwIG9mIHRoaXMuc2hpcHMpIHtcbiAgICAgIGlmIChzaGlwLmlzU3VuaygpKSB7XG4gICAgICAgIG51bWJlclN1bmsrKztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuc2hpcHMubGVuZ3RoID4gMCAmJiBudW1iZXJTdW5rID09IHRoaXMuc2hpcHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZ2FtZU92ZXIoKSB7XG4gICAgY29uc29sZS5sb2coJ0dhbWUgT3ZlciEnKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb2FyZDtcbiIsImNvbnN0IENvb3JkcyA9IChyb3csIGNvbHVtbikgPT4ge1xuICByZXR1cm4geyByb3csIGNvbHVtbiB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBDb29yZHM7XG4iLCJpbXBvcnQgQm9hcmQgZnJvbSAnLi9ib2FyZC5qcyc7XG5pbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAuanMnO1xuaW1wb3J0IENvb3JkcyBmcm9tICcuL2Nvb3Jkcy5qcyc7XG5cbmNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYm9hcmQgPSBuZXcgQm9hcmQoKTtcbiAgfVxuXG4gIGNvbXB1dGVyUGxhY2VTaGlwcygpIHtcbiAgICBmb3IgKGxldCBpID0gMjsgaSA8IDY7IGkrKykge1xuICAgICAgdGhpcy5jb21wdXRlclBsYWNlU2hpcChpKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2codGhpcy5ib2FyZC5zaGlwcyk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBjb21wdXRlclBsYWNlU2hpcChsZW5ndGgpIHtcbiAgICBsZXQgcG9zaXRpb25BcnIgPSB0aGlzLmdlbmVyYXRlUmFuZG9tQ29vcmQoKTtcbiAgICBsZXQgcG9zaXRpb24gPSBDb29yZHMocG9zaXRpb25BcnJbMF0sIHBvc2l0aW9uQXJyWzFdKTtcbiAgICBsZXQgb3JpZW50YXRpb24gPSB0aGlzLnJhbmRvbU9yaWVudGF0aW9uKCk7XG4gICAgbGV0IGNvbGxpZGluZyA9IHRoaXMuY2hlY2tDb2xsaWRlKGxlbmd0aCwgcG9zaXRpb24sIG9yaWVudGF0aW9uKTtcblxuICAgIC8vIEdlbmVyYXRlIG5ldyBwb3NpdGlvbiBpZiBoZWFkQ29vcmRzIGFyZSBpbnZhbGlkXG4gICAgLy8gKE9jY3VwaWVkIG9yIG92ZXJsYXBwaW5nIGxlbmd0aCBvZiBzaGlwKVxuICAgIHdoaWxlICgob3JpZW50YXRpb24gPT0gJ3ZlcnRpY2FsJyAmJiAoOSAtIHBvc2l0aW9uLnJvdykgPCBsZW5ndGgpIHx8XG4gICAgICAob3JpZW50YXRpb24gPT0gJ2hvcml6b250YWwnICYmIHBvc2l0aW9uLmNvbHVtbiA8IGxlbmd0aCkgfHxcbiAgICAgICh0aGlzLmJvYXJkLmJvYXJkW3Bvc2l0aW9uLnJvd11bcG9zaXRpb24uY29sdW1uXSA+IDApIHx8XG4gICAgICBjb2xsaWRpbmcpIHtcbiAgICAgIHBvc2l0aW9uQXJyID0gdGhpcy5nZW5lcmF0ZVJhbmRvbUNvb3JkKCk7XG4gICAgICBwb3NpdGlvbiA9IENvb3Jkcyhwb3NpdGlvbkFyclswXSwgcG9zaXRpb25BcnJbMV0pO1xuICAgICAgY29sbGlkaW5nID0gdGhpcy5jaGVja0NvbGxpZGUobGVuZ3RoLCBwb3NpdGlvbiwgb3JpZW50YXRpb24pO1xuICAgIH07XG5cbiAgICBsZXQgc2hpcCA9IG5ldyBTaGlwKGxlbmd0aCwgcG9zaXRpb24sIG9yaWVudGF0aW9uKTtcbiAgICB0aGlzLmJvYXJkLnBsYWNlU2hpcChzaGlwKTtcbiAgfVxuXG4gIC8vIGNoZWNrU3Vycm91bmRpbmdzKG9yaWVudGF0aW9uLCBwb3NpdGlvbiwgbGVuZ3RoKSB7XG4gIC8vICAgbGV0IGJvYXJkID0gdGhpcy5ib2FyZC5ib2FyZDtcbiAgLy8gICBpZiAob3JpZW50YXRpb24gPT0gJ2hvcml6b250YWwnKSB7XG4gIC8vICAgICBmb3IgKGxldCBpID0gcG9zaXRpb24uY29sdW1uOyBpID4gcG9zaXRpb24uY29sdW1uIC0gbGVuZ3RoOyBpLS0pIHtcbiAgLy8gICAgICAgaWYgKGJvYXJkW3Bvc2l0aW9uLnJvdyAtIDFdW2ldID4gMCkgcmV0dXJuIHRydWU7XG4gIC8vICAgICAgIGlmIChib2FyZFtwb3NpdGlvbi5yb3cgKyAxXVtpXSA+IDApIHJldHVybiB0cnVlO1xuICAvLyAgICAgICBpZiAoYm9hcmRbcG9zaXRpb24ucm93XVtwb3NpdGlvbi5jb2x1bW4gKyAxXSA+IDApIHJldHVybiB0cnVlO1xuICAvLyAgICAgICBpZiAoYm9hcmRbcG9zaXRpb24ucm93XVtwb3NpdGlvbi5jb2x1bW4gLSBsZW5ndGhdID4gMCkgcmV0dXJuIHRydWU7XG4gIC8vICAgICAgIGlmIChib2FyZFtwb3NpdGlvbi5yb3ddW2ldID4gMCkgcmV0dXJuIHRydWU7XG4gIC8vICAgICB9XG4gIC8vICAgfVxuXG4gIC8vICAgaWYgKG9yaWVudGF0aW9uID09ICd2ZXJ0aWNhbCcpIHtcbiAgLy8gICAgIGNvbnNvbGUubG9nKGAke3Bvc2l0aW9uLnJvd30sICR7cG9zaXRpb24ucm93ICsgbGVuZ3RoIC0gMX1gKVxuICAvLyAgICAgZm9yIChsZXQgaSA9IHBvc2l0aW9uLnJvdzsgaSA8IHBvc2l0aW9uLnJvdyArIGxlbmd0aDsgaSsrKSB7XG4gIC8vICAgICAgIGNvbnNvbGUubG9nKCdmdWNrJyk7XG4gIC8vICAgICAgIGlmIChib2FyZFtpXVtwb3NpdGlvbi5jb2x1bW4gKyAxXSA+IDApIHJldHVybiB0cnVlO1xuICAvLyAgICAgICBpZiAoYm9hcmRbaV1bcG9zaXRpb24uY29sdW1uIC0gMV0gPiAwKSByZXR1cm4gdHJ1ZTtcbiAgLy8gICAgICAgaWYgKGJvYXJkW3Bvc2l0aW9uLnJvdyArIDFdW3Bvc2l0aW9uLmNvbHVtbl0gPiAwKSByZXR1cm4gdHJ1ZTtcbiAgLy8gICAgICAgaWYgKGJvYXJkW3Bvc2l0aW9uLnJvdyAtIDFdW3Bvc2l0aW9uLmNvbHVtbl0gPiAwKSByZXR1cm4gdHJ1ZTtcbiAgLy8gICAgICAgaWYgKGJvYXJkW2ldW3Bvc2l0aW9uLmNvbHVtbl0gPiAwKSByZXR1cm4gdHJ1ZTtcbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gIC8vICAgcmV0dXJuIGZhbHNlO1xuICAvLyB9XG5cbiAgY2hlY2tDb2xsaWRlKGxlbmd0aCwgcG9zaXRpb24sIG9yaWVudGF0aW9uKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5ib2FyZC5zaGlwcyk7XG4gICAgY29uc29sZS5sb2coYCR7bGVuZ3RofSwgKCR7cG9zaXRpb24ucm93fSwke3Bvc2l0aW9uLmNvbHVtbn0pLCAke29yaWVudGF0aW9ufWApO1xuICAgIGxldCBib2FyZCA9IHRoaXMuYm9hcmQuYm9hcmQ7XG4gICAgaWYgKG9yaWVudGF0aW9uID09ICdob3Jpem9udGFsJykge1xuICAgICAgaWYgKHBvc2l0aW9uLmNvbHVtbiA8IGxlbmd0aCkgcmV0dXJuIHRydWU7XG4gICAgICBmb3IgKGxldCBpID0gcG9zaXRpb24uY29sdW1uOyBpID4gcG9zaXRpb24uY29sdW1uIC0gbGVuZ3RoOyBpLS0pIHtcbiAgICAgICAgaWYgKGJvYXJkW3Bvc2l0aW9uLnJvd11baV0gPiAwKSByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG9yaWVudGF0aW9uID09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIGlmICgoOSAtIHBvc2l0aW9uLnJvdykgPCBsZW5ndGgpIHJldHVybiB0cnVlO1xuICAgICAgZm9yIChsZXQgaSA9IHBvc2l0aW9uLnJvdzsgaSA8IHBvc2l0aW9uLnJvdyArIGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChib2FyZFtpXVtwb3NpdGlvbi5jb2x1bW5dID4gMCkgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNoZWNrT25FZGdlKG9yaWVudGF0aW9uLCBwb3NpdGlvbiwgbGVuZ3RoKSB7XG4gICAgbGV0IHJvdyA9IHBvc2l0aW9uLnJvdztcbiAgICBsZXQgY29sdW1uID0gcG9zaXRpb24uY29sdW1uO1xuICAgIGlmIChvcmllbnRhdGlvbiA9PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICh0aGlzLmJvYXJkLmJvYXJkW3Jvd11bY29sdW1uICsgMV0gPT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgdGhpcy5ib2FyZC5ib2FyZFtyb3ddW2NvbHVtbiAtIGxlbmd0aCAtIDFdID09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgIHRoaXMuYm9hcmQuYm9hcmRbcm93ICsgMV1bY29sdW1uXSA9PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICB0aGlzLmJvYXJkLmJvYXJkW3JvdyAtIDFdW2NvbHVtbl0gPT0gdW5kZWZpbmVkKVxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBjYXRjaCAoVHlwZUVycm9yKSB7IHJldHVybiB0cnVlOyB9XG4gICAgfVxuICAgIGlmIChvcmllbnRhdGlvbiA9PSAndmVydGljYWwnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAodGhpcy5ib2FyZC5ib2FyZFtyb3cgLSAxXVtjb2x1bW5dID09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgIHRoaXMuYm9hcmQuYm9hcmRbcm93ICsgbGVuZ3RoICsgMV1bY29sdW1uXSA9PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICB0aGlzLmJvYXJkLmJvYXJkW3Jvd11bY29sdW1uICsgMV0gPT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgdGhpcy5ib2FyZC5ib2FyZFtyb3ddW2NvbHVtbiAtIDFdID09IHVuZGVmaW5lZClcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gY2F0Y2ggKFR5cGVFcnJvcikgeyByZXR1cm4gdHJ1ZTsgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb21wdXRlckF0dGFjaygpIHtcbiAgICBsZXQgYXR0YWNrQ29vcmQgPSB0aGlzLmdlbmVyYXRlUmFuZG9tQ29vcmQoKTtcbiAgICBsZXQgYXR0YWNrZWRDb29yZCA9IHRoaXMuYm9hcmQuYm9hcmRbYXR0YWNrQ29vcmRbMF1dW2F0dGFja0Nvb3JkWzFdXTtcbiAgICBpZiAoYXR0YWNrZWRDb29yZCA8IDIpIHtcbiAgICAgIHRoaXMuYm9hcmQucmVjZWl2ZUF0dGFjayhDb29yZHMoYXR0YWNrQ29vcmRbMF0sIGF0dGFja0Nvb3JkWzFdKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuY29tcHV0ZXJBdHRhY2soKTtcbiAgfVxuXG4gIGdlbmVyYXRlUmFuZG9tQ29vcmQoKSB7XG4gICAgbGV0IHJhbmRvbVggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgbGV0IHJhbmRvbVkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgcmV0dXJuIFtyYW5kb21YLCByYW5kb21ZXTtcbiAgfVxuXG4gIHJhbmRvbU9yaWVudGF0aW9uKCkge1xuICAgIGxldCBvcmllbnRhdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuICAgIGlmIChvcmllbnRhdGlvbiA9PSAxKSB7XG4gICAgICByZXR1cm4gJ2hvcml6b250YWwnO1xuICAgIH1cbiAgICByZXR1cm4gJ3ZlcnRpY2FsJztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCJjbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3IobGVuZ3RoLCBoZWFkQ29vcmRzLCBvcmllbnRhdGlvbikge1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMuaGVhZENvb3JkcyA9IGhlYWRDb29yZHM7XG4gICAgdGhpcy5vcmllbnRhdGlvbiA9IG9yaWVudGF0aW9uO1xuICAgIHRoaXMuaGl0cyA9IG5ldyBBcnJheShsZW5ndGgpLmZpbGwoMCk7XG4gIH1cblxuICBoaXQoY29vcmRzKSB7XG4gICAgaWYgKHRoaXMub3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgaWYgKGNvb3Jkcy5yb3cgPT0gdGhpcy5oZWFkQ29vcmRzLnJvdykge1xuICAgICAgICBpZiAoY29vcmRzLmNvbHVtbiA8PSB0aGlzLmhlYWRDb29yZHMuY29sdW1uICYmXG4gICAgICAgICAgY29vcmRzLmNvbHVtbiA+PSAodGhpcy5oZWFkQ29vcmRzLmNvbHVtbiArIDEgLSB0aGlzLmxlbmd0aCkpIHtcbiAgICAgICAgICB0aGlzLmFkZFRvSGl0cyhjb29yZHMpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLm9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICBpZiAoY29vcmRzLmNvbHVtbiA9PSB0aGlzLmhlYWRDb29yZHMuY29sdW1uKSB7XG4gICAgICAgIGlmIChjb29yZHMucm93ID49IHRoaXMuaGVhZENvb3Jkcy5yb3cgJiZcbiAgICAgICAgICBjb29yZHMucm93IDw9ICh0aGlzLmxlbmd0aCArIHRoaXMuaGVhZENvb3Jkcy5yb3cgLSAxKSkge1xuICAgICAgICAgIHRoaXMuYWRkVG9IaXRzKGNvb3Jkcyk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgYWRkVG9IaXRzKGNvb3Jkcykge1xuICAgIGlmICh0aGlzLm9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpXG4gICAgICB0aGlzLmhpdHNbdGhpcy5sZW5ndGggLSAodGhpcy5oZWFkQ29vcmRzLmNvbHVtbiAtIGNvb3Jkcy5jb2x1bW4pIC0gMV0gPSAxO1xuICAgIGlmICh0aGlzLm9yaWVudGF0aW9uID09PSAndmVydGljYWwnKVxuICAgICAgdGhpcy5oaXRzW2Nvb3Jkcy5yb3cgLSB0aGlzLmhlYWRDb29yZHMucm93XSA9IDE7XG4gIH1cblxuICBpc1N1bmsoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5oaXRzW2ldID09IDApXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hpcDtcbiIsImltcG9ydCAnLi4vY3NzL3N0eWxlLmNzcyc7XG5pbXBvcnQgRGlzcGxheSBmcm9tICcuL2RvbXN0dWZmL2Rpc3BsYXkuanMnO1xuXG5sZXQgZGlzcGxheSA9IG5ldyBEaXNwbGF5O1xuZGlzcGxheS5sb2FkQm9hcmRzKCk7XG5kaXNwbGF5LmNwdURpc3BsYXlTaGlwcygpO1xuXG5kaXNwbGF5LnJvdGF0ZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9