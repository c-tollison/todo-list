import "../styles/style.css";

import Project from "./Project";
import Task from "./Task";

function addProjectsToSideBar(projectName) {
    let projectContainer = document.getElementById("projectContainer");
    let projectLink = document.createElement("p");
    projectLink.innerText = projectName;
    projectLink.classList.add("text-sm");
    projectContainer.appendChild(projectLink);
}

let taskContainer = document.getElementById("taskContainer");
let taskModal = document.getElementById("taskModal");
taskModal.addEventListener("click", () => {
    taskModal.classList.add("hidden");
    taskForm.reset();
});

let taskForm = document.getElementById("taskForm");
taskForm.addEventListener("keypress", (e) => {
    if (e.code === "Enter") {
        e.preventDefault();
    }
});

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

let projectForm = document.getElementById("projectForm");
let projectFormInput = document.getElementById("projectFormInput");
let addProjectButton = document.getElementById("addProjectButton");

projectForm.addEventListener("keypress", (e) => {
    if (e.code === "Enter") {
        e.preventDefault();
        createProject();
    }
});

projectForm.addEventListener("submit", (e) => {
    e.preventDefault();
    createProject();
});

function createProject() {
    if (projectFormInput.value === "") {
        document.getElementById("projectValidator").classList.remove("hidden");
        return;
    }

    let project = new Project(projectFormInput.value);
    addProjectsToSideBar(project.name);
    projectForm.reset();
    projectForm.classList.add("hidden");
    addProjectButton.classList.remove("hidden");
    document.getElementById("projectValidator").classList.add("hidden");
}
addProjectButton.addEventListener("click", () => {
    addProjectButton.classList.add("hidden");
    projectForm.classList.remove("hidden");
    projectFormInput.focus();
});

const formValues = {
    name: "exampleTitle",
    description: "example Description",
    dueDate: "09/14/2000",
    priority: 2,
};

let newTask = new Task(formValues);
newTask.renderTask(taskContainer);

document.addEventListener("click", (e) => {
    if (
        !projectForm.contains(e.target) &&
        !addProjectButton.contains(e.target)
    ) {
        projectForm.classList.add("hidden");
        addProjectButton.classList.remove("hidden");
        projectForm.reset();
    }
});
