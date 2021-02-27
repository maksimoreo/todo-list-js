let projectForm;
let inputTitle;
let inputDescription;
let buttonProjectSubmit;

let currentProject;
let onNewProjectCallback;
let onUpdateProjectCallback;

function init() {
    projectForm = document.querySelector('#project-form');
    inputTitle = document.querySelector('#input-project-title');
    inputDescription = document.querySelector('#input-project-description');
    buttonProjectSubmit = document.querySelector('#button-project-submit');

    buttonProjectSubmit.onclick = () => {
        // TODO: Check if project title already taken

        if (currentProject) {
            onUpdateProjectCallback(currentProject);
        } else {
            onNewProjectCallback();
        }
    }
}

function show() {
    projectForm.classList.remove('hide');
}

function hide() {
    projectForm.classList.add('hide');
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
    show();
    clear();
    buttonProjectSubmit.textContent = 'Create New Project'
    currentProject = null;
}

function openForEdit(project) {
    show();
    fill(project);
    buttonProjectSubmit.textContent = 'Update Project'
    currentProject = project;
}

function onNewProject(callback) {
    onNewProjectCallback = callback;
}

function onUpdateProject(callback) {
    onUpdateProjectCallback = callback;
}

function fillProjectFromInput(project) {
    project.title = inputTitle.value;
    project.description = inputDescription.value;
}

export default { init, onNewProject, onUpdateProject, fillProjectFromInput, openForNewProject, openForEdit, show, hide }
