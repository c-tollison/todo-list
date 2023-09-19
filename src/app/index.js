import "../styles/style.css";

import ProjectController from "./controllers/ProjectController";
import SidebarController from "./controllers/SidebarController";
import TaskController from "./controllers/TaskController";
import TaskModalView from "./views/task/TaskModalView";
import TaskView from "./views/task/TaskView";
import User from "./models/User";

const user = new User();
const taskModalView = new TaskModalView();
const taskView = new TaskView();
new TaskController(user, taskModalView, taskView);
new SidebarController(user, taskView);
new ProjectController(user, taskModalView);
