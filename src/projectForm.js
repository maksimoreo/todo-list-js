import hideMixin from './hideMixin';
import { Project } from './project';
import projectList from './projectList';

let projectForm;
let inputTitle;
let inputDescription;
let buttonProjectSubmit;

let currentProject;

function init() {
    projectForm = document.querySelector('#project-form');
    inputTitle = document.querySelector('#input-project-title');
    inputDescription = document.querySelector('#input-project-description');
    buttonProjectSubmit = document.querySelector('#button-project-submit');

    buttonProjectSubmit.onclick = onSubmit;

    module.setHideElement(projectForm);
    module.hide();
}

function clear() {
    inputTitle.value = '';
    inputDescription.value = '';
}

function fill(project) {
    inputTitle.value = project.title;
    inputDescription.value = project.description;
}

function openForNewProject() {
    module.show();
    clear();
    buttonProjectSubmit.textContent = 'Create New Project';
    currentProject = null;
}

function openForEdit(project) {
    module.show();
    fill(project);
    buttonProjectSubmit.textContent = 'Update Project';
    currentProject = project;
}

function fillProjectFromInput(project) {
    project.title = inputTitle.value;
    project.description = inputDescription.value;
}

function onSubmit() {
    if (currentProject) {
        fillProjectFromInput(currentProject);
        currentProject.ui.updateValues();
        // TODO: Show notification about successful proejct update
    } else {
        let project = new Project();
        fillProjectFromInput(project);
        project.ui.updateValues();
        projectList.add(project);
        // TODO: Show notification about successful project create
    }

    module.hide();
}

let module = Object.assign(
    { init, fillProjectFromInput, openForNewProject, openForEdit },
    hideMixin.hideMixin
);
init();

export default module;
