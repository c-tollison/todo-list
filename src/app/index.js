import "../styles/style.css";

import Task from "./Task";

let taskContainer = document.getElementById("taskContainer");
let taskModal = document.getElementById("taskModal");
taskModal.addEventListener("click", () => {
    taskModal.classList.add("hidden");
    taskForm.reset();
});

let taskForm = document.getElementById("taskForm");
taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
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

let modalCloseButton = document.getElementById("modalCloseButton");
modalCloseButton.addEventListener("click", (e) => {
    e.preventDefault();
    taskModal.classList.add("hidden");
    taskForm.reset();
});

let addTaskButton = document.getElementById("addTaskButton");
addTaskButton.addEventListener("click", () => {
    taskModal.classList.remove("hidden");
});

let sideBar = document.getElementById("sideBar");
let toggleSideBar = document.getElementById("toggleSideBar");
toggleSideBar.addEventListener("click", () => {
    sideBar.classList.toggle("-left-44");
    sideBar.classList.toggle("left-0");
});

const formValues = {
    name: "exampleTitle",
    description: "example Description",
    dueDate: "09/14/2000",
    priority: 2,
};

let newTask = new Task(formValues);
newTask.renderTask(taskContainer);
