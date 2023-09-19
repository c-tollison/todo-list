export default class Task {
    constructor(formValues) {
        this.name = formValues.name;
        this.description = formValues.description;
        this.dueDate = formValues.dueDate;
        this.priority = formValues.priority;
        this.project = formValues.project;
    }
}
