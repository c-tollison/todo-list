export default class TaskView {
    constructor() {}

    renderTask = (task) => {
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
                "gap-6",
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

        leftSide.append(checkButton);

        let rightSide = document.createElement("div");
        rightSide.classList.add(...["truncate"]);

        let name = document.createElement("p");
        name.textContent = task.name;
        name.classList.add(...["text-[#fffffe]", "font-bold", "text-lg"]);

        let description = document.createElement("p");
        description.textContent = task.description;
        description.classList.add(...["text-[#94a1b2]", "text-sm"]);

        let priority = document.createElement("p");
        priority.textContent = "P: " + task.priority;
        priority.classList.add(...["text-[#94a1b2]", "text-sm"]);

        rightSide.append(name, description, priority);

        taskElement.append(leftSide, rightSide);
        document.getElementById("taskContainer").appendChild(taskElement);
    };
}
