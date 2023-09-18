export default class SidebarView {
    constructor() {
        this.sidebar = document.getElementById("sidebar");
        this.sidebarIcon = document.getElementById("sidebarIcon");
    }

    toggleSidebar() {
        this.sidebar.classList.toggle("-left-44");
        this.sidebar.classList.toggle("left-0");
    }
}
