import hideMixin from './hideMixin';
import { Todo } from './todo';
import form from './form';
import projectList from './projectList';

function validateProject(input) {
    if (!projectList.findProjectByTitle(input.value)) {
        return "This project doesn't exist!";
    }
}

function validateTitle(input) {
    // TODO: Must be unique

    if (input.value === '') {
        return 'Cannot be emtpy';
    } else if (input.value.length < 2) {
        return 'Too short';
    } else if (input.value.length >= 100) {
        return 'Too long (maybe put explanation in the description?)';
    }
}

function validateDescription(input) {
    // Can be empty
}

function validatePriority(input) {

}

function validateDate(input) {

}

const todoForm = {
    _init() {
        this.hide();

        this.fields.project.onValidate = validateProject;
        this.fields.title.onValidate = validateTitle;
        this.fields.description.onValidate = validateDescription;
        this.fields.priority.onValidate = validatePriority;
        this.fields.date.onValidate = validateDate;
    },

    openForNewTodo(project) {
        this.show();
        this.clear();
        // this.currentProject = project;
        this.fields.project.input.value = project.title;
        this.submitButton.textContent = 'Create New TODO';
        this.currentTodo = null;
    },

    openForEdit(todo) {
        this.show();
        this.fillFields(todo);
        this.submitButton.textContent = 'Update TODO';
        this.currentTodo = todo;
    },

    onSubmit() {
        if (this.currentTodo) {
            this.fillObj(currentTodo);
            this.currentTodo.ui.updateValues();
            // TODO: Show notification about successful TODO update
        } else {
            let todo = new Todo();
            this.fillObj(todo);
            todo.ui.updateValues();
            const project = projectList.findProjectByTitle(this.fields.project.input.value);
            project.addTodo(todo);
            // TODO: Show notification about successful TODO create
        }

        this.hide();
    }
};

Object.assign(todoForm, hideMixin.hideMixin, form.formMixin);
todoForm.setFormFields('todo', ['project', 'title', 'description', 'priority', 'date']);
todoForm.setHideElement(todoForm.form);
todoForm._init();

export default todoForm;
