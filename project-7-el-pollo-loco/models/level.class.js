class Level {

    enemies;
    clouds;
    backgroundObjects;
    bottles;
    coins;
    showRestartMenu = false;
    char_rX_cam = 2236;
    char_rX = 2732;
    char_lX_cam = -636;
    char_lX = -712;


    constructor(enemies, clouds, backgroundObjects, bottles, coins) {

        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.bottles = bottles;
        this.coins = coins;
    }


    /**
     * 
     * restart menu
     * 
     */
    restartMenu() {

        if (!this.showRestartMenu) {
            this.showRestartMenu = true;
            document.querySelector('.restart-div').style = "opacity: 0; display: inline-block;"
            setTimeout(() => { document.querySelector('.restart-div').style = "opacity: 1; display: inline-block;" }, 50);
        }
    }

}









