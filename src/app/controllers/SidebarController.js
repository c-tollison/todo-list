import SidebarView from "../views/sidebar/SidebarView";

export default class SidebarController {
    constructor() {
        this.sidebarView = new SidebarView();

        this.sidebarView.sidebarIcon.addEventListener("click", () => {
            this.sidebarView.toggleSidebar();
        });
    }
}
