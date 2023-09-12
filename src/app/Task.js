export default class Task {
    //TODO: ADD PROJECT IT IS ON
    constructor(formValues) {
        this.name = formValues.name;
        this.description = formValues.description;
        this.dueDate = formValues.dueDate;
        this.priority = formValues.priority;
    }

    renderTask = (taskContainer) => {
        let task = document.createElement("div");
        task.classList.add(
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
            ]
        );
        task.addEventListener("click", () => {
            //add modal pop up to view task info
        });

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
            ]
        );
        checkButton.addEventListener("click", (event) => {
            //add check button stuff
        });

        leftSide.append(checkButton);

        let rightSide = document.createElement("div");
        rightSide.classList.add(...["truncate"]);

        let name = document.createElement("p");
        name.textContent = this.name;
        name.classList.add(...["text-[#fffffe]", "font-bold", "text-lg"]);

        let description = document.createElement("p");
        description.textContent = this.description;
        description.classList.add(...["text-[#94a1b2]", "text-sm"]);

        let priority = document.createElement("p");
        priority.textContent = "P: " + this.priority;
        priority.classList.add(...["text-[#94a1b2]", "text-sm"]);

        rightSide.append(name, description, priority);

        task.append(leftSide, rightSide);
        taskContainer.appendChild(task);
    };
}
