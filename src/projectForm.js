import hideMixin from './hideMixin';
import { Project } from './project';
import projectList from './projectList';
import form from './form';

function validateTitle(input) {
    if (input.value.length < 2) {
        return 'Too short';
    } else if (input.value.length >= 100) {
        return 'Too long (maybe put explanation in the description?)';
    }
}

const projectForm = {
    _init() {
        this.hide();

        this.fields.title.onValidate = validateTitle;
    },

    openForNewProject() {
        this.show();
        this.clear();
        this.submitButton.textContent = 'Create New Project';
        this.currentProject = null;
    },

    openForEdit(project) {
        this.show();
        this.fillFields(project);
        this.submitButton.textContent = 'Update Project';
        this.currentProject = project;
    },

    onSubmit() {
        if (this.currentProject) {
            this.fillObj(this.currentProject);
            this.currentProject.ui.updateValues();
            // TODO: Show notification about successful proejct update
        } else {
            const project = new Project();
            this.fillObj(project);
            project.ui.updateValues();
            projectList.add(project);
            // TODO: Show notification about successful project create
        }

        this.hide();
    }
}

Object.assign(projectForm, hideMixin.hideMixin, form.formMixin);
projectForm.setFormFields('project', ['title', 'description']);
projectForm.setHideElement(projectForm.form);
projectForm._init();

export default projectForm;
