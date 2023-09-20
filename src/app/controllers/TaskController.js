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
                this.screen.getScreen() === newTask.project
            ) {
                this.taskView.renderTask(
                    newTask,
                    this.user.finishTask,
                    this.user.projects[newTask.project].tasks.length - 1,
                );
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
