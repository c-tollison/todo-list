import { isFuture, isToday, parseISO } from "date-fns";

export default class TaskView {
    constructor(user) {
        this.user = user;
    }

    renderTask = (task, index, editTask) => {
        let taskElement = document.createElement("div");
        taskElement.classList.add(
            ...[
                "container",
                "px-2",
                "py-4",
                "w-80",
                "h-30",
                "rounded",
                "shadow",
                "flex",
                "bg-[#242629]",
                "justify-between",
                "hover:border-gray-700",
            ],
        );

        let leftSide = document.createElement("div");
        leftSide.classList.add(...["flex", "justify-center", "items-center"]);
        let checkButton = document.createElement("button");
        checkButton.classList.add(
            ...[
                "w-4",
                "h-4",
                "border",
                "border-[#7f5af0]",
                "rounded-full",
                "hover:border-[#94a1b2]",
            ],
        );
        checkButton.addEventListener("click", () => {
            this.user.finishTask(task.project, index);
            this.clearTasks();
            this.loadTasks(task.project);
        });

        leftSide.append(checkButton);

        let middle = document.createElement("div");
        middle.classList.add(...["truncate", "w-4/5"]);

        let name = document.createElement("p");
        name.textContent = task.name;
        name.classList.add(
            ...[
                "text-[#fffffe]",
                "font-bold",
                "text-lg",
                "text-ellipsis",
                "overflow-hidden",
            ],
        );

        let description = document.createElement("p");
        description.textContent = task.description;
        description.classList.add(
            ...[
                "text-[#94a1b2]",
                "text-sm",
                "text-ellipsis",
                "overflow-hidden",
            ],
        );

        let bottomRow = document.createElement("div");
        bottomRow.classList.add(...["flex", "justify-between"]);

        let priority = document.createElement("p");
        priority.textContent = "Priority: " + task.priority;
        priority.classList.add(...["text-[#94a1b2]", "text-sm"]);

        let date = document.createElement("p");
        date.textContent = task.dueDate;
        date.classList.add(...["text-[#94a1b2]", "text-sm"]);

        bottomRow.append(priority, date);

        middle.append(name, description, bottomRow);

        let rightSide = document.createElement("div");
        let editButton = document.createElement("button");

        let icon = document.createElement("span");
        icon.classList.add(...["material-icons"]);
        icon.textContent = "more_vert";
        icon.addEventListener("click", () => {
            let newTask = this.editTaskInput(task);
            // if (newTask) {
            //     editTask(task.project, index, newTask);
            // }
        });

        editButton.append(icon);

        rightSide.append(editButton);

        taskElement.append(leftSide, middle, rightSide);
        document.getElementById("taskContainer").appendChild(taskElement);
    };

    editTaskInput(task) {
        this.createTaskModal(task);
    }

    createTaskModal(task) {
        const modalDiv = document.createElement("div");
        modalDiv.id = "editTaskModal";
        modalDiv.tabIndex = -1;
        modalDiv.classList.add(
            "fixed",
            "inset-0",
            "z-50",
            "flex",
            "h-full",
            "w-full",
            "items-center",
            "justify-center",
        );

        modalDiv.addEventListener("click", () => {
            document.body.removeChild(modalDiv);
        });

        const form = document.createElement("form");
        form.id = "editTaskForm";
        form.classList.add(
            "w-full",
            "max-w-lg",
            "rounded",
            "border",
            "border-zinc-700",
            "bg-[#242629]",
            "p-4",
        );
        form.onclick = (event) => event.stopPropagation();

        const headerFlexContainer = document.createElement("div");
        headerFlexContainer.classList.add("flex", "justify-between", "pl-2");

        const header = document.createElement("h3");
        header.textContent = "Edit Task";

        const closeButton = document.createElement("button");
        closeButton.id = "editModalCloseButton";
        closeButton.classList.add("float-right");

        const closeIcon = document.createElement("i");
        closeIcon.classList.add("material-icons");
        closeIcon.textContent = "close";

        closeButton.appendChild(closeIcon);

        closeButton.addEventListener("click", (e) => {
            e.stopPropagation();
            e.preventDefault();
            document.body.removeChild(modalDiv);
        });

        headerFlexContainer.append(header, closeButton);

        const taskNameInput = document.createElement("input");
        taskNameInput.classList.add(
            "mb-4",
            "w-full",
            "appearance-none",
            "border-b",
            "border-[#7f5af0]",
            "bg-transparent",
            "px-2",
            "py-1",
            "text-lg",
            "focus:outline-none",
        );
        taskNameInput.type = "text";
        taskNameInput.placeholder = "Task Name";
        taskNameInput.id = "editTaskName";
        taskNameInput.value = task.name;

        const taskDescriptionInput = document.createElement("input");
        taskDescriptionInput.classList.add(
            "mb-4",
            "w-full",
            "appearance-none",
            "border-b",
            "border-[#7f5af0]",
            "bg-transparent",
            "px-2",
            "py-1",
            "text-sm",
            "focus:outline-none",
        );
        taskDescriptionInput.type = "text";
        taskDescriptionInput.placeholder = "Description";
        taskDescriptionInput.id = "editTaskDescription";
        taskDescriptionInput.value = task.description;

        const flexContainer = document.createElement("div");
        flexContainer.classList.add("flex", "w-full", "justify-between");

        const dueDateInput = document.createElement("input");
        dueDateInput.classList.add(
            "w-1/3",
            "appearance-none",
            "border-b",
            "border-[#7f5af0]",
            "bg-transparent",
            "px-2",
            "py-1",
            "text-sm",
            "focus:outline-none",
            "dark:[color-scheme:dark]",
        );
        dueDateInput.type = "date";
        dueDateInput.id = "editTaskDueDate";
        dueDateInput.value = task.dueDate;

        const priorityDropdown = this.createDropdown(
            ["Low", "Medium", "High"],
            "editTaskPriority",
            task.priority,
        );

        const projectDropdown = this.createDropdown(
            [],
            "editTaskProject",
            task.project,
        );

        const addButton = document.createElement("button");
        addButton.classList.add(
            "flex",
            "items-center",
            "justify-center",
            "rounded",
            "border",
            "border-[#7f5af0]",
            "bg-[#7f5af0]",
            "px-4",
            "py-2",
            "hover:border-[#fffffe]",
        );
        addButton.type = "submit";
        const addIcon = document.createElement("i");
        addIcon.classList.add("material-icons");
        addIcon.textContent = "add";
        addButton.appendChild(addIcon);

        addButton.addEventListener("click", (e) => {
            e.preventDefault();
        });

        flexContainer.append(
            dueDateInput,
            priorityDropdown,
            projectDropdown,
            addButton,
        );

        form.append(
            headerFlexContainer,
            taskNameInput,
            taskDescriptionInput,
            flexContainer,
        );

        modalDiv.appendChild(form);
        document.body.appendChild(modalDiv);
    }

    createDropdown(options, id, initialValue) {
        const dropdownDiv = document.createElement("div");
        dropdownDiv.classList.add("relative", "mt-1", "w-1/4");

        const select = document.createElement("select");
        select.classList.add(
            "h-full",
            "w-full",
            "appearance-none",
            "border-b",
            "border-[#7f5af0]",
            "bg-transparent",
            "px-2",
            "py-1",
            "text-sm",
            "focus:outline-none",
        );
        select.id = id;

        options.forEach((option, index) => {
            const opt = document.createElement("option");
            opt.value = index;
            opt.textContent = option;
            if (index === Number(initialValue)) {
                opt.selected = true;
            }
            select.appendChild(opt);
        });

        const iconDiv = document.createElement("div");
        iconDiv.classList.add(
            "pointer-events-none",
            "absolute",
            "inset-y-0",
            "right-0",
            "flex",
            "items-center",
        );
        const icon = document.createElement("i");
        icon.classList.add("material-icons");
        icon.textContent = "expand_more";
        iconDiv.appendChild(icon);

        dropdownDiv.append(select, iconDiv);

        return dropdownDiv;
    }

    clearTasks() {
        const element = document.getElementById("taskContainer");

        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }

    loadTasks(projectIndex = null) {
        const currentScreen = this.user.screen.currentScreen;
        if (
            projectIndex > 0 &&
            !["inbox", "today", "upcoming"].includes(currentScreen)
        ) {
            const projectTasks = this.user.projects[projectIndex].tasks;
            for (let i = 0; i < projectTasks.length; i++) {
                this.renderTask(projectTasks[i], i, this.user.editTask);
            }
        } else {
            for (let i = 0; i < this.user.projects.length; i++) {
                const project = this.user.projects[i];
                for (let j = 0; j < project.tasks.length; j++) {
                    const task = project.tasks[j];
                    if (currentScreen === "inbox") {
                        this.renderTask(task, j, this.user.editTask);
                    } else if (currentScreen === "today") {
                        if (isToday(parseISO(task.dueDate))) {
                            this.renderTask(task, j, this.user.editTask);
                        }
                    } else if (currentScreen === "upcoming") {
                        if (
                            !isToday(parseISO(task.dueDate)) &&
                            isFuture(parseISO(task.dueDate))
                        ) {
                            this.renderTask(task, j, this.user.editTask);
                        }
                    }
                }
            }
        }
    }
}
