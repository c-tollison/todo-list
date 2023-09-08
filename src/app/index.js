import "../styles/style.css";

import Task from "./Task";

let taskContainer = document.getElementById("taskContainer");
let taskModal = document.getElementById("taskModal");

let taskForm = document.getElementById("taskForm");
taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    taskModal.classList.add("hidden");
    const formValues = {
        name: document.getElementById("taskName").value,
        description: document.getElementById("taskDescription").value,
        dueDate: document.getElementById("taskDueDate").value,
        priority: document.getElementById("taskPriority").value,
    };

    let newTask = new Task(formValues);
    newTask.renderTask(taskContainer);
    taskForm.reset();
});

let addTaskButton = document.getElementById("addTaskButton");
addTaskButton.addEventListener("click", () => {
    taskModal.classList.remove("hidden");
});
