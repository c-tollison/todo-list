import Project from "../models/Project";
import ProjectView from "../views/project/ProjectView";

export default class ProjectController {
    constructor(user, taskModalView, taskView, projectView) {
        this.user = user;
        this.taskModalView = taskModalView;
        this.taskView = taskView;
        this.projectView = projectView;

        this.projectView.projectForm.addEventListener("keypress", (e) => {
            if (e.code === "Enter") {
                this.submitForm(e);
            }
        });

        this.projectView.projectForm.addEventListener("submit", (e) => {
            this.submitForm(e);
        });

        this.projectView.addProjectButton.addEventListener("click", () => {
            this.projectView.openProjectInput();
        });
    }

    createProject() {
        let project = new Project(this.projectView.projectFormInput.value);
        this.user.projects.push(project);
        this.taskModalView.updateProjectDropdown(
            project.name,
            this.user.projects.length - 1,
        );
        return project.name;
    }

    submitForm(e) {
        e.preventDefault();

        if (this.projectView.projectFormInput.value === "") {
            this.projectView.showSidebarValidatorError();
        } else {
            const projectName = this.createProject();
            let projectButton = this.projectView.addProjectsToSideBar(
                projectName,
                this.user.projects.length - 1,
            );
            projectButton.addEventListener("click", (e) => {
                this.taskView.clearTasks();
                const index = e.target.attributes.value.value;
                this.user.screen.currentScreen = index;
                this.taskView.loadTasks(index);
                this.taskModalView.unhideOpenModalButton();
            });
            this.projectView.resetForm();
        }
    }
}
