import { ProjectUI } from './projectUI';

class Project {
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.todoList = [];
        this.ui = new ProjectUI(this);
    }
}

export { Project };
