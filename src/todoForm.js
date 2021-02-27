import { Todo } from "./todo";

let todoForm;
let inputProject;
let inputTitle;
let inputDescription;
let inputPriority;
let inputDate;
let buttonTodoSubmit;

let currentProject;
let currentTodo;

function init() {
    todoForm = document.querySelector('#todo-form');
    inputProject = document.querySelector('#input-todo-project');
    inputTitle = document.querySelector('#input-todo-title');
    inputDescription = document.querySelector('#input-todo-description');
    inputPriority = document.querySelector('#input-todo-priority');
    inputDate = document.querySelector('#input-todo-date');
    buttonTodoSubmit = document.querySelector('#button-todo-submit');

    buttonTodoSubmit.onclick = onSubmit;

    hide();
}

function show() {
    todoForm.classList.remove('hide');
}

function hide() {
    todoForm.classList.add('hide');
}

function clear() {
    inputProject.value = '';
    inputTitle.value = '';
    inputDescription.value = '';
    inputPriority.value = '';
    inputDate.value = '';
}

function fill(todo) {
    inputProject.value = todo.project.title;
    inputTitle.value = todo.title;
    inputDescription.value = todo.description;
    inputPriority.value = todo.priority;
    inputDate.value = todo.date;
}

function openForNewTodo(project) {
    show();
    clear();
    currentProject = project;
    inputProject.value = project.title;
    buttonTodoSubmit.textContent = 'Create New TODO'
    currentTodo = null;
}

function openForEdit(todo) {
    show();
    fill(todo);
    buttonTodoSubmit.textContent = 'Update TODO'
    currentTodo = todo;
}

function fillTodoFromInput(todo) {
    todo.project = currentProject;
    todo.title = inputTitle.value;
    todo.description = inputDescription.value;
    todo.priority = inputPriority.value;
    todo.date = inputDate.value;
}

function onSubmit() {
    if (currentTodo) {
        fillTodoFromInput(currentTodo);
        currentTodo.ui.updateValues();
        // TODO: Show notification about successful TODO update
    } else {
        let todo = new Todo();
        fillTodoFromInput(todo);
        todo.ui.updateValues();
        currentProject.addTodo(todo);
        // TODO: Show notification about successful TODO create
    }

    hide();
}

export default { init, fillTodoFromInput, openForNewTodo, openForEdit, show, hide }
