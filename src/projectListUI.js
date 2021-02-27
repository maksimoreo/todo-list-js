let projectList = document.querySelector('#project-list');

let newProjectButton = document.querySelector('#button-new-project');

function addProjectUI(projectUI) {
    projectList.appendChild(projectUI.getDomElement());
}

function removeProjectUI(projectUI) {
    projectList.removeChild(projectUI.getDomElement());
}

function onNewProject(callback) {
    newProjectButton.onclick = callback;
}

export default { addProjectUI, removeProjectUI, onNewProject };
