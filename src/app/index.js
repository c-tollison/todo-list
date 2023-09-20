import "../styles/style.css";

import ProjectController from "./controllers/ProjectController";
import ProjectView from "./views/project/ProjectView";
import SidebarController from "./controllers/SidebarController";
import SidebarView from "./views/sidebar/SidebarView";
import TaskController from "./controllers/TaskController";
import TaskModalView from "./views/task/TaskModalView";
import TaskView from "./views/task/TaskView";
import User from "./models/User";

const user = new User();

const taskModalView = new TaskModalView(user);
const taskView = new TaskView(user);
const sidebarView = new SidebarView();
const projectView = new ProjectView();

new TaskController(user, taskModalView, taskView);
new SidebarController(user, taskModalView, taskView, sidebarView);
new ProjectController(user, taskModalView, taskView, projectView);
