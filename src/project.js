import { ProjectUI } from './projectUI';

class Project {
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.todoList = [];
        this.ui = new ProjectUI(this);
    }

    addTodo(todo) {
        this.todoList.push(todo);
        this.ui.addTodoUI(todo.ui);
    }

    removeTodo(todo) {
        const index = this.todoList.indexOf(todo);

        if (index != -1) {
            this.todoList.splice(index, 1);
            this.ui.removeTodoUI(todo.ui);
        } else {
            console.error(`Cannot find this TODO: ${todo} inside this project: ${this}`);
        }
    }
}

export { Project };
