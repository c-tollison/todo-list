import "../styles/style.css";

import Task from "./Task";

let taskContainer = document.getElementById("task-container");
let taskModal = document.getElementById("taskModal");

let addTaskButton = document.getElementById("add-task-button");
addTaskButton.addEventListener("click", () => {
    taskModal.classList.remove("hidden");
    // let newTask = new Task("hello", "world", "today", 1);
    //newTask.renderTask(taskContainer);
});
