class Endboss2 {

    arrInt;


    /**
     * 
     * boss is dead - play sound
     * 
     */
    bossIsDeadPlaySound() {

        this.endboss.bossDeadSound.currentTime = 0.8;
        this.endboss.bossDeadSound.play();
        setTimeout(() => this.endboss.endSound.play(), 4000);
        this.endboss.world.character.angryChick1Sound.volume = 0;
        this.endboss.world.character.angryChick2Sound.volume = 0;
        this.endboss.world.character.levelUpSound.volume = 0;
        this.endboss.world.character.walkingSound.volume = 0;
        this.endboss.world.character.snoringSound.volume = 0;
        this.endboss.world.character.walkingSound.volume = 0;
        this.endboss.world.statusBar.charLowEnergySound.volume = 0;
    }


    /**
     * 
     * init restart menu
     * 
     */
    initRestartMenu() {

        setTimeout(() => {
            this.endboss.showYouWon = true;
            setTimeout(() => { this.endboss.world.level.restartMenu() }, 2000);
        }, 3000);
    }


    /**
     * 
     * check you won
     * 
     */
    checkYouWon() {

        if (!this.endboss.youWon && this.endboss.world.statusBar.percentage != 0) {
            if (this.endboss.isDead) {
                this.endboss.youWon = true;
                this.endboss.endboss2.bossIsDeadPlaySound();
                this.endboss.world.character.interBlockYouWon = false;
                const deadInt = setInterval(() => this.endboss.playAnimation(this.endboss.IMAGES_DEAD), 150);
                setTimeout(() => clearInterval(deadInt), 3000);
                this.endboss.endboss2.initRestartMenu();
            }
        }
    }


    /**
     * 
     * show arrow - no bottles
     * 
     */
    showArrowNoBottlesForEndboss() {

        if (!this.endboss.arrow) {
            this.endboss.arrow = true;
            this.endboss.world.showArrow = true;
            this.arrInt = setInterval(() => {
                this.endboss.world.showArrow = !this.endboss.world.showArrow;
                if (this.checkBottlesOnGroundForEndboss()) {
                    this.endboss.arrow = false;
                    this.endboss.world.showArrow = false;
                    clearInterval(this.arrInt);
                }
            }, 600);
        }
    }


    /**
     * 
     * show arrow - no bottles
     * 
     */
    checkBottlesOnGroundForEndboss() {

        const bottles = this.endboss.world.level.bottles.filter(b => b.bottleForEndboss);
        return bottles.length == 0;
    }


    /**
     * 
     * are bottles nearby
     * 
     */
    areBottlesNearby() {

        const bottlesNearby = this.endboss.world.level.bottles.filter(b => b.x > this.endboss.x - 1000);
        return bottlesNearby.length == 0;
    }

}







