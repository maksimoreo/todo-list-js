import ProjectListUI from './projectListUI';

let projects = [];

function add(project) {
    projects.push(project);
    ProjectListUI.addProjectUI(project.ui);
}

function remove(project) {
    const index = projects.indexOf(project);

    if (index != -1) {
        projects.splice(index, 1);
        ProjectListUI.removeProjectUI(project.ui);
    } else {
        console.error(`Cannot find this project: ${project} inside this project list: ${projects}`);
    }
}

function findProjectByTitle(title) {
    for (let project of projects) {
        if (project.title === title) {
            return project;
        }
    }
}

export default { add, remove, findProjectByTitle };
