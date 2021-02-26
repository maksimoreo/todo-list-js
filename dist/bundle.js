/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _projectsController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectsController */ \"./src/projectsController.js\");\n\n\n_projectsController__WEBPACK_IMPORTED_MODULE_0__.default.init();\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _projectUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectUI */ \"./src/projectUI.js\");\n\n\nclass Project {\n    constructor(title, description) {\n        this.title = title;\n        this.description = description;\n        this.todoList = [];\n        this.ui = new _projectUI__WEBPACK_IMPORTED_MODULE_0__.ProjectUI(this);\n    }\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/project.js?");

/***/ }),

/***/ "./src/projectForm.js":
/*!****************************!*\
  !*** ./src/projectForm.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\n\nlet inputTitle;\nlet inputDescription;\nlet buttonProjectCreate;\nlet buttonProjectCreateCallback;\n\nfunction init() {\n    inputTitle = document.querySelector('#input-project-title');\n    inputDescription = document.querySelector('#input-project-description');\n    buttonProjectCreate = document.querySelector('#button-project-create');\n\n    buttonProjectCreate.onclick = () => {\n        if (buttonProjectCreateCallback) {\n            buttonProjectCreateCallback();\n        }\n    }\n}\n\nfunction clear() {\n    inputTitle.value = '';\n    inputDescription.value = '';\n}\n\nfunction onSubmit(callback) {\n    buttonProjectCreateCallback = callback;\n}\n\nfunction constructProjectFromInput() {\n    return new _project__WEBPACK_IMPORTED_MODULE_0__.Project(inputTitle.value, inputDescription.value);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ init, clear, onSubmit, constructProjectFromInput });\n\n\n//# sourceURL=webpack://todo-list/./src/projectForm.js?");

/***/ }),

/***/ "./src/projectList.js":
/*!****************************!*\
  !*** ./src/projectList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _projectListUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectListUI */ \"./src/projectListUI.js\");\n\n\nlet projects = [];\n\nfunction add(project) {\n    projects.push(project);\n    _projectListUI__WEBPACK_IMPORTED_MODULE_0__.default.addProjectUI(project.ui);\n}\n\nfunction remove(project) {\n    const index = projects.indexOf(project);\n\n    if (index != -1) {\n        projects.splice(index, 1);\n        _projectListUI__WEBPACK_IMPORTED_MODULE_0__.default.removeProjectUI(project.ui);\n    } else {\n        console.error(`Cannot find this project: ${project} inside this project list: ${projects}`);\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ add, remove });\n\n\n//# sourceURL=webpack://todo-list/./src/projectList.js?");

/***/ }),

/***/ "./src/projectListUI.js":
/*!******************************!*\
  !*** ./src/projectListUI.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet projectList = document.querySelector('#project-list');\n\nfunction addProjectUI(projectUI) {\n    projectList.appendChild(projectUI.getDomElement());\n}\n\nfunction removeProjectUI(projectUI) {\n    projectList.removeChild(projectUI.getDomElement());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ addProjectUI, removeProjectUI });\n\n\n//# sourceURL=webpack://todo-list/./src/projectListUI.js?");

/***/ }),

/***/ "./src/projectUI.js":
/*!**************************!*\
  !*** ./src/projectUI.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProjectUI\": () => (/* binding */ ProjectUI)\n/* harmony export */ });\nclass ProjectUI {\n    constructor(project) {\n        this.project = project;\n        this.render();\n        this.setupEvents();\n        this.updateValues(project);\n    }\n\n    render() {\n        this.projectContainer = document.createElement('li');\n        this.projectContainer.classList.add('project');\n\n        this.title = document.createElement('h2');\n        this.title.classList.add('project-title');\n        this.projectContainer.appendChild(this.title);\n\n        this.addTodoButton = document.createElement('button');\n        this.addTodoButton.classList.add('button-project-add-todo');\n        this.addTodoButton.textContent = 'Add TODO...';\n        this.projectContainer.appendChild(this.addTodoButton);\n\n        this.deleteButton = document.createElement('button');\n        this.deleteButton.classList.add('button-project-delete');\n        this.deleteButton.textContent = 'Delete project';\n        this.projectContainer.appendChild(this.deleteButton);\n\n        this.expandButton = document.createElement('button');\n        this.expandButton.classList.add('button-project-expand');\n        this.expandButton.textContent = 'Expand / Hide';\n        this.projectContainer.appendChild(this.expandButton);\n\n        this.description = document.createElement('p');\n        this.description.classList.add('project-description');\n        this.projectContainer.appendChild(this.description);\n\n        this.todoList = document.createElement('ul');\n        this.todoList.classList.add('todo-list');\n        this.projectContainer.appendChild(this.todoList);\n    }\n\n    setupEvents() {\n        this.expandButton.onclick = () => this.toggleExpandTodoList(); // arrow function, doesn't capture 'this'\n    }\n\n    updateValues() {\n        this.title.textContent = this.project.title;\n        this.description.textContent = this.project.description;\n    }\n\n    getDomElement() {\n        return this.projectContainer;\n    }\n\n    onDeleteButtonPressed(callback) {\n        this.deleteButton.onclick = callback;\n    }\n\n    onAddTodoButtonPressed(callback) {\n        this.addTodoButton.onclick = callback;\n    }\n\n    toggleExpandTodoList() {\n        if (this.todoList.classList.contains('hide')) {\n            this.todoList.classList.remove('hide');\n        } else {\n            this.todoList.classList.add('hide');\n        }\n    }\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/projectUI.js?");

/***/ }),

/***/ "./src/projectsController.js":
/*!***********************************!*\
  !*** ./src/projectsController.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _projectForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectForm */ \"./src/projectForm.js\");\n/* harmony import */ var _projectList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectList */ \"./src/projectList.js\");\n\n\n\nfunction init() {\n    _projectForm__WEBPACK_IMPORTED_MODULE_0__.default.init();\n\n    _projectForm__WEBPACK_IMPORTED_MODULE_0__.default.onSubmit(() => {\n        let project = _projectForm__WEBPACK_IMPORTED_MODULE_0__.default.constructProjectFromInput();\n        _projectList__WEBPACK_IMPORTED_MODULE_1__.default.add(project);\n\n        project.ui.onDeleteButtonPressed(() => {\n            _projectList__WEBPACK_IMPORTED_MODULE_1__.default.remove(project);\n        });\n\n        project.ui.onAddTodoButtonPressed(() => {\n            console.log('not implemented yet :>');\n        });\n\n        _projectForm__WEBPACK_IMPORTED_MODULE_0__.default.clear();\n    });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ init });\n\n\n//# sourceURL=webpack://todo-list/./src/projectsController.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;