import { TodoUI } from "./todoUI";

class Todo {
    constructor(project, title, description, priority, date) {
        this.project = project;
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.date = date;
        this.status = 'in progress';
        this.ui = new TodoUI(this);
    }

    get_status() {
        return this.status;
    }

    complete() {
        this.status = 'done';
    }
}

export { Todo };
