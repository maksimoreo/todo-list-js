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
        this.title = helper.createElement('h2', this.projectContainer, null, 'project-title');
        this.addTodoButton = helper.createElement('button', this.projectContainer, 'Add TODO...', 'button-project-add-todo');
        this.editButton = helper.createElement('button', this.projectContainer, 'Edit', 'button-project-edit');
        this.deleteButton = helper.createElement('button', this.projectContainer, 'Delete', 'button-project-delete');
        this.expandButton = helper.createElement('button', this.projectContainer, 'Expand / Hide', 'button-project-expand');
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
