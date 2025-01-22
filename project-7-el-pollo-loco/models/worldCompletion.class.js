class World2 extends DrawableObject {

    endbossStatusBarAlpha = 0;
    charHitAboveGround = false;
    hitIntL;

    bubbleSound = new Audio('audio/bubble.mp3');


    constructor() {

        super();
        this.bubbleSound.volume = 0.2;
    }

    /**
     * 
     * is bottle hit
     * 
     */
    isBottleHit(bottleFrame, obj) {

        return bottleFrame.x + 25 + bottleFrame.width - 50 >= obj.x + 14 &&
            bottleFrame.x + 25 <= obj.x + 14 + obj.width - 24 &&
            bottleFrame.y + 11 + bottleFrame.height - 20 >= obj.y + 6 &&
            bottleFrame.y + 11 <= obj.y + 6 + obj.height;
    }


    /**
     * 
     * is bottle hit on endboss
     * 
     */
    isBottleHitOnEndboss(bottleFrame, obj) {

        let bottLbossR = this.bottleHitEndbossOffset1(obj, bottleFrame);
        let bottRbossL = this.bottleHitEndbossOffset2(obj, bottleFrame);
        return bottleFrame.x + 25 + bottleFrame.width - 50 >= obj.x + bottLbossR &&
            bottleFrame.x + 25 <= obj.x + 14 + obj.width - bottRbossL &&
            bottleFrame.y + 11 + bottleFrame.height - 20 >= obj.y + 6 &&
            bottleFrame.y + 11 <= obj.y - 26 + obj.height;
    }


    /**
     * 
     * is character over chicken 
     * 
     */
    isCharOverChicken(enemy) {

        let offset = 40;
        if (enemy.speedY > 5) offset = 50;
        return enemy.x < this.character.x + 25 + this.character.width - 67 &&
            enemy.x + enemy.width > this.character.x + 30 &&
            this.character.y + this.character.height - offset < enemy.y;  
    }


    /**
     * 
     * check clouds
     * 
     */
    checkClouds() {

        this.level.clouds.forEach(cloud => { if (cloud.x < -1170) cloud.x = 720 * 4 });
    }


    /**
     * 
     * check remove enemy
     * 
     */
    checkRemoveEnemy() {

        this.level.enemies = this.level.enemies.filter(e => {
            if (((e.x > -1000) || (e.x > -1000 && !e.isDead)) && (e instanceof ChickenSmall || e instanceof Chicken)) return true;
            return e instanceof Endboss;
        });
    }


    /**
     * 
     * draw function for canvas
     * 
     */
    draw() {

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.drawCameraTranslate();
        this.ctx.translate(-this.camera_x, 0);
        this.drawNoCameraTranslate();
        let self = this;
        requestAnimationFrame(() => self.draw());
    }


    /**
     * 
     * draw function for canvas - camera translate
     * 
     */
    drawCameraTranslate() {

        this.addObjectsToMap(this.level.backgroundObjects);
        this.checkHideWorldForRestart();
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottles);
        this.addToMap(this.character);
        this.ctx.globalAlpha = 1;
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.throwableObjects);
    }


    /**
     * 
     * check hide world for restart
     * 
     */
    checkHideWorldForRestart() {

        if (this.hideWorldForRestart) {
            this.hideWorldForRestartAlpha -= 0.02;
            if (this.hideWorldForRestartAlpha < 0) this.hideWorldForRestartAlpha = 0;
            this.ctx.globalAlpha = this.hideWorldForRestartAlpha;
        }
    }
    

    /**
     * 
     * draw function for canvas - no camera translate
     * 
     */
    drawNoCameraTranslate() {

        if (!this.charLowEnergy) this.addToMap(this.statusBar);
        this.addToMap(this.statusBarBottle);
        this.addToMap(this.statusBarCoin);
        this.showEndBossStatusBar();
        if (this.showArrow) { this.addToMap(this.bottleLeft) };
        this.showGameOver();
        this.showYouWon();
        this.drawImagesNoCameraTranslateWithoutObject();
    }


    /**
     * 
     * draw images no camera translate without object
     * 
     */
    drawImagesNoCameraTranslateWithoutObject() {

        if (this.showArrow) this.ctx.drawImage(this.noBottlesForEndbossArrow, 310, 50, 50, 50);
        if (this.showStartScreen) this.ctx.drawImage(this.startScreen, 0, 0, 720, 480);
    }


    /**
     * 
     * show you won
     * 
     */
    showYouWon() {

        const endboss = this.level.enemies.find(enemy => enemy instanceof Endboss);
        if (endboss.showYouWon) {
            if (this.youWonFadeIn < 1) this.youWonFadeIn += 0.01;
            this.ctx.globalAlpha = this.youWonFadeIn;
            this.ctx.drawImage(this.youWonScreen, 110, 140, 500, 200);
            this.ctx.globalAlpha = 1;
        }
    }


    /**
     * 
     * show game over
     * 
     */
    showGameOver() {

        if (this.statusBar.isGameOver) {
            if (this.gameOverFadeIn < 1) this.gameOverFadeIn += 0.01;
            this.ctx.globalAlpha = this.gameOverFadeIn;
            this.ctx.drawImage(this.gameOverScreen, 0, 0, 720, 480);
            this.ctx.globalAlpha = 1;
        } else this.hideGameOver();
    }


    /**
     * 
     * hide game over
     * 
     */
    hideGameOver() {

        if (this.gameOverFadeIn > 0) {
            if (this.gameOverFadeIn > 0) this.gameOverFadeIn -= 0.01;
            if (this.gameOverFadeIn < 0) this.gameOverFadeIn = 0;
            this.ctx.globalAlpha = this.gameOverFadeIn;
            this.ctx.drawImage(this.gameOverScreen, 0, 0, 720, 480);
            this.ctx.globalAlpha = 1;
        }
    }


    /**
     * 
     * show end boss status bar
     * 
     */
    showEndBossStatusBar() {

        const endboss = this.level.enemies.find(enemy => enemy instanceof Endboss);
        if (endboss.bossInSight) {
            const saveAlpha = this.ctx.globalAlpha;
            if (this.endbossStatusBarAlpha < 1) this.endbossStatusBarAlpha += 0.005;
            if (this.endbossStatusBarAlpha > 1) this.endbossStatusBarAlpha = 1;
            this.ctx.globalAlpha = this.endbossStatusBarAlpha;
            this.addToMap(this.statusBarEndBoss);
            this.ctx.globalAlpha = saveAlpha;
        } else this.hideEndBossStatusBar();
    }


    /**
     * 
     * hide endboss status bar
     * 
     */
    hideEndBossStatusBar() {

        if (this.endbossStatusBarAlpha > 0) { this.endbossStatusBarAlpha -= 0.010 } else return;
        const saveAlpha = this.ctx.globalAlpha;
        if (this.endbossStatusBarAlpha < 0) this.endbossStatusBarAlpha = 0;
        this.ctx.globalAlpha = this.endbossStatusBarAlpha;
        this.addToMap(this.statusBarEndBoss);
        this.ctx.globalAlpha = saveAlpha;
    }


    /**
     * 
     * add to map
     * 
     */
    addToMap(mo) {

        if (mo.otherDirection) this.flipImage(mo);
        if (mo.rotate) this.rotateImage(mo);
        const saveAlpha = this.ctx.globalAlpha;
        if (mo.notShowAgain) { this.ctx.globalAlpha = mo.notShowAgainAlpha; mo.notShowAgainAlpha -= 0.01; if (mo.notShowAgainAlpha < 0) mo.notShowAgainAlpha = 0; }
        mo.draw(this.ctx);
        if (mo.notShowAgain) this.ctx.globalAlpha = saveAlpha;
        if (mo.otherDirection) this.flipImageBack(mo);
        if (mo.rotate) this.rotateImageBack(mo);
    }


    /**
     * 
     * rotate image for full screen character move buttons
     * 
     */
    rotateImage(mo) {

        this.ctx.save();
        if (mo.button != "jump") { this.ctx.translate(34, 34) } else this.ctx.translate(0, 34);
        this.ctx.rotate(mo.rotate);
    }


    /**
     * 
     * rotate image back for full screen character move buttons
     * 
     */
    rotateImageBack(mo) {

        this.ctx.restore();
    }


    /**
     * 
     * add objects to map
     * 
     */
    addObjectsToMap(objects) {

        objects.forEach(o => this.addToMap(o));
    }


    /**
     * 
     * flip image
     * 
     */
    flipImage(mo) {

        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }


    /**
     * 
     * flip image back
     * 
     */
    flipImageBack(mo) {

        this.ctx.restore();
        mo.x = mo.x * -1;
    }


    /**
     * 
     * character hit above the ground - chicken, chicken small
     * 
     */
    characterHitAboveTheGround(enemy) {

        if ((enemy instanceof Endboss) || this.statusBar.percentage0Running) return;
        if (!this.charHitAboveGround && this.character.isAboveGround()) {
            this.charHitAboveGround = true;
            this.characterHitAboveTheGroundCharReaction();
        }
    }


    /**
     * 
     * character hit above the ground reaction - chicken, chicken small
     * 
     */
    characterHitAboveTheGroundCharReaction() {

        this.bubbleSound.play();
        this.character.speedY = 5;
        if (!this.character.otherDirection) {
            this.hitIntL = setInterval(() => { if (this.keyboard.LEFT == false) this.character.x -= 1 }, 5);
            setTimeout(() => { clearInterval(this.hitIntL); this.charHitAboveGround = false; }, 250);
        } else {
            this.hitIntL = setInterval(() => { if (this.keyboard.RIGHT == false) this.character.x += 1 }, 5);
            setTimeout(() => { clearInterval(this.hitIntL); this.charHitAboveGround = false; }, 250);
        }
    }

}






