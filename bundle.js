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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("﻿document.getElementById(\"btnCallPromise\").addEventListener('click',function(){\n    // promiseExample().then(function(result){alert(result);});\n    promiseExample().then(alert);\n});\nfunction promiseExample()\n{\n     return new Promise(\n        function(resolve,reject){\n        setTimeout(function(){ resolve(Math.floor(Math.random() * Math.floor(10))); }, 3000);  \n      });\n\n}\n\nfunction makeAllCaps(myWords)\n{\n    return new Promise((resolve,reject)=>{\n        myWords.forEach(element => {\n    if(typeof elemnt===\"string\")\n           reject(new Error(\"the array should contain only letters\"));\n        });\n\n         resolve(myWords);\n    });\n       \n}\nfunction sortWords(myWords)\n{\n    return new Promise((resolve)=>{\n        myWords.forEach(element => {\n            if(typeof elemnt===\"string\")\n                   reject(new Error(\"the array should contain only letters\"));\n                });\n        myWords.sort();\n         resolve(myWords);\n    });\n \n}\nconst myWords=[\"tz111ippy\",\"estherrivka\"];\nmakeAllCaps(myWords).then((data)=>{\n    sortWords(data).then(\n        console.log).catch(console.log);\n}).catch(console.log);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLDhDQUE4QyxlQUFlO0FBQzdEO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHFEQUFxRCxFQUFFLFE7QUFDckYsT0FBTzs7QUFFUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiIuL3NyYy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIu+7v2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuQ2FsbFByb21pc2VcIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG4gICAgLy8gcHJvbWlzZUV4YW1wbGUoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCl7YWxlcnQocmVzdWx0KTt9KTtcbiAgICBwcm9taXNlRXhhbXBsZSgpLnRoZW4oYWxlcnQpO1xufSk7XG5mdW5jdGlvbiBwcm9taXNlRXhhbXBsZSgpXG57XG4gICAgIHJldHVybiBuZXcgUHJvbWlzZShcbiAgICAgICAgZnVuY3Rpb24ocmVzb2x2ZSxyZWplY3Qpe1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7IHJlc29sdmUoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcigxMCkpKTsgfSwgMzAwMCk7ICBcbiAgICAgIH0pO1xuXG59XG5cbmZ1bmN0aW9uIG1ha2VBbGxDYXBzKG15V29yZHMpXG57XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntcbiAgICAgICAgbXlXb3Jkcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgIGlmKHR5cGVvZiBlbGVtbnQ9PT1cInN0cmluZ1wiKVxuICAgICAgICAgICByZWplY3QobmV3IEVycm9yKFwidGhlIGFycmF5IHNob3VsZCBjb250YWluIG9ubHkgbGV0dGVyc1wiKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICByZXNvbHZlKG15V29yZHMpO1xuICAgIH0pO1xuICAgICAgIFxufVxuZnVuY3Rpb24gc29ydFdvcmRzKG15V29yZHMpXG57XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xuICAgICAgICBteVdvcmRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBpZih0eXBlb2YgZWxlbW50PT09XCJzdHJpbmdcIilcbiAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKFwidGhlIGFycmF5IHNob3VsZCBjb250YWluIG9ubHkgbGV0dGVyc1wiKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIG15V29yZHMuc29ydCgpO1xuICAgICAgICAgcmVzb2x2ZShteVdvcmRzKTtcbiAgICB9KTtcbiBcbn1cbmNvbnN0IG15V29yZHM9W1widHoxMTFpcHB5XCIsXCJlc3RoZXJyaXZrYVwiXTtcbm1ha2VBbGxDYXBzKG15V29yZHMpLnRoZW4oKGRhdGEpPT57XG4gICAgc29ydFdvcmRzKGRhdGEpLnRoZW4oXG4gICAgICAgIGNvbnNvbGUubG9nKS5jYXRjaChjb25zb2xlLmxvZyk7XG59KS5jYXRjaChjb25zb2xlLmxvZyk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ });