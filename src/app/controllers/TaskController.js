import Task from "../models/Task";
import TaskModalView from "../views/task/TaskModalView";
import TaskView from "../views/task/TaskView";

export default class TaskController {
    constructor() {
        this.taskView = new TaskView();
        this.taskModalView = new TaskModalView();

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
            this.taskView.renderTask(newTask);
            this.taskModalView.closeModal();
        });

        this.taskModalView.modalCloseButton.addEventListener("click", (e) => {
            e.preventDefault();
            this.taskModalView.closeModal();
        });
    }
}
