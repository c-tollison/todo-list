import Task from "../models/Task";

export default class TaskController {
    constructor(user, screen, taskModalView, taskView) {
        this.user = user;
        this.screen = screen;
        this.taskView = taskView;
        this.taskModalView = taskModalView;

        this.taskModalView.openModalButton.addEventListener("click", () => {
            this.taskModalView.openModal();
        });

        this.taskModalView.taskModalWrapper.addEventListener("click", () => {
            this.taskModalView.closeModal();
        });

        this.taskModalView.taskForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const formValues = this.taskModalView.getFormData();
            const newTask = new Task(formValues);
            this.user.projects[formValues.project].tasks.push(newTask);

            if (
                this.screen.getScreen() === "inbox" ||
                this.screen.getScreen() ===
                    this.user.projects[newTask.project].name
            ) {
                this.taskView.renderTask(newTask);
            }
            this.taskModalView.closeModal();
        });

        this.taskModalView.modalCloseButton.addEventListener("click", (e) => {
            e.preventDefault();
            this.taskModalView.closeModal();
        });

        this.taskModalView.updateProjectDropdown(user.projects[0].name, 0);
    }
}