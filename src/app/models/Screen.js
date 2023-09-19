export default class Screen {
    constructor() {
        this.currentScreen = null;
    }

    getScreen() {
        return this.currentScreen;
    }

    setScreen(screen) {
        this.currentScreen = screen;
    }
}
