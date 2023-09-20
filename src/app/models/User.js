import { isFuture, isToday, parseISO } from "date-fns";

import Project from "./Project";
import Task from "./Task";

export default class User {
    constructor(screen, taskView) {
        this.screen = screen;
        this.taskView = taskView;
        let project = new Project("inbox");
        project.tasks.push(
            new Task({
                name: "Test Task",
                description: "This is a description of the test",
                dueDate: "2023-09-19",
                priority: "2",
                project: "0",
            }),
        );
        this.projects = [project];
    }

    finishTask = (projectIndex, index) => {
        this.projects[projectIndex].tasks.splice(index, 1);

        this.clearContainer();

        this.addContentBack(this.projects[projectIndex].tasks);
    };

    clearContainer() {
        const element = document.getElementById("taskContainer");

        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }

    addContentBack(tasks) {
        if (
            this.screen.getScreen() !== "today" &&
            this.screen.getScreen() !== "upcoming"
        ) {
            for (let i = 0; i < tasks.length; i++) {
                this.taskView.renderTask(tasks[i], this.finishTask, i);
            }
        } else if (this.screen.getScreen() === "today") {
            for (let i = 0; i < this.projects.length; i++) {
                let project = this.projects[i];
                for (let j = 0; j < project.tasks.length; j++) {
                    if (isToday(parseISO(project.tasks[j].dueDate))) {
                        this.taskView.renderTask(
                            project.tasks[j],
                            this.finishTask,
                            j,
                        );
                    }
                }
            }
        } else if (this.screen.getScreen() === "upcoming") {
            for (let i = 0; i < this.projects.length; i++) {
                let project = this.projects[i];
                for (let j = 0; j < project.tasks.length; j++) {
                    if (
                        !isToday(parseISO(project.tasks[j].dueDate)) &&
                        isFuture(parseISO(project.tasks[j].dueDate))
                    ) {
                        this.taskView.renderTask(
                            project.tasks[j],
                            this.finishTask,
                            j,
                        );
                    }
                }
            }
        }
    }
}
