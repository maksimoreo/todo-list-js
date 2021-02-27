import { Project } from './project';
import projectForm from './projectForm';
import projectList from './projectList';
import projectListUI from './projectListUI';

function init() {
    projectForm.init();
    projectForm.hide();

    projectForm.onNewProject(() => {
        let project = new Project();
        projectForm.fillProjectFromInput(project);
        project.ui.updateValues();
        projectList.add(project);
        projectForm.hide();
        // TODO: Show notification about successful create
    });

    projectForm.onUpdateProject((project) => {
        projectForm.fillProjectFromInput(project);
        project.ui.updateValues();
        projectForm.hide();
        // TODO: Show notification about successful update
    });

    projectListUI.onNewProject(() => {
        projectForm.openForNewProject();
    });
}

export default { init };
