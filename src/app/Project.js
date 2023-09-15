export default class Project {
    tasks = [];

    constructor(name) {
        this.name = name;
    }

    addTasks(task) {
        this.tasks.push(task);
    }
}
