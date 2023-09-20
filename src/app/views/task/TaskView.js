export default class TaskView {
    constructor() {}

    renderTask = (task, finishTask, index) => {
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
            finishTask(task.project, index);
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
            console.log("hello world");
        });

        editButton.append(icon);

        rightSide.append(editButton);

        taskElement.append(leftSide, middle, rightSide);
        document.getElementById("taskContainer").appendChild(taskElement);
    };
}
