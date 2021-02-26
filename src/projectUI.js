class ProjectUI {
    constructor(project) {
        this.project = project;
        this.render();
        this.setupEvents();
        this.updateValues(project);
    }

    render() {
        this.projectContainer = document.createElement('li');
        this.projectContainer.classList.add('project');

        this.title = document.createElement('h2');
        this.title.classList.add('project-title');
        this.projectContainer.appendChild(this.title);

        this.addTodoButton = document.createElement('button');
        this.addTodoButton.classList.add('button-project-add-todo');
        this.addTodoButton.textContent = 'Add TODO...';
        this.projectContainer.appendChild(this.addTodoButton);

        this.deleteButton = document.createElement('button');
        this.deleteButton.classList.add('button-project-delete');
        this.deleteButton.textContent = 'Delete project';
        this.projectContainer.appendChild(this.deleteButton);

        this.expandButton = document.createElement('button');
        this.expandButton.classList.add('button-project-expand');
        this.expandButton.textContent = 'Expand / Hide';
        this.projectContainer.appendChild(this.expandButton);

        this.description = document.createElement('p');
        this.description.classList.add('project-description');
        this.projectContainer.appendChild(this.description);

        this.todoList = document.createElement('ul');
        this.todoList.classList.add('todo-list');
        this.projectContainer.appendChild(this.todoList);
    }

    setupEvents() {
        this.expandButton.onclick = () => this.toggleExpandTodoList(); // arrow function, doesn't capture 'this'
    }

    updateValues() {
        this.title.textContent = this.project.title;
        this.description.textContent = this.project.description;
    }

    getDomElement() {
        return this.projectContainer;
    }

    onDeleteButtonPressed(callback) {
        this.deleteButton.onclick = callback;
    }

    onAddTodoButtonPressed(callback) {
        this.addTodoButton.onclick = callback;
    }

    toggleExpandTodoList() {
        if (this.todoList.classList.contains('hide')) {
            this.todoList.classList.remove('hide');
        } else {
            this.todoList.classList.add('hide');
        }
    }
}

export { ProjectUI };
