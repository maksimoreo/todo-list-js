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

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./src/helper.js\");\n\n\nclass FormField {\n    constructor(inputSelector, errorSelector) {\n        this.input = document.querySelector(inputSelector);\n\n        if (!this.input) {\n            console.error(`Could not find input with ID: ${inputSelector}`);\n        }\n\n        this.error = document.querySelector(errorSelector);\n\n        if (!this.error) {\n            console.warn(`Could not find input error field with ID: ${errorSelector}`);\n        }\n\n        this.valid = true;\n\n        this.input.oninput = () => this.validate();\n        // this.input.onsubmit does not work?\n    }\n\n    set onValidate(callback) {\n        this.validationCallback = callback;\n    }\n\n    validate() {\n        if (this.validationCallback) {\n            const returnValue = this.validationCallback(this.input);\n            this.error.textContent = typeof returnValue === 'string' ? returnValue : '';\n            this.valid = !returnValue;\n        }\n    }\n}\n\nconst formMixin = {\n    setFormFields(formName, fieldIds) {\n        this.form = document.querySelector(`#${formName}-form`);\n        this.fields = {};\n\n        // Fields and Errors\n        for (const fieldId of fieldIds) {\n            const fieldFullId = `#input-${formName}-${fieldId}`;\n            const fieldErrorId = fieldFullId + '-error';\n            const propName = _helper__WEBPACK_IMPORTED_MODULE_0__.default.arrayToCamelCase(fieldId.split('-'));\n\n            this.fields[propName] = new FormField(fieldFullId, fieldErrorId);\n        }\n\n        // Submit\n        this.submitButton = document.querySelector(`#button-${formName}-submit`);\n        this.submitButton.onclick = () => {\n            this.validateFields();\n            if (this.isValid()) {\n                this.onSubmit(this.fields);\n            }\n        }\n    },\n\n    clear() {\n        for (const fieldName in this.fields) {\n            this.fields[fieldName].input.value = '';\n        }\n    },\n\n    fillObj(obj) {\n        for (const fieldName in this.fields) {\n            obj[fieldName] = this.fields[fieldName].input.value;\n        }\n    },\n\n    fillFields(obj) {\n        for (const fieldName in this.fields) {\n            this.fields[fieldName].input.value = obj[fieldName];\n        }\n    },\n\n    isValid() {\n        for (const fieldName in this.fields) {\n            if (!this.fields[fieldName].valid) {\n                return false;\n            }\n        }\n\n        return true;\n    },\n\n    validateFields() {\n        for (const fieldName in this.fields) {\n            this.fields[fieldName].validate();\n        }\n    },\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ formMixin });\n\n\n//# sourceURL=webpack://todo-list/./src/form.js?");

/***/ }),

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createElement(tagName, parent, textContent, classList) {\n    let element = document.createElement(tagName);\n\n    if (parent) {\n        parent.appendChild(element);\n    }\n\n    if (textContent) {\n        element.textContent = textContent;\n    }\n\n    if (classList) {\n        if (typeof classList === 'string') {\n            // TODO: split classList string if it contains spaces\n            element.classList.add(classList);\n        } else {\n            for (let className of classList) {\n                element.classList.add(className);\n            }\n        }\n    }\n\n    return element;\n}\n\nfunction capitalize(str) {\n    return str.charAt(0).toUpperCase() + str.slice(1);\n}\n\nfunction arrayToCamelCase(arr) {\n    return [arr[0], ...arr.slice(1).map(str => capitalize(str))].join('');\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ createElement, arrayToCamelCase });\n\n\n//# sourceURL=webpack://todo-list/./src/helper.js?");

/***/ }),

/***/ "./src/hideMixin.js":
/*!**************************!*\
  !*** ./src/hideMixin.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet hideMixin = {\n    setHideElement(element) {\n        this.show = () => {\n            if (element.classList.contains('hide')) {\n                element.classList.remove('hide');\n            }\n        };\n\n        this.hide = () => {\n            if (!element.classList.contains('hide')) {\n                element.classList.add('hide');\n            }\n        };\n\n        this.toggleHide = () => {\n            if (element.classList.contains('hide')) {\n                element.classList.remove('hide');\n            } else {\n                element.classList.add('hide');\n            }\n        };\n    },\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ hideMixin });\n\n\n//# sourceURL=webpack://todo-list/./src/hideMixin.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _projectList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectList */ \"./src/projectList.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n\n\n\n\n// test\nlet p1 = new _project__WEBPACK_IMPORTED_MODULE_0__.Project('Important', 'Put your the most important TODOs here!');\n_projectList__WEBPACK_IMPORTED_MODULE_1__.default.add(p1);\n\nlet todo1 = new _todo__WEBPACK_IMPORTED_MODULE_2__.Todo(p1, 'Go to the store', 'Buy stuff', 1, null);\np1.addTodo(todo1);\n\nlet todo2 = new _todo__WEBPACK_IMPORTED_MODULE_2__.Todo(p1, 'Prepare to the exam', 'Read a lot of books...', 2, null);\np1.addTodo(todo2);\n\nlet p2 = new _project__WEBPACK_IMPORTED_MODULE_0__.Project('My JS Project', 'A plan to become rich');\n_projectList__WEBPACK_IMPORTED_MODULE_1__.default.add(p2);\n\nlet p2todo1 = new _todo__WEBPACK_IMPORTED_MODULE_2__.Todo(p2, 'Create idea for an app', '... or make a clone of something', 1, null);\np2.addTodo(p2todo1);\n\nlet p2todo2 = new _todo__WEBPACK_IMPORTED_MODULE_2__.Todo(p2, 'Code an app', 'Make sure you know JS!', 2, null);\np2.addTodo(p2todo2);\n\nlet p2todo3 = new _todo__WEBPACK_IMPORTED_MODULE_2__.Todo(p2, 'Deploy it', 'Let millions of people know about your app', 2, null);\np2.addTodo(p2todo3);\n\nlet p2todo4 = new _todo__WEBPACK_IMPORTED_MODULE_2__.Todo(p2, 'PROFIT', 'Get money', 2, null);\np2.addTodo(p2todo4);\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _projectUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectUI */ \"./src/projectUI.js\");\n\n\nclass Project {\n    constructor(title, description) {\n        this.title = title;\n        this.description = description;\n        this.todoList = [];\n        this.ui = new _projectUI__WEBPACK_IMPORTED_MODULE_0__.ProjectUI(this);\n    }\n\n    addTodo(todo) {\n        this.todoList.push(todo);\n        this.ui.addTodoUI(todo.ui);\n    }\n\n    removeTodo(todo) {\n        const index = this.todoList.indexOf(todo);\n\n        if (index != -1) {\n            this.todoList.splice(index, 1);\n            this.ui.removeTodoUI(todo.ui);\n        } else {\n            console.error(`Cannot find this TODO: ${todo} inside this project: ${this}`);\n        }\n    }\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/project.js?");

/***/ }),

/***/ "./src/projectForm.js":
/*!****************************!*\
  !*** ./src/projectForm.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _hideMixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hideMixin */ \"./src/hideMixin.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _projectList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectList */ \"./src/projectList.js\");\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form */ \"./src/form.js\");\n\n\n\n\n\nfunction validateTitle(input) {\n    // TODO: Must be unique\n\n    if (input.value.length < 2) {\n        return 'Too short';\n    } else if (input.value.length >= 100) {\n        return 'Too long (maybe put explanation in the description?)';\n    }\n}\n\nconst projectForm = {\n    _init() {\n        this.hide();\n\n        this.fields.title.onValidate = validateTitle;\n    },\n\n    openForNewProject() {\n        this.show();\n        this.clear();\n        this.submitButton.textContent = 'Create New Project';\n        this.currentProject = null;\n    },\n\n    openForEdit(project) {\n        this.show();\n        this.fillFields(project);\n        this.submitButton.textContent = 'Update Project';\n        this.currentProject = project;\n    },\n\n    onSubmit() {\n        if (this.currentProject) {\n            this.fillObj(this.currentProject);\n            this.currentProject.ui.updateValues();\n            // TODO: Show notification about successful proejct update\n        } else {\n            const project = new _project__WEBPACK_IMPORTED_MODULE_1__.Project();\n            this.fillObj(project);\n            project.ui.updateValues();\n            _projectList__WEBPACK_IMPORTED_MODULE_2__.default.add(project);\n            // TODO: Show notification about successful project create\n        }\n\n        this.hide();\n    }\n}\n\nObject.assign(projectForm, _hideMixin__WEBPACK_IMPORTED_MODULE_0__.default.hideMixin, _form__WEBPACK_IMPORTED_MODULE_3__.default.formMixin);\nprojectForm.setFormFields('project', ['title', 'description']);\nprojectForm.setHideElement(projectForm.form);\nprojectForm._init();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectForm);\n\n\n//# sourceURL=webpack://todo-list/./src/projectForm.js?");

/***/ }),

/***/ "./src/projectList.js":
/*!****************************!*\
  !*** ./src/projectList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _projectListUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectListUI */ \"./src/projectListUI.js\");\n\n\nlet projects = [];\n\nfunction add(project) {\n    projects.push(project);\n    _projectListUI__WEBPACK_IMPORTED_MODULE_0__.default.addProjectUI(project.ui);\n}\n\nfunction remove(project) {\n    const index = projects.indexOf(project);\n\n    if (index != -1) {\n        projects.splice(index, 1);\n        _projectListUI__WEBPACK_IMPORTED_MODULE_0__.default.removeProjectUI(project.ui);\n    } else {\n        console.error(`Cannot find this project: ${project} inside this project list: ${projects}`);\n    }\n}\n\nfunction findProjectByTitle(title) {\n    for (let project of projects) {\n        if (project.title === title) {\n            return project;\n        }\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ add, remove, findProjectByTitle });\n\n\n//# sourceURL=webpack://todo-list/./src/projectList.js?");

/***/ }),

/***/ "./src/projectListUI.js":
/*!******************************!*\
  !*** ./src/projectListUI.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _projectForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectForm */ \"./src/projectForm.js\");\n\n\nlet projectList = document.querySelector('#project-list');\n\nlet newProjectButton = document.querySelector('#button-new-project');\nnewProjectButton.onclick = () => {\n    _projectForm__WEBPACK_IMPORTED_MODULE_0__.default.openForNewProject();\n}\n\nfunction addProjectUI(projectUI) {\n    projectList.appendChild(projectUI.getDomElement());\n}\n\nfunction removeProjectUI(projectUI) {\n    projectList.removeChild(projectUI.getDomElement());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ addProjectUI, removeProjectUI });\n\n\n//# sourceURL=webpack://todo-list/./src/projectListUI.js?");

/***/ }),

/***/ "./src/projectUI.js":
/*!**************************!*\
  !*** ./src/projectUI.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProjectUI\": () => (/* binding */ ProjectUI)\n/* harmony export */ });\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./src/helper.js\");\n/* harmony import */ var _projectForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectForm */ \"./src/projectForm.js\");\n/* harmony import */ var _projectList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectList */ \"./src/projectList.js\");\n/* harmony import */ var _todoForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todoForm */ \"./src/todoForm.js\");\n/* harmony import */ var _hideMixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hideMixin */ \"./src/hideMixin.js\");\n\n\n\n\n\n\nclass ProjectUI {\n    constructor(project) {\n        this.project = project;\n        this.render();\n        this.setupEvents();\n        this.updateValues(project);\n        this.setHideElement(this.todoList);\n    }\n\n    render() {\n        this.projectContainer = _helper__WEBPACK_IMPORTED_MODULE_0__.default.createElement('li', null, null, 'project');\n\n        this.flex = _helper__WEBPACK_IMPORTED_MODULE_0__.default.createElement('div', this.projectContainer, null, 'flex');\n        this.title = _helper__WEBPACK_IMPORTED_MODULE_0__.default.createElement('h2', this.flex, null, 'project-title');\n\n        let buttonGrid = _helper__WEBPACK_IMPORTED_MODULE_0__.default.createElement('div', this.flex, null, 'button-grid');\n        this.addTodoButton = _helper__WEBPACK_IMPORTED_MODULE_0__.default.createElement('button', buttonGrid, null, 'button-project-add-todo');\n        _helper__WEBPACK_IMPORTED_MODULE_0__.default.createElement('i', this.addTodoButton, null, ['fas', 'fa-plus']);\n        this.editButton = _helper__WEBPACK_IMPORTED_MODULE_0__.default.createElement('button', buttonGrid, null, 'button-project-edit');\n        _helper__WEBPACK_IMPORTED_MODULE_0__.default.createElement('i', this.editButton, null, ['fas', 'fa-pen']);\n        this.expandButton = _helper__WEBPACK_IMPORTED_MODULE_0__.default.createElement('button', buttonGrid, null, 'button-project-expand');\n        _helper__WEBPACK_IMPORTED_MODULE_0__.default.createElement('i', this.expandButton, null, ['fas', 'fa-caret-down']);\n        this.deleteButton = _helper__WEBPACK_IMPORTED_MODULE_0__.default.createElement('button', buttonGrid, null, 'button-project-delete');\n        _helper__WEBPACK_IMPORTED_MODULE_0__.default.createElement('i', this.deleteButton, null, ['fas', 'fa-times']);\n\n        this.description = _helper__WEBPACK_IMPORTED_MODULE_0__.default.createElement('p', this.projectContainer, null, 'project-description');\n        this.todoList = _helper__WEBPACK_IMPORTED_MODULE_0__.default.createElement('ul', this.projectContainer, null, 'todo-list');\n    }\n\n    setupEvents() {\n        this.addTodoButton.onclick = () => _todoForm__WEBPACK_IMPORTED_MODULE_3__.default.openForNewTodo(this.project);\n        this.editButton.onclick = () => _projectForm__WEBPACK_IMPORTED_MODULE_1__.default.openForEdit(this.project);\n        this.deleteButton.onclick = () => _projectList__WEBPACK_IMPORTED_MODULE_2__.default.remove(this.project);\n        this.expandButton.onclick = () => this.toggleHide();\n    }\n\n    updateValues() {\n        this.title.textContent = this.project.title;\n        this.description.textContent = this.project.description;\n    }\n\n    getDomElement() {\n        return this.projectContainer;\n    }\n\n    addTodoUI(todoUI) {\n        this.todoList.appendChild(todoUI.getDomElement());\n    }\n\n    removeTodoUI(todoUI) {\n        this.todoList.removeChild(todoUI.getDomElement());\n    }\n}\n\nObject.assign(ProjectUI.prototype, _hideMixin__WEBPACK_IMPORTED_MODULE_4__.default.hideMixin);\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/projectUI.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Todo\": () => (/* binding */ Todo)\n/* harmony export */ });\n/* harmony import */ var _todoUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoUI */ \"./src/todoUI.js\");\n\n\nclass Todo {\n    constructor(project, title, description, priority, date) {\n        this.project = project;\n        this.title = title;\n        this.description = description;\n        this.priority = priority;\n        this.date = date;\n        this.status = 'in progress';\n        this.ui = new _todoUI__WEBPACK_IMPORTED_MODULE_0__.TodoUI(this);\n    }\n\n    get_status() {\n        return this.status;\n    }\n\n    complete() {\n        this.status = 'done';\n    }\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/todo.js?");

/***/ }),

/***/ "./src/todoForm.js":
/*!*************************!*\
  !*** ./src/todoForm.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _hideMixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hideMixin */ \"./src/hideMixin.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form */ \"./src/form.js\");\n/* harmony import */ var _projectList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectList */ \"./src/projectList.js\");\n\n\n\n\n\nfunction validateProject(input) {\n    if (!_projectList__WEBPACK_IMPORTED_MODULE_3__.default.findProjectByTitle(input.value)) {\n        return \"This project doesn't exist!\";\n    }\n}\n\nfunction validateTitle(input) {\n    // TODO: Must be unique\n\n    if (input.value === '') {\n        return 'Cannot be emtpy';\n    } else if (input.value.length < 2) {\n        return 'Too short';\n    } else if (input.value.length >= 100) {\n        return 'Too long (maybe put explanation in the description?)';\n    }\n}\n\nfunction validateDescription(input) {\n    // Can be empty\n}\n\nfunction validatePriority(input) {\n\n}\n\nfunction validateDate(input) {\n\n}\n\nconst todoForm = {\n    _init() {\n        this.hide();\n\n        this.fields.project.onValidate = validateProject;\n        this.fields.title.onValidate = validateTitle;\n        this.fields.description.onValidate = validateDescription;\n        this.fields.priority.onValidate = validatePriority;\n        this.fields.date.onValidate = validateDate;\n    },\n\n    openForNewTodo(project) {\n        this.show();\n        this.clear();\n        // this.currentProject = project;\n        this.fields.project.input.value = project.title;\n        this.submitButton.textContent = 'Create New TODO';\n        this.currentTodo = null;\n    },\n\n    openForEdit(todo) {\n        this.show();\n        this.fillFields(todo);\n        this.submitButton.textContent = 'Update TODO';\n        this.currentTodo = todo;\n    },\n\n    onSubmit() {\n        if (this.currentTodo) {\n            this.fillObj(currentTodo);\n            this.currentTodo.ui.updateValues();\n            // TODO: Show notification about successful TODO update\n        } else {\n            let todo = new _todo__WEBPACK_IMPORTED_MODULE_1__.Todo();\n            this.fillObj(todo);\n            todo.ui.updateValues();\n            const project = _projectList__WEBPACK_IMPORTED_MODULE_3__.default.findProjectByTitle(this.fields.project.input.value);\n            project.addTodo(todo);\n            // TODO: Show notification about successful TODO create\n        }\n\n        this.hide();\n    }\n};\n\nObject.assign(todoForm, _hideMixin__WEBPACK_IMPORTED_MODULE_0__.default.hideMixin, _form__WEBPACK_IMPORTED_MODULE_2__.default.formMixin);\ntodoForm.setFormFields('todo', ['project', 'title', 'description', 'priority', 'date']);\ntodoForm.setHideElement(todoForm.form);\ntodoForm._init();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoForm);\n\n\n//# sourceURL=webpack://todo-list/./src/todoForm.js?");

/***/ }),

/***/ "./src/todoUI.js":
/*!***********************!*\
  !*** ./src/todoUI.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TodoUI\": () => (/* binding */ TodoUI)\n/* harmony export */ });\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./src/helper.js\");\n/* harmony import */ var _todoForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoForm */ \"./src/todoForm.js\");\n/* harmony import */ var _hideMixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hideMixin */ \"./src/hideMixin.js\");\n\n\n\n\nclass TodoUI {\n    constructor(todo) {\n        this.todo = todo;\n        this.render();\n        this.setupEvents();\n        this.updateValues();\n        this.setHideElement(this.description);\n    }\n\n    render() {\n        this.todoContainer = _helper__WEBPACK_IMPORTED_MODULE_0__.default.createElement('li', null, null, 'todo');\n\n        this.flex = _helper__WEBPACK_IMPORTED_MODULE_0__.default.createElement('div', this.todoContainer, null, 'flex');\n        this.title = _helper__WEBPACK_IMPORTED_MODULE_0__.default.createElement('h3', this.flex, null, 'todo-title');\n\n        this.buttonGrid = _helper__WEBPACK_IMPORTED_MODULE_0__.default.createElement('div', this.flex, null, 'button-grid');\n        this.completeButton = _helper__WEBPACK_IMPORTED_MODULE_0__.default.createElement('button', this.buttonGrid, null, 'button-todo-complete');\n        _helper__WEBPACK_IMPORTED_MODULE_0__.default.createElement('i', this.completeButton, null, ['fas', 'fa-check']);\n        this.editButton = _helper__WEBPACK_IMPORTED_MODULE_0__.default.createElement('button', this.buttonGrid, null, 'button-todo-Edit');\n        _helper__WEBPACK_IMPORTED_MODULE_0__.default.createElement('i', this.editButton, null, ['fas', 'fa-pen']);\n        this.expandButton = _helper__WEBPACK_IMPORTED_MODULE_0__.default.createElement('button', this.buttonGrid, null, 'button-todo-expand');\n        _helper__WEBPACK_IMPORTED_MODULE_0__.default.createElement('i', this.expandButton, null, ['fas', 'fa-caret-down']);\n        this.deleteButton = _helper__WEBPACK_IMPORTED_MODULE_0__.default.createElement('button', this.buttonGrid, null, 'button-todo-delete');\n        _helper__WEBPACK_IMPORTED_MODULE_0__.default.createElement('i', this.deleteButton, null, ['fas', 'fa-times']);\n\n        let todoInfoP = _helper__WEBPACK_IMPORTED_MODULE_0__.default.createElement('p', this.todoContainer, null, null);\n        this.date = _helper__WEBPACK_IMPORTED_MODULE_0__.default.createElement('span', todoInfoP, null, 'todo-date');\n        _helper__WEBPACK_IMPORTED_MODULE_0__.default.createElement('span', todoInfoP, ', priority: ', null);\n        this.priority = _helper__WEBPACK_IMPORTED_MODULE_0__.default.createElement('span', todoInfoP, null, 'todo-priority');\n        _helper__WEBPACK_IMPORTED_MODULE_0__.default.createElement('span', todoInfoP, ', status: ', null);\n        this.status = _helper__WEBPACK_IMPORTED_MODULE_0__.default.createElement('span', todoInfoP, null, 'todo-status');\n\n        this.description = _helper__WEBPACK_IMPORTED_MODULE_0__.default.createElement('p', this.todoContainer, null, 'todo-description');\n    }\n\n    setupEvents() {\n        this.editButton.onclick = () => _todoForm__WEBPACK_IMPORTED_MODULE_1__.default.openForEdit(this.todo);\n        this.expandButton.onclick = () => this.toggleHide();\n        this.deleteButton.onclick = () => this.todo.project.removeTodo(this.todo);\n    }\n\n    updateValues() {\n        this.title.textContent = this.todo.title;\n        this.description.textContent = this.todo.description;\n        this.date.textContent = this.todo.date;\n        this.priority.textContent = this.todo.priority;\n        this.status.textContent = this.todo.status;\n        // TODO: update complete button text content\n    }\n\n    getDomElement() {\n        return this.todoContainer;\n    }\n}\n\nObject.assign(TodoUI.prototype, _hideMixin__WEBPACK_IMPORTED_MODULE_2__.default.hideMixin);\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/todoUI.js?");

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