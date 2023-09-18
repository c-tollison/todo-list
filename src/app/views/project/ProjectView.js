export default class ProjectView {
    constructor() {
        this.projectForm = document.getElementById("projectForm");
        this.projectFormInput = document.getElementById("projectFormInput");
        this.addProjectButton = document.getElementById("addProjectButton");

        document.addEventListener("click", (e) => {
            if (
                !this.projectForm.contains(e.target) &&
                !this.addProjectButton.contains(e.target)
            ) {
                this.projectForm.classList.add("hidden");
                this.addProjectButton.classList.remove("hidden");
                this.projectForm.reset();
            }
        });
    }

    openProjectInput() {
        this.addProjectButton.classList.add("hidden");
        this.projectForm.classList.remove("hidden");
        this.projectFormInput.focus();
    }

    addProjectsToSideBar(projectName) {
        let projectLink = document.createElement("p");
        projectLink.innerText = projectName;
        projectLink.classList.add("text-sm");
        document.getElementById("projectContainer").appendChild(projectLink);
    }

    resetForm() {
        this.projectForm.reset();
        this.projectForm.classList.add("hidden");
        this.addProjectButton.classList.remove("hidden");
        document.getElementById("projectValidator").classList.add("hidden");
    }

    showSidebarValidatorError() {
        document.getElementById("projectValidator").classList.remove("hidden");
    }
}
