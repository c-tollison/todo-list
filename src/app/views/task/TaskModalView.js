export default class TaskModalView {
    constructor() {
        this.openModalButton = document.getElementById("openTaskModalButton");
        this.taskModalWrapper = document.getElementById("taskModal");
        this.taskForm = document.getElementById("taskForm");
        this.modalCloseButton = document.getElementById("modalCloseButton");

        this.taskForm.addEventListener("keypress", (e) => {
            if (e.code === "Enter") {
                e.preventDefault();
            }
        });
    }

    openModal() {
        this.taskModalWrapper.classList.remove("hidden");
    }

    closeModal() {
        this.taskModalWrapper.classList.add("hidden");
        this.taskForm.reset();
    }

    getFormData() {
        return {
            name: document.getElementById("taskName").value,
            description: document.getElementById("taskDescription").value,
            dueDate: document.getElementById("taskDueDate").value,
            priority: document.getElementById("taskPriority").value,
        };
    }
}
