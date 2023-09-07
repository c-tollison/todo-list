import "../styles/style.css";

import Task from "./Task";

let taskContainer = document.getElementById("task-container");

let addTaskButton = document.getElementById("add-task-button");
addTaskButton.addEventListener("click", () => {
    let newTask = new Task("hello", "world", "today", 1);
    newTask.renderTask(taskContainer);
});
