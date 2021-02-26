import { Project } from './project';

let inputTitle;
let inputDescription;
let buttonProjectCreate;
let buttonProjectCreateCallback;

function init() {
    inputTitle = document.querySelector('#input-project-title');
    inputDescription = document.querySelector('#input-project-description');
    buttonProjectCreate = document.querySelector('#button-project-create');

    buttonProjectCreate.onclick = () => {
        if (buttonProjectCreateCallback) {
            buttonProjectCreateCallback();
        }
    }
}

function clear() {
    inputTitle.value = '';
    inputDescription.value = '';
}

function onSubmit(callback) {
    buttonProjectCreateCallback = callback;
}

function constructProjectFromInput() {
    return new Project(inputTitle.value, inputDescription.value);
}

export default { init, clear, onSubmit, constructProjectFromInput }
