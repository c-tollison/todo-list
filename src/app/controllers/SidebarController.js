export default class SidebarController {
    constructor(user, taskModalView, taskView, sidebarView) {
        this.user = user;
        this.taskView = taskView;
        this.taskModalView = taskModalView;
        this.sidebarView = sidebarView;

        this.sidebarView.sidebarIcon.addEventListener("click", () => {
            this.sidebarView.toggleSidebar();
        });

        this.sidebarView.inboxButton.addEventListener("click", () => {
            this.taskView.clearTasks();
            this.user.screen.currentScreen = "inbox";
            this.taskView.loadTasks();
            this.taskModalView.unhideOpenModalButton();
        });

        this.sidebarView.homeButton.addEventListener("click", () => {
            this.taskView.clearTasks();
            this.user.screen.currentScreen = "inbox";
            this.taskView.loadTasks();
            this.taskModalView.unhideOpenModalButton();
        });

        this.sidebarView.todayButton.addEventListener("click", () => {
            this.taskView.clearTasks();
            this.user.screen.currentScreen = "today";
            this.taskView.loadTasks();
            this.taskModalView.hideOpenModalButton();
        });

        this.sidebarView.upcomingButton.addEventListener("click", () => {
            this.taskView.clearTasks();
            this.user.screen.currentScreen = "upcoming";
            this.taskView.loadTasks();
            this.taskModalView.hideOpenModalButton();
        });
    }
}
