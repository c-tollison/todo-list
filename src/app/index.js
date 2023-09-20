import "../styles/style.css";

import ProjectController from "./controllers/ProjectController";
import Screen from "./models/Screen";
import SidebarController from "./controllers/SidebarController";
import TaskController from "./controllers/TaskController";
import TaskModalView from "./views/task/TaskModalView";
import TaskView from "./views/task/TaskView";
import User from "./models/User";

const screen = new Screen();
const taskModalView = new TaskModalView();
const taskView = new TaskView();
const user = new User(screen, taskView);
new TaskController(user, screen, taskModalView, taskView);
new SidebarController(user, screen, taskModalView, taskView);
new ProjectController(user, screen, taskModalView, taskView);
