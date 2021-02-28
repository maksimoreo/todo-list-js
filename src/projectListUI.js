import projectForm from "./projectForm";

let projectList = document.querySelector('#project-list');

let newProjectButton = document.querySelector('#button-new-project');
newProjectButton.onclick = () => {
    projectForm.openForNewProject();
}

function addProjectUI(projectUI) {
    projectList.appendChild(projectUI.getDomElement());
}

function removeProjectUI(projectUI) {
    projectList.removeChild(projectUI.getDomElement());
}

export default { addProjectUI, removeProjectUI };
