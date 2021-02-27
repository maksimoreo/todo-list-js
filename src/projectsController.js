import { Project } from './project';
import ProjectForm from './projectForm';
import ProjectList from './projectList';
import projectListUI from './projectListUI';

function init() {
    ProjectForm.init();
    ProjectForm.hide();

    ProjectForm.onNewProject(() => {
        let project = new Project();
        initProject(project);
        project.ui.updateValues();
        ProjectList.add(project);
        ProjectForm.hide();
        // TODO: Show notification about successful create
    });

    ProjectForm.onUpdateProject((project) => {
        ProjectForm.fillProjectFromInput(project);
        project.ui.updateValues();
        ProjectForm.hide();
        // TODO: Show notification about successful update
    });

    projectListUI.onNewProject(() => {
        ProjectForm.openForNewProject();
    });
}

function initProject(project) {
    ProjectForm.fillProjectFromInput(project);

    project.ui.onEditButtonPressed(() => {
        ProjectForm.openForEdit(project);
    });

    project.ui.onDeleteButtonPressed(() => {
        ProjectList.remove(project);
    });

    project.ui.onAddTodoButtonPressed(() => {
        console.log('not implemented yet :>');
    });
}

export default { init };
