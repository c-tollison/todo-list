import { isFuture, isToday, parseISO } from "date-fns";

import SidebarView from "../views/sidebar/SidebarView";

export default class SidebarController {
    constructor(user, taskView) {
        this.user = user;
        this.taskView = taskView;
        this.currentScreen = null;
        this.setInboxScreen();

        this.sidebarView = new SidebarView();

        this.sidebarView.sidebarIcon.addEventListener("click", () => {
            this.sidebarView.toggleSidebar();
        });

        this.sidebarView.inboxButton.addEventListener("click", () => {
            this.setInboxScreen();
        });

        this.sidebarView.todayButton.addEventListener("click", () => {
            this.setTodayBox();
        });

        this.sidebarView.upcomingButton.addEventListener("click", () => {
            this.setUpcoming();
        });
    }

    setInboxScreen() {
        if (this.user.projects.length > 0 && this.currentScreen != "inbox") {
            this.clearContainer();
            this.currentScreen = "inbox";
            for (let i = 0; i < this.user.projects.length; i++) {
                let project = this.user.projects[i];
                for (let i = 0; i < project.tasks.length; i++) {
                    this.taskView.renderTask(project.tasks[i]);
                }
            }
        }
    }

    setTodayBox() {
        if (this.user.projects.length > 0 && this.currentScreen != "today") {
            this.clearContainer();
            this.currentScreen = "today";
            for (let i = 0; i < this.user.projects.length; i++) {
                let project = this.user.projects[i];
                for (let i = 0; i < project.tasks.length; i++) {
                    if (isToday(parseISO(project.tasks[i].dueDate))) {
                        this.taskView.renderTask(project.tasks[i]);
                    }
                }
            }
        }
    }

    setUpcoming() {
        if (this.user.projects.length > 0 && this.currentScreen != "upcoming") {
            this.clearContainer();
            this.currentScreen = "upcoming";
            for (let i = 0; i < this.user.projects.length; i++) {
                let project = this.user.projects[i];
                for (let i = 0; i < project.tasks.length; i++) {
                    if (
                        !isToday(parseISO(project.tasks[i].dueDate)) &&
                        isFuture(parseISO(project.tasks[i].dueDate))
                    ) {
                        this.taskView.renderTask(project.tasks[i]);
                    }
                }
            }
        }
    }

    clearContainer() {
        const element = document.getElementById("taskContainer");

        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }
}
