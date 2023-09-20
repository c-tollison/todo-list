import Project from "./Project";
import Screen from "./Screen";
import Task from "./Task";

export default class User {
    constructor() {
        this.screen = new Screen();
        let project = new Project("inbox");
        project.tasks.push(
            new Task({
                name: "Test Task",
                description: "This is a description of the test",
                dueDate: "2023-09-19",
                priority: "1",
                project: "0",
            }),
        );
        this.projects = [project];
    }

    finishTask = (projectIndex, index) => {
        this.projects[projectIndex].tasks.splice(index, 1);
    };

    editTask = (projectIndex, index, updatedTask) => {
        this.projects[projectIndex].tasks[index] = updatedTask;
    };
}
