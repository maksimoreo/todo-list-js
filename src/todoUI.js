import helper from './helper';
import todoForm from './todoForm';
import hideMixin from './hideMixin';

class TodoUI {
    constructor(todo) {
        this.todo = todo;
        this.render();
        this.setupEvents();
        this.updateValues();
        this.setHideElement(this.description);
    }

    render() {
        this.todoContainer = helper.createElement('li', null, null, 'todo');

        this.flex = helper.createElement('div', this.todoContainer, null, 'flex');
        this.title = helper.createElement('h3', this.flex, null, 'todo-title');

        this.buttonGrid = helper.createElement('div', this.flex, null, 'button-grid');
        this.completeButton = helper.createElement('button', this.buttonGrid, null, 'button-todo-complete');
        helper.createElement('i', this.completeButton, null, ['fas', 'fa-check']);
        this.editButton = helper.createElement('button', this.buttonGrid, null, 'button-todo-Edit');
        helper.createElement('i', this.editButton, null, ['fas', 'fa-pen']);
        this.expandButton = helper.createElement('button', this.buttonGrid, null, 'button-todo-expand');
        helper.createElement('i', this.expandButton, null, ['fas', 'fa-caret-down']);
        this.deleteButton = helper.createElement('button', this.buttonGrid, null, 'button-todo-delete');
        helper.createElement('i', this.deleteButton, null, ['fas', 'fa-times']);

        let todoInfoP = helper.createElement('p', this.todoContainer, null, null);
        this.date = helper.createElement('span', todoInfoP, null, 'todo-date');
        helper.createElement('span', todoInfoP, ', priority: ', null);
        this.priority = helper.createElement('span', todoInfoP, null, 'todo-priority');
        helper.createElement('span', todoInfoP, ', status: ', null);
        this.status = helper.createElement('span', todoInfoP, null, 'todo-status');

        this.description = helper.createElement('p', this.todoContainer, null, 'todo-description');
    }

    setupEvents() {
        this.editButton.onclick = () => todoForm.openForEdit(this.todo);
        this.expandButton.onclick = () => this.toggleHide();
        this.deleteButton.onclick = () => this.todo.project.removeTodo(this.todo);
    }

    updateValues() {
        this.title.textContent = this.todo.title;
        this.description.textContent = this.todo.description;
        this.date.textContent = this.todo.date;
        this.priority.textContent = this.todo.priority;
        this.status.textContent = this.todo.status;
        // TODO: update complete button text content
    }

    getDomElement() {
        return this.todoContainer;
    }
}

Object.assign(TodoUI.prototype, hideMixin.hideMixin);

export { TodoUI };
