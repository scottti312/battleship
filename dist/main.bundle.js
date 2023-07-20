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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background-color: #DDDDDD;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.game-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  margin-top: 20vh;\n  margin-bottom: 25vh;\n}\n\n.title {\n  font-size: 2em;\n  margin: 25px;\n}\n\n.boards-container {\n  display: flex;\n  justify-content: center;\n  gap: 10%;\n  width: 100%;\n}\n\n.board {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  height: 300px;\n  width: 300px;\n  border: 1px solid black;\n}\n\n.cell {\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  border: 1px solid black;\n}\n\n.ship-cell {\n  background-color: #97fe7c;\n}\n\n.footer a {\n  color: black;\n}", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA;EACE,yBAAyB;EACzB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,WAAW;EACX,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,YAAY;AACd;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,QAAQ;EACR,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,aAAa;EACb,YAAY;EACZ,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;EAChB,WAAW;EACX,YAAY;EACZ,uBAAuB;AACzB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,YAAY;AACd","sourcesContent":["body {\n  background-color: #DDDDDD;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.game-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  margin-top: 20vh;\n  margin-bottom: 25vh;\n}\n\n.title {\n  font-size: 2em;\n  margin: 25px;\n}\n\n.boards-container {\n  display: flex;\n  justify-content: center;\n  gap: 10%;\n  width: 100%;\n}\n\n.board {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  height: 300px;\n  width: 300px;\n  border: 1px solid black;\n}\n\n.cell {\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  border: 1px solid black;\n}\n\n.ship-cell {\n  background-color: #97fe7c;\n}\n\n.footer a {\n  color: black;\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHNEQUFNO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxNQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzNHdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixpQkFBaUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7QUM5Q007QUFDa0I7O0FBRTVDLGtCQUFrQiw0REFBTztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvLi9zcmMvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci8uL3NyYy9jc3Mvc3R5bGUuY3NzPzlmY2QiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvLi9zcmMvanMvZG9tc3R1ZmYvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvLi9zcmMvanMvZ2FtZS9ib2FyZC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvLi9zcmMvanMvZ2FtZS9jb29yZHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLy4vc3JjL2pzL2dhbWUvcGxheWVyLmpzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci8uL3NyYy9qcy9nYW1lL3NoaXAuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLy4vc3JjL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREREREO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmdhbWUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLXRvcDogMjB2aDtcXG4gIG1hcmdpbi1ib3R0b206IDI1dmg7XFxufVxcblxcbi50aXRsZSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbjogMjVweDtcXG59XFxuXFxuLmJvYXJkcy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uY2VsbCB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnNoaXAtY2VsbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTdmZTdjO1xcbn1cXG5cXG4uZm9vdGVyIGEge1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsUUFBUTtFQUNSLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsbUNBQW1DO0VBQ25DLGFBQWE7RUFDYixZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RERERERDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5nYW1lLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi10b3A6IDIwdmg7XFxuICBtYXJnaW4tYm90dG9tOiAyNXZoO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW46IDI1cHg7XFxufVxcblxcbi5ib2FyZHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5ib2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGhlaWdodDogMzAwcHg7XFxuICB3aWR0aDogMzAwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmNlbGwge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5zaGlwLWNlbGwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk3ZmU3YztcXG59XFxuXFxuLmZvb3RlciBhIHtcXG4gIGNvbG9yOiBibGFjaztcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgUGxheWVyIGZyb20gJy4uL2dhbWUvcGxheWVyJztcbmltcG9ydCBTaGlwIGZyb20gJy4uL2dhbWUvc2hpcCc7XG5pbXBvcnQgQ29vcmRzIGZyb20gJy4uL2dhbWUvY29vcmRzJztcblxuY2xhc3MgRGlzcGxheSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcigpO1xuICAgIHRoaXMuY3B1UGxheWVyID0gbmV3IFBsYXllcigpO1xuICAgIHRoaXMub3JpZW50YXRpb24gPSAnaG9yaXpvbnRhbCc7XG4gICAgdGhpcy5jdXJyZW50U2hpcExlbmd0aCA9IDU7XG4gICAgdGhpcy5wbGFubmluZ1BoYXNlID0gdHJ1ZTtcbiAgICB0aGlzLmNoZWF0ZXIgPSBmYWxzZTtcbiAgICB0aGlzLmdhbWVDb21wbGV0ZSA9IGZhbHNlO1xuICB9XG5cbiAgbG9hZEJvYXJkcygpIHtcbiAgICBsZXQgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLWJvYXJkJyk7XG4gICAgbGV0IGNwdUJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNwdS1ib2FyZCcpO1xuICAgIHRoaXMuZ2VuZXJhdGVDZWxscyhwbGF5ZXJCb2FyZCwgdHJ1ZSk7XG4gICAgdGhpcy5nZW5lcmF0ZUNlbGxzKGNwdUJvYXJkLCBmYWxzZSk7XG4gICAgdGhpcy5jcHVQbGF5ZXIuY29tcHV0ZXJQbGFjZVNoaXBzKCk7XG4gIH1cblxuICBnZW5lcmF0ZUNlbGxzKGJvYXJkLCBwbGF5ZXJCb2FyZEJvb2wpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjZWxsLmNsYXNzTmFtZSA9IGAke2l9JHtqfSBjZWxsYDtcbiAgICAgICAgaWYgKHRoaXMucGxheWVyLmJvYXJkLmJvYXJkW2ldW2pdID09IDEpXG4gICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwLWNlbGwnKTtcbiAgICAgICAgaWYgKHBsYXllckJvYXJkQm9vbCAmJiB0aGlzLnBsYW5uaW5nUGhhc2UpIHtcbiAgICAgICAgICB0aGlzLmhvdmVyU2hpcChjZWxsKTtcbiAgICAgICAgICB0aGlzLmNsaWNrU2hpcChjZWxsKTtcbiAgICAgICAgfVxuICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBob3ZlclNoaXAoY2VsbCkge1xuICAgIGlmICh0aGlzLm9yaWVudGF0aW9uID09ICdob3Jpem9udGFsJykge1xuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoZSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5wbGFubmluZ1BoYXNlKSB7XG4gICAgICAgICAgbGV0IGNvbHVtbiA9IGUudGFyZ2V0LmNsYXNzTGlzdFswXVsxXTtcbiAgICAgICAgICBsZXQgcm93ID0gZS50YXJnZXQuY2xhc3NMaXN0WzBdWzBdO1xuICAgICAgICAgIGlmICghdGhpcy5wbGF5ZXIuY2hlY2tDb2xsaWRlKHRoaXMuY3VycmVudFNoaXBMZW5ndGgsIENvb3JkcyhwYXJzZUludChyb3cpLCBwYXJzZUludChjb2x1bW4pKSwgdGhpcy5vcmllbnRhdGlvbikpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBjb2x1bW47IGkgPiBwYXJzZUludChjb2x1bW4pIC0gcGFyc2VJbnQodGhpcy5jdXJyZW50U2hpcExlbmd0aCk7IGktLSkge1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCBjZWxsc1RvQmVIaWdobGlnaHRlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7cm93fSR7aX1gKVswXTtcbiAgICAgICAgICAgICAgICBpZiAoIWNlbGxzVG9CZUhpZ2hsaWdodGVkLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1jZWxsJykpIHtcbiAgICAgICAgICAgICAgICAgIGNlbGxzVG9CZUhpZ2hsaWdodGVkLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZC1jb2xvcjogIzM1ODBjMicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBjYXRjaCAoVHlwZUVycm9yKSB7IH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCBmYWxzZSk7XG4gICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKGUpID0+IHtcbiAgICAgICAgaWYgKHRoaXMucGxhbm5pbmdQaGFzZSkge1xuICAgICAgICAgIGxldCBjb2x1bW4gPSBlLnRhcmdldC5jbGFzc0xpc3RbMF1bMV07XG4gICAgICAgICAgbGV0IHJvdyA9IGUudGFyZ2V0LmNsYXNzTGlzdFswXVswXTtcbiAgICAgICAgICBmb3IgKGxldCBpID0gY29sdW1uOyBpID4gcGFyc2VJbnQoY29sdW1uKSAtIHBhcnNlSW50KHRoaXMuY3VycmVudFNoaXBMZW5ndGgpOyBpLS0pIHtcbiAgICAgICAgICAgIGxldCBjZWxsc1RvQmVFcmFzZWQ7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBjZWxsc1RvQmVFcmFzZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3Jvd30ke2l9YClbMF07XG4gICAgICAgICAgICAgIGNlbGxzVG9CZUVyYXNlZC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJycpO1xuICAgICAgICAgICAgfSBjYXRjaCAoVHlwZUVycm9yKSB7IH07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCBmYWxzZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3JpZW50YXRpb24gPT0gJ3ZlcnRpY2FsJykge1xuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoZSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5wbGFubmluZ1BoYXNlKSB7XG4gICAgICAgICAgbGV0IGNvbHVtbiA9IGUudGFyZ2V0LmNsYXNzTGlzdFswXVsxXTtcbiAgICAgICAgICBsZXQgcm93ID0gZS50YXJnZXQuY2xhc3NMaXN0WzBdWzBdO1xuXG4gICAgICAgICAgaWYgKCF0aGlzLnBsYXllci5jaGVja0NvbGxpZGUodGhpcy5jdXJyZW50U2hpcExlbmd0aCwgQ29vcmRzKHBhcnNlSW50KHJvdyksIHBhcnNlSW50KGNvbHVtbikpLCB0aGlzLm9yaWVudGF0aW9uKSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHJvdzsgaSA8IHBhcnNlSW50KHJvdykgKyBwYXJzZUludCh0aGlzLmN1cnJlbnRTaGlwTGVuZ3RoKTsgaSsrKSB7XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IGNlbGxzVG9CZUhpZ2hsaWdodGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHtpfSR7Y29sdW1ufWApWzBdO1xuICAgICAgICAgICAgICAgIGNlbGxzVG9CZUhpZ2hsaWdodGVkLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZC1jb2xvcjogIzM1ODBjMicpO1xuICAgICAgICAgICAgICB9IGNhdGNoIChUeXBlRXJyb3IpIHsgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIGZhbHNlKTtcbiAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoZSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5wbGFubmluZ1BoYXNlKSB7XG4gICAgICAgICAgbGV0IGNvbHVtbiA9IGUudGFyZ2V0LmNsYXNzTGlzdFswXVsxXTtcbiAgICAgICAgICBsZXQgcm93ID0gZS50YXJnZXQuY2xhc3NMaXN0WzBdWzBdO1xuICAgICAgICAgIGZvciAobGV0IGkgPSByb3c7IGkgPCBwYXJzZUludChyb3cpICsgcGFyc2VJbnQodGhpcy5jdXJyZW50U2hpcExlbmd0aCk7IGkrKykge1xuICAgICAgICAgICAgbGV0IGNlbGxzVG9CZUVyYXNlZDtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGNlbGxzVG9CZUVyYXNlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7aX0ke2NvbHVtbn1gKVswXTtcbiAgICAgICAgICAgICAgY2VsbHNUb0JlRXJhc2VkLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnJyk7XG4gICAgICAgICAgICB9IGNhdGNoIChUeXBlRXJyb3IpIHsgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBjbGlja1NoaXAoY2VsbCkge1xuICAgIGlmICh0aGlzLm9yaWVudGF0aW9uID09ICdob3Jpem9udGFsJykge1xuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnBsYW5uaW5nUGhhc2UpIHtcbiAgICAgICAgICBsZXQgY29sdW1uID0gZS50YXJnZXQuY2xhc3NMaXN0WzBdWzFdO1xuICAgICAgICAgIGxldCByb3cgPSBlLnRhcmdldC5jbGFzc0xpc3RbMF1bMF07XG5cbiAgICAgICAgICBsZXQgY29sbGlkaW5nID0gdGhpcy5wbGF5ZXIuY2hlY2tDb2xsaWRlKHRoaXMuY3VycmVudFNoaXBMZW5ndGgsIENvb3JkcyhwYXJzZUludChyb3cpLCBwYXJzZUludChjb2x1bW4pKSwgdGhpcy5vcmllbnRhdGlvbik7XG5cbiAgICAgICAgICBpZiAoIShjb2x1bW4gPCB0aGlzLmN1cnJlbnRTaGlwTGVuZ3RoIC0gMSkgJiZcbiAgICAgICAgICAgICEodGhpcy5wbGF5ZXIuYm9hcmQuYm9hcmRbcm93XVtjb2x1bW5dID4gMCkgJiYgIWNvbGxpZGluZykge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJQbGFjZVNoaXAocm93LCBjb2x1bW4pO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gY29sdW1uOyBpID4gcGFyc2VJbnQoY29sdW1uKSAtIHBhcnNlSW50KHRoaXMuY3VycmVudFNoaXBMZW5ndGgpIC0gMTsgaS0tKSB7XG4gICAgICAgICAgICAgIGxldCBjZWxsc1RvQmVIaWdobGlnaHRlZDtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjZWxsc1RvQmVIaWdobGlnaHRlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7cm93fSR7aX1gKVswXTtcbiAgICAgICAgICAgICAgICBjZWxsc1RvQmVIaWdobGlnaHRlZC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQtY29sb3I6ICM5N2ZlN2MnKTtcbiAgICAgICAgICAgICAgICBjZWxsc1RvQmVIaWdobGlnaHRlZC5jbGFzc0xpc3QuYWRkKCdzaGlwLWNlbGwnKTtcbiAgICAgICAgICAgICAgfSBjYXRjaCAoVHlwZUVycm9yKSB7IH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCBmYWxzZSk7XG4gICAgfVxuICAgIGlmICh0aGlzLm9yaWVudGF0aW9uID09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5wbGFubmluZ1BoYXNlKSB7XG4gICAgICAgICAgbGV0IGNvbHVtbiA9IGUudGFyZ2V0LmNsYXNzTGlzdFswXVsxXTtcbiAgICAgICAgICBsZXQgcm93ID0gZS50YXJnZXQuY2xhc3NMaXN0WzBdWzBdO1xuXG4gICAgICAgICAgbGV0IGNvbGxpZGluZyA9IHRoaXMucGxheWVyLmNoZWNrQ29sbGlkZSh0aGlzLmxlbmd0aCwgQ29vcmRzKHBhcnNlSW50KHJvdyksIHBhcnNlSW50KGNvbHVtbikpLCB0aGlzLm9yaWVudGF0aW9uKTtcbiAgICAgICAgICBpZiAoISh0aGlzLm9yaWVudGF0aW9uID09ICd2ZXJ0aWNhbCcgJiYgKDkgLSByb3cpIDwgdGhpcy5jdXJyZW50U2hpcGxlbmd0aCkgfHxcbiAgICAgICAgICAgICEodGhpcy5wbGF5ZXIuYm9hcmQuYm9hcmRbcm93XVtjb2x1bW5dID4gMCkgfHwgIWNvbGxpZGluZykge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJQbGFjZVNoaXAocm93LCBjb2x1bW4pO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gcm93OyBpIDwgcGFyc2VJbnQocm93KSArIHBhcnNlSW50KHRoaXMuY3VycmVudFNoaXBMZW5ndGgpICsgMTsgaSsrKSB7XG4gICAgICAgICAgICAgIGxldCBjZWxsc1RvQmVIaWdobGlnaHRlZDtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjZWxsc1RvQmVIaWdobGlnaHRlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7aX0ke2NvbHVtbn1gKVswXTtcbiAgICAgICAgICAgICAgICBjZWxsc1RvQmVIaWdobGlnaHRlZC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQtY29sb3I6ICM5N2ZlN2MnKTtcbiAgICAgICAgICAgICAgICBjZWxsc1RvQmVIaWdobGlnaHRlZC5jbGFzc0xpc3QuYWRkKCdzaGlwLWNlbGwnKTtcbiAgICAgICAgICAgICAgfSBjYXRjaCAoVHlwZUVycm9yKSB7IH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCBmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgZGVzdHJveUNlbGxzKGJvYXJkKSB7XG4gICAgd2hpbGUgKGJvYXJkLmZpcnN0Q2hpbGQpIHtcbiAgICAgIGJvYXJkLnJlbW92ZUNoaWxkKGJvYXJkLmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgfVxuXG4gIHJvdGF0ZSgpIHtcbiAgICBsZXQgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLWJvYXJkJyk7XG4gICAgbGV0IHJvdGF0ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb3RhdGUnKTtcbiAgICByb3RhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLmRlc3Ryb3lDZWxscyhwbGF5ZXJCb2FyZCk7XG4gICAgICB0aGlzLm9yaWVudGF0aW9uID09ICdob3Jpem9udGFsJyA/IHRoaXMub3JpZW50YXRpb24gPSAndmVydGljYWwnIDogdGhpcy5vcmllbnRhdGlvbiA9ICdob3Jpem9udGFsJztcbiAgICAgIHRoaXMuZ2VuZXJhdGVDZWxscyhwbGF5ZXJCb2FyZCwgdHJ1ZSk7XG4gICAgfSk7XG4gIH1cblxuICBjcHVEaXNwbGF5U2hpcHMoKSB7XG4gICAgbGV0IGNwdUJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNwdS1ib2FyZCcpO1xuICAgIGxldCBjZWxsID0gY3B1Qm9hcmQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2VsbCcpO1xuICAgIGNlbGwuaW5uZXJIVE1MID0gJzAnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgIGxldCBjdXJyZW50Q2VsbCA9IGNwdUJvYXJkLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7aX0ke2p9YClbMF07XG4gICAgICAgIGlmICh0aGlzLmNwdVBsYXllci5ib2FyZC5ib2FyZFtpXVtqXSA9PSAxKSB7XG4gICAgICAgICAgY3VycmVudENlbGwuc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaycpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYXR0YWNrSG92ZXIoKSB7XG4gICAgbGV0IGNwdUJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNwdS1ib2FyZCcpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgIGxldCBjdXJyZW50Q2VsbCA9IGNwdUJvYXJkLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7aX0ke2p9YClbMF07XG4gICAgICAgIGN1cnJlbnRDZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5jcHVQbGF5ZXIuYm9hcmQuYm9hcmRbaV1bal0gPCAyICYmICF0aGlzLmdhbWVDb21wbGV0ZSkge1xuICAgICAgICAgICAgY3VycmVudENlbGwuc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kLWNvbG9yOiBncmF5OyBvdmVyZmxvdzogaGlkZGVuOycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgY3VycmVudENlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuY3B1UGxheWVyLmJvYXJkLmJvYXJkW2ldW2pdIDwgMiAmJiAhdGhpcy5nYW1lQ29tcGxldGUgJiYgIXRoaXMuY2hlYXRlcikge1xuICAgICAgICAgICAgY3VycmVudENlbGwuc2V0QXR0cmlidXRlKCdzdHlsZScsICcnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRoaXMuY3B1UGxheWVyLmJvYXJkLmJvYXJkW2ldW2pdID09IDEgJiYgIXRoaXMuZ2FtZUNvbXBsZXRlICYmIHRoaXMuY2hlYXRlcikge1xuICAgICAgICAgICAgY3VycmVudENlbGwuc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgb3ZlcmZsb3c6aGlkZGVuOycpXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0aGlzLmNwdVBsYXllci5ib2FyZC5ib2FyZFtpXVtqXSA9PSAwICYmICF0aGlzLmdhbWVDb21wbGV0ZSAmJiB0aGlzLmNoZWF0ZXIpIHtcbiAgICAgICAgICAgIGN1cnJlbnRDZWxsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0pXG5cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwbGF5ZXJQbGFjZVNoaXAocm93LCBjb2x1bW4pIHtcbiAgICBsZXQgY29vcmRzID0gQ29vcmRzKHBhcnNlSW50KHJvdyksIHBhcnNlSW50KGNvbHVtbikpO1xuICAgIGxldCB0aGlzU2hpcCA9IG5ldyBTaGlwKHRoaXMuY3VycmVudFNoaXBMZW5ndGgsIGNvb3JkcywgdGhpcy5vcmllbnRhdGlvbik7XG4gICAgdGhpcy5wbGF5ZXIuYm9hcmQucGxhY2VTaGlwKHRoaXNTaGlwKTtcblxuICAgIHRoaXMuY3VycmVudFNoaXBMZW5ndGgtLTtcbiAgICBpZiAodGhpcy5jdXJyZW50U2hpcExlbmd0aCA8IDIpIHtcbiAgICAgIHRoaXMucGxhbm5pbmdQaGFzZSA9IGZhbHNlO1xuICAgICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItYm9hcmQtY29udGFpbmVyJyk7XG4gICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5yb3RhdGUnKSk7XG4gICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsICdtYXJnaW4tdG9wOiAyNXB4Jyk7XG4gICAgICB0aGlzLmF0dGFja1BoYXNlKCk7XG4gICAgfVxuICB9XG5cbiAgYXR0YWNrUGhhc2UoKSB7XG4gICAgdGhpcy5hdHRhY2tIb3ZlcigpO1xuICAgIGxldCBjcHVCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcHUtYm9hcmQnKTtcbiAgICBsZXQgZ2FtZU92ZXIgPSAoIXRoaXMucGxheWVyLmJvYXJkLmFsbFNoaXBzU3VuaygpICYmXG4gICAgICAhdGhpcy5jcHVQbGF5ZXIuYm9hcmQuYWxsU2hpcHNTdW5rKCkpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgIGxldCBjdXJyZW50Q2VsbCA9IGNwdUJvYXJkLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7aX0ke2p9YClbMF07XG4gICAgICAgIGN1cnJlbnRDZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICBsZXQgZ2FtZU92ZXIgPSAodGhpcy5wbGF5ZXIuYm9hcmQuYWxsU2hpcHNTdW5rKCkgfHxcbiAgICAgICAgICAgIHRoaXMuY3B1UGxheWVyLmJvYXJkLmFsbFNoaXBzU3VuaygpKTtcbiAgICAgICAgICBpZiAoIWdhbWVPdmVyKSB7XG4gICAgICAgICAgICBsZXQgYm9hcmQgPSB0aGlzLmNwdVBsYXllci5ib2FyZC5ib2FyZDtcbiAgICAgICAgICAgIGlmICghKGJvYXJkW2ldW2pdID09IDIgfHwgYm9hcmRbaV1bal0gPT0gMykpIHtcbiAgICAgICAgICAgICAgaWYgKGJvYXJkW2ldW2pdID09IDEpIHtcbiAgICAgICAgICAgICAgICBlLnRhcmdldC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQtY29sb3I6ICNmYjZhNmEnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNwdVBsYXllci5ib2FyZC5yZWNlaXZlQXR0YWNrKENvb3JkcyhpLCBqKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKGJvYXJkW2ldW2pdID09IDApIHtcbiAgICAgICAgICAgICAgICBlLnRhcmdldC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQtY29sb3I6ICNhOGE4YTgnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNwdVBsYXllci5ib2FyZC5yZWNlaXZlQXR0YWNrKENvb3JkcyhpLCBqKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuY29tcHV0ZXJBdHRhY2soKTtcbiAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoQ2VsbHMoKTtcbiAgICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyLmJvYXJkLmFsbFNoaXBzU3VuaygpIHx8XG4gICAgICAgICAgICAgICAgdGhpcy5jcHVQbGF5ZXIuYm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVDb21wbGV0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZWZyZXNoQ2VsbHMoKSB7XG4gICAgbGV0IHBsYXllckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1ib2FyZCcpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgIGxldCBjdXJyZW50Q2VsbCA9IHBsYXllckJvYXJkLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7aX0ke2p9YClbMF07XG4gICAgICAgIGxldCBib2FyZCA9IHRoaXMucGxheWVyLmJvYXJkLmJvYXJkO1xuICAgICAgICBpZiAoYm9hcmRbaV1bal0gPT0gMykge1xuICAgICAgICAgIGN1cnJlbnRDZWxsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZC1jb2xvcjogI2E4YThhOCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChib2FyZFtpXVtqXSA9PSAyKSB7XG4gICAgICAgICAgY3VycmVudENlbGwuc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kLWNvbG9yOiAjZmI2YTZhJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvYXJkW2ldW2pdID09IDEpIHtcbiAgICAgICAgICBjdXJyZW50Q2VsbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQtY29sb3I6ICM5N2ZlN2MnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdhbWVPdmVyKCkge1xuICAgIGxldCBhbm5vdW5jZVdpbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbm5vdW5jZS13aW5uZXInKTtcbiAgICB0aGlzLmNwdVBsYXllci5ib2FyZC5hbGxTaGlwc1N1bmsoKSA/IGFubm91bmNlV2lubmVyLmlubmVySFRNTCA9ICdZb3Ugd2luIScgOiBhbm5vdW5jZVdpbm5lci5pbm5lckhUTUwgPSAnWW91IGxvc2UhJ1xuICAgIGlmICghdGhpcy5jaGVhdGVyICYmIHRoaXMuY3B1UGxheWVyLmJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgICBsZXQgcmVhbFdpbm5lck1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHJlYWxXaW5uZXJNZXNzYWdlLmlubmVySFRNTCA9ICdXaXRob3V0IGNoZWF0aW5nISc7XG4gICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtY29udGFpbmVyJyk7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmVhbFdpbm5lck1lc3NhZ2UpO1xuICAgIH1cbiAgICBpZiAodGhpcy5jaGVhdGVyKSB7XG4gICAgICBsZXQgY2hlYXRlck1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNoZWF0ZXJNZXNzYWdlLmlubmVySFRNTCA9ICdidXQgdSBjaGVhdGVkJztcbiAgICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1jb250YWluZXInKTtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVhdGVyTWVzc2FnZSk7XG4gICAgfVxuICAgIGFubm91bmNlV2lubmVyLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IERpc3BsYXk7XG4iLCJjbGFzcyBCb2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IGFyciA9IG5ldyBBcnJheSgxMCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBhcnJbaV0gPSBuZXcgQXJyYXkoMTApLmZpbGwoMCk7XG4gICAgfVxuICAgIHRoaXMuYm9hcmQgPSBhcnI7XG4gICAgdGhpcy5hbGxTdW5rID0gZmFsc2U7XG4gICAgdGhpcy5zaGlwcyA9IFtdO1xuICB9XG5cbiAgLy8gMSA9IHNoaXAsIDIgPSBoaXRzaGlwLCAzID0gbWlzc1xuICBwbGFjZVNoaXAoc2hpcCkge1xuICAgIGxldCByb3cgPSBzaGlwLmhlYWRDb29yZHMucm93O1xuICAgIGxldCBjb2x1bW4gPSBzaGlwLmhlYWRDb29yZHMuY29sdW1uO1xuICAgIGlmIChzaGlwLm9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIGZvciAobGV0IGkgPSBjb2x1bW4gLSBzaGlwLmxlbmd0aCArIDE7IGkgPCBjb2x1bW4gKyAxOyBpKyspIHtcbiAgICAgICAgdGhpcy5ib2FyZFtyb3ddW2ldID0gMTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHNoaXAub3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIGZvciAobGV0IGkgPSByb3c7IGkgPCByb3cgKyBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMuYm9hcmRbaV1bY29sdW1uXSA9IDE7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2hpcHMucHVzaChzaGlwKTtcbiAgfVxuXG4gIHJlY2VpdmVBdHRhY2soY29vcmRzKSB7XG4gICAgbGV0IGNvbHVtbiA9IGNvb3Jkcy5jb2x1bW47XG4gICAgbGV0IHJvdyA9IGNvb3Jkcy5yb3c7XG4gICAgbGV0IGhpdCA9IGZhbHNlO1xuICAgIGZvciAoY29uc3Qgc2hpcCBvZiB0aGlzLnNoaXBzKSB7XG4gICAgICBpZiAoc2hpcC5oaXQoY29vcmRzKSkge1xuICAgICAgICB0aGlzLmJvYXJkW3Jvd11bY29sdW1uXSA9IDI7XG4gICAgICAgIGhpdCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghaGl0KSB7XG4gICAgICB0aGlzLmJvYXJkW3Jvd11bY29sdW1uXSA9IDM7XG4gICAgfVxuICB9XG5cbiAgYWxsU2hpcHNTdW5rKCkge1xuICAgIGxldCBudW1iZXJTdW5rID0gMDtcbiAgICBmb3IgKGNvbnN0IHNoaXAgb2YgdGhpcy5zaGlwcykge1xuICAgICAgaWYgKHNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgbnVtYmVyU3VuaysrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5zaGlwcy5sZW5ndGggPiAwICYmIG51bWJlclN1bmsgPT0gdGhpcy5zaGlwcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBCb2FyZDtcbiIsImNvbnN0IENvb3JkcyA9IChyb3csIGNvbHVtbikgPT4ge1xuICByZXR1cm4geyByb3csIGNvbHVtbiB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBDb29yZHM7XG4iLCJpbXBvcnQgQm9hcmQgZnJvbSAnLi9ib2FyZC5qcyc7XG5pbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAuanMnO1xuaW1wb3J0IENvb3JkcyBmcm9tICcuL2Nvb3Jkcy5qcyc7XG5cbmNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYm9hcmQgPSBuZXcgQm9hcmQoKTtcbiAgfVxuXG4gIGNvbXB1dGVyUGxhY2VTaGlwcygpIHtcbiAgICBmb3IgKGxldCBpID0gMjsgaSA8IDY7IGkrKykge1xuICAgICAgdGhpcy5jb21wdXRlclBsYWNlU2hpcChpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBjb21wdXRlclBsYWNlU2hpcChsZW5ndGgpIHtcbiAgICBsZXQgcG9zaXRpb25BcnIgPSB0aGlzLmdlbmVyYXRlUmFuZG9tQ29vcmQoKTtcbiAgICBsZXQgcG9zaXRpb24gPSBDb29yZHMocG9zaXRpb25BcnJbMF0sIHBvc2l0aW9uQXJyWzFdKTtcbiAgICBsZXQgb3JpZW50YXRpb24gPSB0aGlzLnJhbmRvbU9yaWVudGF0aW9uKCk7XG4gICAgbGV0IGNvbGxpZGluZyA9IHRoaXMuY2hlY2tDb2xsaWRlKGxlbmd0aCwgcG9zaXRpb24sIG9yaWVudGF0aW9uKTtcblxuICAgIC8vIEdlbmVyYXRlIG5ldyBwb3NpdGlvbiBpZiBoZWFkQ29vcmRzIGFyZSBpbnZhbGlkXG4gICAgLy8gKE9jY3VwaWVkIG9yIG92ZXJsYXBwaW5nIGxlbmd0aCBvZiBzaGlwKVxuICAgIHdoaWxlICgob3JpZW50YXRpb24gPT0gJ3ZlcnRpY2FsJyAmJiAoOSAtIHBvc2l0aW9uLnJvdykgPCBsZW5ndGgpIHx8XG4gICAgICAob3JpZW50YXRpb24gPT0gJ2hvcml6b250YWwnICYmIHBvc2l0aW9uLmNvbHVtbiA8IGxlbmd0aCkgfHxcbiAgICAgICh0aGlzLmJvYXJkLmJvYXJkW3Bvc2l0aW9uLnJvd11bcG9zaXRpb24uY29sdW1uXSA+IDApIHx8XG4gICAgICBjb2xsaWRpbmcpIHtcbiAgICAgIHBvc2l0aW9uQXJyID0gdGhpcy5nZW5lcmF0ZVJhbmRvbUNvb3JkKCk7XG4gICAgICBwb3NpdGlvbiA9IENvb3Jkcyhwb3NpdGlvbkFyclswXSwgcG9zaXRpb25BcnJbMV0pO1xuICAgICAgY29sbGlkaW5nID0gdGhpcy5jaGVja0NvbGxpZGUobGVuZ3RoLCBwb3NpdGlvbiwgb3JpZW50YXRpb24pO1xuICAgIH07XG5cbiAgICBsZXQgc2hpcCA9IG5ldyBTaGlwKGxlbmd0aCwgcG9zaXRpb24sIG9yaWVudGF0aW9uKTtcbiAgICB0aGlzLmJvYXJkLnBsYWNlU2hpcChzaGlwKTtcbiAgfVxuXG4gIGNoZWNrQ29sbGlkZShsZW5ndGgsIHBvc2l0aW9uLCBvcmllbnRhdGlvbikge1xuICAgIGxldCBib2FyZCA9IHRoaXMuYm9hcmQuYm9hcmQ7XG4gICAgaWYgKG9yaWVudGF0aW9uID09ICdob3Jpem9udGFsJykge1xuICAgICAgaWYgKHBvc2l0aW9uLmNvbHVtbiA8IGxlbmd0aCAtIDEpIHJldHVybiB0cnVlO1xuICAgICAgZm9yIChsZXQgaSA9IHBvc2l0aW9uLmNvbHVtbjsgaSA+IHBhcnNlSW50KHBvc2l0aW9uLmNvbHVtbikgLSBwYXJzZUludChsZW5ndGgpOyBpLS0pIHtcbiAgICAgICAgaWYgKGJvYXJkW3Bvc2l0aW9uLnJvd11baV0gPiAwKSByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG9yaWVudGF0aW9uID09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIGlmICgoOSAtIHBvc2l0aW9uLnJvdykgPCBsZW5ndGggLSAxKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IHBvc2l0aW9uLnJvdzsgaSA8IHBhcnNlSW50KHBvc2l0aW9uLnJvdykgKyBwYXJzZUludChsZW5ndGgpOyBpKyspIHtcbiAgICAgICAgaWYgKGJvYXJkW2ldW3Bvc2l0aW9uLmNvbHVtbl0gPiAwKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY2hlY2tPbkVkZ2Uob3JpZW50YXRpb24sIHBvc2l0aW9uLCBsZW5ndGgpIHtcbiAgICBsZXQgcm93ID0gcG9zaXRpb24ucm93O1xuICAgIGxldCBjb2x1bW4gPSBwb3NpdGlvbi5jb2x1bW47XG4gICAgaWYgKG9yaWVudGF0aW9uID09ICdob3Jpem9udGFsJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKHRoaXMuYm9hcmQuYm9hcmRbcm93XVtjb2x1bW4gKyAxXSA9PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICB0aGlzLmJvYXJkLmJvYXJkW3Jvd11bY29sdW1uIC0gbGVuZ3RoIC0gMV0gPT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgdGhpcy5ib2FyZC5ib2FyZFtyb3cgKyAxXVtjb2x1bW5dID09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgIHRoaXMuYm9hcmQuYm9hcmRbcm93IC0gMV1bY29sdW1uXSA9PSB1bmRlZmluZWQpXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGNhdGNoIChUeXBlRXJyb3IpIHsgcmV0dXJuIHRydWU7IH1cbiAgICB9XG4gICAgaWYgKG9yaWVudGF0aW9uID09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICh0aGlzLmJvYXJkLmJvYXJkW3JvdyAtIDFdW2NvbHVtbl0gPT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgdGhpcy5ib2FyZC5ib2FyZFtyb3cgKyBsZW5ndGggKyAxXVtjb2x1bW5dID09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgIHRoaXMuYm9hcmQuYm9hcmRbcm93XVtjb2x1bW4gKyAxXSA9PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICB0aGlzLmJvYXJkLmJvYXJkW3Jvd11bY29sdW1uIC0gMV0gPT0gdW5kZWZpbmVkKVxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBjYXRjaCAoVHlwZUVycm9yKSB7IHJldHVybiB0cnVlOyB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbXB1dGVyQXR0YWNrKCkge1xuICAgIGxldCBhdHRhY2tDb29yZCA9IHRoaXMuZ2VuZXJhdGVSYW5kb21Db29yZCgpO1xuICAgIGxldCBhdHRhY2tlZENvb3JkID0gdGhpcy5ib2FyZC5ib2FyZFthdHRhY2tDb29yZFswXV1bYXR0YWNrQ29vcmRbMV1dO1xuICAgIGlmIChhdHRhY2tlZENvb3JkIDwgMikge1xuICAgICAgdGhpcy5ib2FyZC5yZWNlaXZlQXR0YWNrKENvb3JkcyhhdHRhY2tDb29yZFswXSwgYXR0YWNrQ29vcmRbMV0pKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5jb21wdXRlckF0dGFjaygpO1xuICB9XG5cbiAgZ2VuZXJhdGVSYW5kb21Db29yZCgpIHtcbiAgICBsZXQgcmFuZG9tWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICBsZXQgcmFuZG9tWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICByZXR1cm4gW3JhbmRvbVgsIHJhbmRvbVldO1xuICB9XG5cbiAgcmFuZG9tT3JpZW50YXRpb24oKSB7XG4gICAgbGV0IG9yaWVudGF0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG4gICAgaWYgKG9yaWVudGF0aW9uID09IDEpIHtcbiAgICAgIHJldHVybiAnaG9yaXpvbnRhbCc7XG4gICAgfVxuICAgIHJldHVybiAndmVydGljYWwnO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcbiIsImNsYXNzIFNoaXAge1xuICBjb25zdHJ1Y3RvcihsZW5ndGgsIGhlYWRDb29yZHMsIG9yaWVudGF0aW9uKSB7XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy5oZWFkQ29vcmRzID0gaGVhZENvb3JkcztcbiAgICB0aGlzLm9yaWVudGF0aW9uID0gb3JpZW50YXRpb247XG4gICAgdGhpcy5oaXRzID0gbmV3IEFycmF5KGxlbmd0aCkuZmlsbCgwKTtcbiAgfVxuXG4gIGhpdChjb29yZHMpIHtcbiAgICBpZiAodGhpcy5vcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBpZiAoY29vcmRzLnJvdyA9PSB0aGlzLmhlYWRDb29yZHMucm93KSB7XG4gICAgICAgIGlmIChjb29yZHMuY29sdW1uIDw9IHRoaXMuaGVhZENvb3Jkcy5jb2x1bW4gJiZcbiAgICAgICAgICBjb29yZHMuY29sdW1uID49ICh0aGlzLmhlYWRDb29yZHMuY29sdW1uICsgMSAtIHRoaXMubGVuZ3RoKSkge1xuICAgICAgICAgIHRoaXMuYWRkVG9IaXRzKGNvb3Jkcyk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMub3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIGlmIChjb29yZHMuY29sdW1uID09IHRoaXMuaGVhZENvb3Jkcy5jb2x1bW4pIHtcbiAgICAgICAgaWYgKGNvb3Jkcy5yb3cgPj0gdGhpcy5oZWFkQ29vcmRzLnJvdyAmJlxuICAgICAgICAgIGNvb3Jkcy5yb3cgPD0gKHRoaXMubGVuZ3RoICsgdGhpcy5oZWFkQ29vcmRzLnJvdyAtIDEpKSB7XG4gICAgICAgICAgdGhpcy5hZGRUb0hpdHMoY29vcmRzKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBhZGRUb0hpdHMoY29vcmRzKSB7XG4gICAgaWYgKHRoaXMub3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJylcbiAgICAgIHRoaXMuaGl0c1t0aGlzLmxlbmd0aCAtICh0aGlzLmhlYWRDb29yZHMuY29sdW1uIC0gY29vcmRzLmNvbHVtbikgLSAxXSA9IDE7XG4gICAgaWYgKHRoaXMub3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpXG4gICAgICB0aGlzLmhpdHNbY29vcmRzLnJvdyAtIHRoaXMuaGVhZENvb3Jkcy5yb3ddID0gMTtcbiAgfVxuXG4gIGlzU3VuaygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLmhpdHNbaV0gPT0gMClcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIiwiaW1wb3J0ICcuLi9jc3Mvc3R5bGUuY3NzJztcbmltcG9ydCBEaXNwbGF5IGZyb20gJy4vZG9tc3R1ZmYvZGlzcGxheS5qcyc7XG5cbmxldCBkaXNwbGF5ID0gbmV3IERpc3BsYXk7XG5kaXNwbGF5LmxvYWRCb2FyZHMoKTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGVhdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBkaXNwbGF5LmNwdURpc3BsYXlTaGlwcygpO1xuICBkaXNwbGF5LmNoZWF0ZXIgPSB0cnVlO1xufSk7XG5cbmRpc3BsYXkucm90YXRlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=