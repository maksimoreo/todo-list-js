import ProjectForm from './projectForm';
import ProjectList from './projectList';

function init() {
    ProjectForm.init();

    ProjectForm.onSubmit(() => {
        let project = ProjectForm.constructProjectFromInput();
        ProjectList.add(project);

        project.ui.onDeleteButtonPressed(() => {
            ProjectList.remove(project);
        });

        project.ui.onAddTodoButtonPressed(() => {
            console.log('not implemented yet :>');
        });

        ProjectForm.clear();
    });
}

export default { init };
