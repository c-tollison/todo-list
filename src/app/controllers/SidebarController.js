import { isFuture, isToday, parseISO } from "date-fns";

import SidebarView from "../views/sidebar/SidebarView";

export default class SidebarController {
    constructor(user, screen, taskModalView, taskView) {
        this.user = user;
        this.screen = screen;
        this.taskView = taskView;
        this.taskModalView = taskModalView;
        this.setInboxScreen();

        this.sidebarView = new SidebarView();

        this.sidebarView.sidebarIcon.addEventListener("click", () => {
            this.sidebarView.toggleSidebar();
        });

        this.sidebarView.inboxButton.addEventListener("click", () => {
            this.setInboxScreen();
            this.taskModalView.unhideOpenModalButton();
        });

        this.sidebarView.todayButton.addEventListener("click", () => {
            this.setTodayBox();
            this.taskModalView.hideOpenModalButton();
        });

        this.sidebarView.upcomingButton.addEventListener("click", () => {
            this.setUpcoming();
            this.taskModalView.hideOpenModalButton();
        });
    }

    setInboxScreen() {
        if (
            this.user.projects.length > 0 &&
            this.screen.getScreen() != "inbox"
        ) {
            this.clearContainer();
            this.screen.setScreen("inbox");
            for (let i = 0; i < this.user.projects.length; i++) {
                let project = this.user.projects[i];
                for (let j = 0; j < project.tasks.length; j++) {
                    this.taskView.renderTask(
                        project.tasks[j],
                        this.user.finishTask,
                        j,
                        this.user.editTask,
                    );
                }
            }
        }
    }

    setTodayBox() {
        if (
            this.user.projects.length > 0 &&
            this.screen.getScreen() != "today"
        ) {
            this.clearContainer();
            this.screen.setScreen("today");
            for (let i = 0; i < this.user.projects.length; i++) {
                let project = this.user.projects[i];
                for (let j = 0; j < project.tasks.length; j++) {
                    if (isToday(parseISO(project.tasks[j].dueDate))) {
                        this.taskView.renderTask(
                            project.tasks[j],
                            this.user.finishTask,
                            j,
                            this.user.editTask,
                        );
                    }
                }
            }
        }
    }

    setUpcoming() {
        if (
            this.user.projects.length > 0 &&
            this.screen.getScreen() != "upcoming"
        ) {
            this.clearContainer();
            this.screen.setScreen("upcoming");
            for (let i = 0; i < this.user.projects.length; i++) {
                let project = this.user.projects[i];
                for (let j = 0; j < project.tasks.length; j++) {
                    if (
                        !isToday(parseISO(project.tasks[j].dueDate)) &&
                        isFuture(parseISO(project.tasks[j].dueDate))
                    ) {
                        this.taskView.renderTask(
                            project.tasks[j],
                            this.user.finishTask,
                            j,
                            this.user.editTask,
                        );
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
