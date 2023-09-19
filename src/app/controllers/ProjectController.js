import Project from "../models/Project";
import ProjectView from "../views/project/ProjectView";

export default class ProjectController {
    constructor(user, screen, taskModalView, taskView) {
        this.user = user;
        this.screen = screen;
        this.taskModalView = taskModalView;
        this.taskView = taskView;
        this.projectView = new ProjectView();

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
                this.showProjects(e);
                this.taskModalView.unhideOpenModalButton();
            });
            this.projectView.resetForm();
        }
    }

    showProjects(e) {
        const index = e.target.attributes.value.value;
        let project = this.user.projects[index];
        if (
            this.user.projects.length > 0 &&
            this.screen.getScreen() != project.name
        ) {
            this.clearContainer();
            this.screen.setScreen(project.name);

            for (let i = 0; i < project.tasks.length; i++) {
                this.taskView.renderTask(project.tasks[i]);
            }
        }
    }

    clearContainer() {
        const element = document.getElementById("taskContainer");

        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }
}
