import Project from "./Project";

export default class User {
    constructor() {
        this.projects = [new Project("inbox")];
    }

    addProject(project) {
        this.projects.push;
    }
}
