let projectList = document.querySelector('#project-list');

function addProjectUI(projectUI) {
    projectList.appendChild(projectUI.getDomElement());
}

function removeProjectUI(projectUI) {
    projectList.removeChild(projectUI.getDomElement());
}

export default { addProjectUI, removeProjectUI };
