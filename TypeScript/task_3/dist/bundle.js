/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/crud.js":
/*!********************!*\
  !*** ./js/crud.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteRow: () => (/* binding */ deleteRow),
/* harmony export */   insertRow: () => (/* binding */ insertRow),
/* harmony export */   updateRow: () => (/* binding */ updateRow)
/* harmony export */ });
// crud.js
function insertRow(row) {
  console.log('Insert row', row);
  return Math.floor(Math.random() * Math.floor(1000));
}

function deleteRow(rowId) {
  console.log('Delete row id', rowId);
  return;
}

function updateRow(rowId, row) {
  console.log(`Update row ${rowId}`, row);
  return rowId;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _crud__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crud */ "./js/crud.js");
/// <reference path="./crud.d.ts" />

var row = {
    firstName: 'Guillaume',
    lastName: 'Salva'
};
var newRowID = _crud__WEBPACK_IMPORTED_MODULE_0__.insertRow(row);
console.log("Inserted row ID: ".concat(newRowID));
var updatedRow = {
    firstName: 'Guillaume',
    lastName: 'Salva',
    age: 23
};
_crud__WEBPACK_IMPORTED_MODULE_0__.updateRow(newRowID, updatedRow);
console.log("Updated row ID: ".concat(newRowID));
_crud__WEBPACK_IMPORTED_MODULE_0__.deleteRow(newRowID);
console.log("Deleted row ID: ".concat(newRowID));

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1AsNEJBQTRCLE1BQU07QUFDbEM7QUFDQTs7Ozs7OztVQ2RBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7O0FDTkEsb0NBQW9DO0FBR0w7QUFFL0IsSUFBTSxHQUFHLEdBQWU7SUFDdEIsU0FBUyxFQUFFLFdBQVc7SUFDdEIsUUFBUSxFQUFFLE9BQU87Q0FDbEIsQ0FBQztBQUVGLElBQU0sUUFBUSxHQUFVLDRDQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBb0IsUUFBUSxDQUFFLENBQUMsQ0FBQztBQUU1QyxJQUFNLFVBQVUsR0FBZTtJQUM3QixTQUFTLEVBQUUsV0FBVztJQUN0QixRQUFRLEVBQUUsT0FBTztJQUNqQixHQUFHLEVBQUUsRUFBRTtDQUNSLENBQUM7QUFFRiw0Q0FBYyxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUFtQixRQUFRLENBQUUsQ0FBQyxDQUFDO0FBRTNDLDRDQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBbUIsUUFBUSxDQUFFLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvY3J1ZC5qcyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjcnVkLmpzXG5leHBvcnQgZnVuY3Rpb24gaW5zZXJ0Um93KHJvdykge1xuICBjb25zb2xlLmxvZygnSW5zZXJ0IHJvdycsIHJvdyk7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKDEwMDApKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVJvdyhyb3dJZCkge1xuICBjb25zb2xlLmxvZygnRGVsZXRlIHJvdyBpZCcsIHJvd0lkKTtcbiAgcmV0dXJuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUm93KHJvd0lkLCByb3cpIHtcbiAgY29uc29sZS5sb2coYFVwZGF0ZSByb3cgJHtyb3dJZH1gLCByb3cpO1xuICByZXR1cm4gcm93SWQ7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL2NydWQuZC50c1wiIC8+XG5cbmltcG9ydCB7IFJvd0lELCBSb3dFbGVtZW50IH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0ICogYXMgQ1JVRCBmcm9tICcuL2NydWQnO1xuXG5jb25zdCByb3c6IFJvd0VsZW1lbnQgPSB7XG4gIGZpcnN0TmFtZTogJ0d1aWxsYXVtZScsXG4gIGxhc3ROYW1lOiAnU2FsdmEnXG59O1xuXG5jb25zdCBuZXdSb3dJRDogUm93SUQgPSBDUlVELmluc2VydFJvdyhyb3cpO1xuY29uc29sZS5sb2coYEluc2VydGVkIHJvdyBJRDogJHtuZXdSb3dJRH1gKTtcblxuY29uc3QgdXBkYXRlZFJvdzogUm93RWxlbWVudCA9IHtcbiAgZmlyc3ROYW1lOiAnR3VpbGxhdW1lJyxcbiAgbGFzdE5hbWU6ICdTYWx2YScsXG4gIGFnZTogMjNcbn07XG5cbkNSVUQudXBkYXRlUm93KG5ld1Jvd0lELCB1cGRhdGVkUm93KTtcbmNvbnNvbGUubG9nKGBVcGRhdGVkIHJvdyBJRDogJHtuZXdSb3dJRH1gKTtcblxuQ1JVRC5kZWxldGVSb3cobmV3Um93SUQpO1xuY29uc29sZS5sb2coYERlbGV0ZWQgcm93IElEOiAke25ld1Jvd0lEfWApO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9