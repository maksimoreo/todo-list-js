import helper from "./helper";
import projectForm from "./projectForm";
import projectList from "./projectList";
import todoForm from "./todoForm";
import hideMixin from './hideMixin';

class ProjectUI {
    constructor(project) {
        this.project = project;
        this.render();
        this.setupEvents();
        this.updateValues(project);
        this.setHideElement(this.todoList);
    }

    render() {
        this.projectContainer = helper.createElement('li', null, null, 'project');

        this.flex = helper.createElement('div', this.projectContainer, null, 'flex');
        this.title = helper.createElement('h2', this.flex, null, 'project-title');

        let buttonGrid = helper.createElement('div', this.flex, null, 'button-grid');
        this.addTodoButton = helper.createElement('button', buttonGrid, null, 'button-project-add-todo');
        helper.createElement('i', this.addTodoButton, null, ['fas', 'fa-plus']);
        this.editButton = helper.createElement('button', buttonGrid, null, 'button-project-edit');
        helper.createElement('i', this.editButton, null, ['fas', 'fa-pen']);
        this.expandButton = helper.createElement('button', buttonGrid, null, 'button-project-expand');
        helper.createElement('i', this.expandButton, null, ['fas', 'fa-caret-down']);
        this.deleteButton = helper.createElement('button', buttonGrid, null, 'button-project-delete');
        helper.createElement('i', this.deleteButton, null, ['fas', 'fa-times']);

        this.description = helper.createElement('p', this.projectContainer, null, 'project-description');
        this.todoList = helper.createElement('ul', this.projectContainer, null, 'todo-list');
    }

    setupEvents() {
        this.addTodoButton.onclick = () => todoForm.openForNewTodo(this.project);
        this.editButton.onclick = () => projectForm.openForEdit(this.project);
        this.deleteButton.onclick = () => projectList.remove(this.project);
        this.expandButton.onclick = () => this.toggleHide();
    }

    updateValues() {
        this.title.textContent = this.project.title;
        this.description.textContent = this.project.description;
    }

    getDomElement() {
        return this.projectContainer;
    }

    addTodoUI(todoUI) {
        this.todoList.appendChild(todoUI.getDomElement());
    }

    removeTodoUI(todoUI) {
        this.todoList.removeChild(todoUI.getDomElement());
    }
}

Object.assign(ProjectUI.prototype, hideMixin.hideMixin);

export { ProjectUI };
