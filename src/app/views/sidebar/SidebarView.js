export default class SidebarView {
    constructor() {
        this.sidebar = document.getElementById("sidebar");
        this.sidebarIcon = document.getElementById("sidebarIcon");
        this.inboxButton = document.getElementById("inboxButton");
        this.todayButton = document.getElementById("todayButton");
        this.upcomingButton = document.getElementById("upcomingButton");
    }

    toggleSidebar() {
        this.sidebar.classList.toggle("-left-44");
        this.sidebar.classList.toggle("left-0");
    }
}
