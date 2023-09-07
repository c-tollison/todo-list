export default class Task {
    //TODO: ADD PROJECT IT IS ON
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    renderTask = (taskContainer) => {
        let task = document.createElement("div");
        task.classList.add(
            ...[
                "container",
                "px-4",
                "py-4",
                "w-80",
                "h-30",
                "rounded",
                "shadow",
                "flex",
                "border",
                "border-gray-400",
                "bg-white",
                "gap-6",
                "hover:border-gray-700",
            ]
        );
        task.addEventListener("click", () => {
            //add modal pop up to view task info
        });

        let leftSide = document.createElement("div");
        let checkButton = document.createElement("button");
        checkButton.classList.add(
            ...[
                "w-6",
                "h-6",
                "border",
                "border-gray-400",
                "rounded-full",
                "hover:border-gray-700",
            ]
        );
        checkButton.addEventListener("click", (event) => {
            //add check button stuff
        });

        leftSide.append(checkButton);

        let rightSide = document.createElement("div");
        rightSide.classList.add(...["truncate"]);

        let title = document.createElement("p");
        title.textContent = this.title;
        title.classList.add(...["text-gray-900", "font-bold", "text-lg"]);

        let description = document.createElement("p");
        description.textContent = this.description;
        description.classList.add(...["text-gray-700", "text-sm"]);

        let priority = document.createElement("p");
        priority.textContent = "P: " + this.priority;
        priority.classList.add(...["text-gray-600", "text-sm"]);

        rightSide.append(title, description, priority);

        task.append(leftSide, rightSide);
        taskContainer.appendChild(task);
    };
}
