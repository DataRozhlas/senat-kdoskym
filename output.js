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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/byeie.js":
/*!*********************!*\
  !*** ./js/byeie.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("if (navigator.appName === \"Microsoft Internet Explorer\" || !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/))) {\n  var warn = document.createElement(\"div\");\n  warn.innerHTML = \"Používáte zastaralý Internet Explorer, takže vám části tohoto webu nemusí fungovat. Navíc to <a target=\\\"_blank\\\" style=\\\"color:white;\\\" rel=\\\"noopener noreferrer\\\" href=\\\"https://www.zive.cz/clanky/microsoft-internet-explorer-neni-prohlizec-prestante-ho-tak-pouzivat/sc-3-a-197149/default.aspx\\\">není bezpečné</a>, zvažte přechod na <a target=\\\"_blank\\\" style=\\\"color:white;\\\" rel=\\\"noopener noreferrer\\\" href=\\\"https://www.mozilla.org/cs/firefox/new/\\\">jiný prohlížeč</a>.\";\n  warn.style.cssText = \"text-align:center;position:absolute;width:100%;height:auto;opacity:1;z-index:100;background-color:#d52834;top:37px;padding-top:4px;padding-bottom:3px;color:white;\";\n  document.body.appendChild(warn);\n}\n\n//# sourceURL=webpack:///./js/byeie.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _byeie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./byeie */ \"./js/byeie.js\");\n/* harmony import */ var _byeie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_byeie__WEBPACK_IMPORTED_MODULE_0__);\n // loučíme se s IE\n\nvar host = 'https://data.irozhlas.cz';\n\nif (window.location.hostname === 'localhost') {\n  host = 'http://localhost';\n}\n\nvar square = 6;\nvar config = {\n  width: 81 * square,\n  height: 51 * square,\n  //pocet odfiltrovanych tooltipu\n  title: 30,\n  grid: {\n    width: square,\n    height: square\n  },\n  diff: 1,\n  // 1 STAN, 2 ODS, 3 KDU-ČSL + nez., 4 ČSSD, 5 ANO, 6 Senátor 21, 7 nezařazení\n  colors: ['#FFFFFF', '#A8CB4A', '#009BD5', '#FFDA05', '#F29400', '#272660', '#CB2D42', '#A0A0A0']\n};\n\nfunction getPosition(dataIndex) {\n  if (!dataIndex) {\n    return {\n      x: 5,\n      y: config.title + 5\n    };\n  }\n\n  var nthColumn = dataIndex % (config.width / config.grid.width),\n      nthRow = Math.floor(dataIndex / (config.height / config.grid.height / (config.height / config.width)));\n  var columnWidth = config.grid.width,\n      rowHeight = config.grid.height;\n  return {\n    x: columnWidth * nthColumn + 5,\n    y: rowHeight * nthRow + config.title + 5\n  };\n}\n\nfunction renderSVG(data, tooltip, box, divId, odsunx, odsuny) {\n  var svg = d3.select(divId).append('svg').attr({\n    width: config.width + 5,\n    height: config.height + config.title + 5\n  });\n  svg.selectAll('rect').data(data).enter().append('rect').attr({\n    width: config.grid.width - 1,\n    height: config.grid.height - 1,\n    x: function x(d, i) {\n      return getPosition(i).x;\n    },\n    y: function y(d, i) {\n      return getPosition(i).y;\n    },\n    fill: function fill(d) {\n      return config.colors[d];\n    }\n  });\n  var row = svg.selectAll('row').data(tooltip).enter().append('rect').attr({\n    width: 81 * square + 2,\n    height: 10,\n    x: 3,\n    y: function y(d, i) {\n      return config.grid.height * i + config.title + 3;\n    },\n    fill: '#fff'\n  }).style('fill-opacity', 0).style('opacity', 0).style('stroke', 'black').style('stroke-width', 1);\n\n  if (document.getElementById(\"koberec1\").offsetWidth >= 1000) {\n    // mobil bez tooltipu, sry :/\n    var div = d3.select(divId).append('div').attr('class', 'tooltip').style('opacity', 0);\n    row.on('mouseover', function (d) {\n      div.transition().duration(200).style('opacity', .9).style('z-index', 300);\n      var vysledek;\n\n      if (d.vysledek == 'Přijato') {\n        vysledek = '<div class=\"ttcajk\">Schváleno</div>';\n      } else if (d.vysledek == 'Zamítnuto') {\n        vysledek = '<div class=\"ttnecajk\">Zamítnuto</div>';\n      } else {\n        vysledek = '<div class=\"ttborcus\">Zmatečné</div>';\n      }\n\n      var nazev;\n\n      if (d.nazev.length < 150) {\n        nazev = '<div class=\"ttheader\">' + d.nazev + '</div>';\n      } else {\n        nazev = '<div class=\"ttheader\">' + d.nazev.substring(0, 150).split(' ').slice(0, -1).join(' ') + '…</div>';\n      }\n\n      div.html(nazev + vysledek + '<div class=\"ttvotes\">' + d.kvorum + ' hlasů ke schválení</div>' + '<div class=\"ttvotes\">' + d.pro + ' pro — ' + d.proti + ' proti — ' + d.zdrzeli + ' se zdrželo — ' + d.absence + ' nepřítomných</div>');\n      div.style('left', Math.abs(d3.mouse(this)[0]) - odsunx + 20 + 'px').style('top', Math.abs(d3.mouse(this)[1]) - odsuny + 30 + 'px');\n      d3.select(this).style('fill-opacity', 0.5).style('opacity', 1).transition().duration(200);\n    });\n    row.on('mouseout', function (d) {\n      div.transition().duration(500).style('opacity', 0);\n      d3.select(this).style('opacity', 0);\n    });\n  }\n\n  svg.append(\"text\").attr(\"x\", config.width / 3).attr(\"y\", 20).attr(\"text-anchor\", \"middle\").attr(\"class\", \"title\").text(box);\n}\n\nfetch(host + \"/senat-kdoskym/grafy/vyb_koalice.csv\").then(function (response) {\n  return response.text();\n}).then(function (textkoal) {\n  fetch(host + \"/senat-kdoskym/grafy/vyb_opozice.csv\").then(function (response) {\n    return response.text();\n  }).then(function (textopoz) {\n    fetch(host + \"/senat-kdoskym/grafy/vyb_tooltipy.csv\").then(function (response) {\n      return response.text();\n    }).then(function (tooltipy) {\n      var datakoal = JSON.parse(\"[\" + textkoal + \"]\");\n      var dataopoz = JSON.parse(\"[\" + textopoz + \"]\");\n      var tooltipy = tooltipy.split('\\n');\n      var datatt = [];\n      var headers = tooltipy[0].split('|');\n\n      for (var i = 1; i < tooltipy.length; i++) {\n        var datatemp = tooltipy[i].split('|');\n        var objtemp = {};\n\n        for (var j = 0; j < datatemp.length; j++) {\n          objtemp[headers[j].trim()] = datatemp[j].trim();\n        }\n\n        datatt.push(objtemp);\n      }\n\n      renderSVG(datakoal, datatt, 'VÍTĚZOVÉ HLASOVÁNÍ', '#koberec1', 0, 0);\n      renderSVG(dataopoz, datatt, 'PORAŽENÍ', '#koberec1', -230, 0);\n    });\n  });\n});\n\n//# sourceURL=webpack:///./js/script.js?");

/***/ })

/******/ });