class World extends World2 {

    character = new Character();
    level = level1;
    gameOverFadeIn = 0;
    youWonFadeIn = 0;
    hideWorldForRestart = false;
    hideWorldForRestartAlpha = 1;
    statusBar = new StatusBar();
    statusBarBottle = new StatusBarBottle();
    statusBarCoin = new StatusBarCoin();
    statusBarEndBoss = new StatusBarEndBoss();
    bottleLeft = new BottleOnGround(330, 16, 0);
    noBottlesForEndbossArrow = new Image();
    showArrow = false;
    showStartScreen = true;

    startScreen = new Image();
    gameOverScreen = new Image();
    youWonScreen = new Image();

    throwSound = new Audio('audio/charThrow.mp3');
    collectSound = new Audio('audio/collectCoin.mp3');
    takeBottleSound = new Audio('audio/bottleOpen.mp3');
    brokenBottleSound = new Audio('audio/brokenBottle.mp3');
    jumpOnEnemySound = new Audio('audio/selectSound.mp3');

    throwableObjects = [];
    availableBottles = 0;
    muted = false;
    throwSoundPlay = false;
    charLowEnergy = false;
    blockJumpOnEnemy = false;
    randJumSpInd = 0;
    ctx;
    canvas;
    keyboard;
    camera_x = 712;


    constructor(canvas, keyboard) {

        super();
        this.setImagesForCTX();
        this.throwSound.volume = 0.2;
        this.throwSound.addEventListener('play', () => { this.throwSoundPlay = true });
        this.throwSound.addEventListener('pause', () => { this.throwSoundPlay = false });
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.draw();
        this.keyboard = keyboard;
        this.setWorld();
        this.run();
    }


    /**
     * 
     * set images for CTX
     * 
     */
    setImagesForCTX() {

        this.noBottlesForEndbossArrow.src = 'img/arrow.png';
        this.gameOverScreen.src = 'img/9_intro_outro_screens/game_over/gameOver.png';
        this.youWonScreen.src = 'img/9_intro_outro_screens/win/win_1.png';
        this.startScreen.src = 'img/9_intro_outro_screens/start/startscreen_1.png';
    }


    /**
     * 
     * set world
     * 
     */
    setWorld() {

        this.character.world = this;
        this.statusBar.world = this;
        const endboss = this.level.enemies.find(enemy => enemy instanceof Endboss);
        endboss.world = this;
    }


    /**
     * 
     * run
     * 
     */
    run() {

        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
            this.bottleIsOutOfSight();
            this.checkClouds();
            this.checkRemoveEnemy();
        }, 10);
    }


    /**
     * 
     * bottle is out of sight
     * 
     */
    bottleIsOutOfSight() {

        this.throwableObjects = this.throwableObjects.filter(object => {
            if (object.y < 1000) { return true; } else { clearInterval(object.throwL); clearInterval(object.throwR); return false }
        });
        this.throwableObjects = this.throwableObjects.filter(object => {
            if (object.splash && !object.removeBottle) {
                object.removeBottle = true;
                setTimeout(() => this.throwableObjects = this.throwableObjects.filter(obj => obj != object), 40 * 9);
            }
            return true;
        });
    }


    /**
     * 
     * check throw objects
     * 
     */
    checkThrowObjects() {

        const endboss = this.level.enemies.find(enemy => enemy instanceof Endboss);
        if (this.keyboard.D && !this.character.isDead() && !this.throwSoundPlay && !endboss.youWon) {
            if (this.availableBottles > 0) {
                let bottle = new ThrowableObject(this.character.x + 70, this.character.y + 125);
                this.throwableObjects.push(bottle);
                this.character.charAwakening();
                this.throwSound.play();
                this.availableBottles--;
                this.statusBarBottle.percentage -= 10;
                this.statusBarBottle.setPercentage(this.statusBarBottle.percentage);
            }
        }
    }


    /**
     * 
     * take coin
     * 
     */
    takeCoin() {

        this.level.coins.forEach(coin => {
            if (this.character.isTakeCoin(coin)) {
                this.level.coins = this.level.coins.filter(c => c != coin);
                this.cloneSound(this.collectSound, 0.1);
                this.statusBarCoin.percentage += 10;
                if (this.statusBarCoin.percentage > 100) this.statusBarCoin.percentage = 100;
                this.statusBarCoin.setPercentage(this.statusBarCoin.percentage);
            }
        });
    }


    /**
     * 
     * take bottle
     * 
     */
    takeBottle() {

        this.level.bottles.forEach(bottle => {
            if (this.character.isTakeBottle(bottle)) { if (this.statusBarBottle.percentage < 100) this.takeBottleTrue(bottle) }
        });
    }


    /**
     * 
     * take bottle - true
     * 
     */
    takeBottleTrue(bottle) {

        this.level.bottles = this.level.bottles.filter(b => b != bottle);
        this.cloneSound(this.takeBottleSound, 0.4);
        this.availableBottles++;
        this.statusBarBottle.percentage += 10;
        if (this.statusBarBottle.percentage > 100) this.statusBarBottle.percentage = 100;
        this.statusBarBottle.setPercentage(this.statusBarBottle.percentage);
        const endboss = this.level.enemies.find(enemy => enemy instanceof Endboss);
        endboss.noBottle = false;
    }


    /**
     * 
     * clone sound for play
     * 
     */
    cloneSound(sou, vol) {

        const soundCloned = sou.cloneNode();
        soundCloned.volume = vol;
        soundCloned.muted = this.muted;
        soundCloned.play();
    }


    /**
     * 
     * check collisions for bottle
     * 
     */
    checkCollisionForBottle(enemy) {

        this.throwableObjects.forEach(bottle => {
            if (!(enemy instanceof Endboss)) {
                if (this.isBottleHit(bottle, enemy) && !enemy.isDead && !bottle.splash) {
                    if (!enemy.isDead) this.enemyHitTrue(enemy, bottle);
                }
            }
            this.checkCollisionForBottleEndboss(enemy, bottle);
        });
    }


    /**
     * 
     * check collisions for bottle
     * 
     */
    enemyHitTrue(enemy, bottle) {

        enemy.speedY = 0;
        enemy.isDead = true;
        bottle.splash = true;
        this.cloneSound(this.brokenBottleSound, 0.13);
        setTimeout(() => { enemy.notShowAgain = true }, 3000);
    }


    /**
     * 
     * check collisions for bottle - endboss
     * 
     */
    checkCollisionForBottleEndboss(enemy, bottle) {

        const endboss = this.level.enemies.find(enemy => enemy instanceof Endboss);
        if ((enemy instanceof Endboss) && endboss.bossInSight) {
            if (this.isBottleHitOnEndboss(bottle, enemy) && !enemy.isDead && !bottle.splash) {
                if (!enemy.isDead) this.collisionBottleEndbossTrue(bottle, endboss);
            }
        }
    }


    /**
     * 
     * collisions bottle, endboss - true
     * 
     */
    collisionBottleEndbossTrue(bottle, endboss) {

        bottle.splash = true;
        this.cloneSound(this.brokenBottleSound, 0.13);
        endboss.isHurt = true;
        this.statusBarEndBoss.percentage -= 20;
        this.statusBarEndBoss.setPercentage(this.statusBarEndBoss.percentage);
        if (this.statusBarEndBoss.percentage == 0) endboss.isDead = true;
    }


    /**
     * 
     * check collisions
     * 
     */
    checkCollisions() {

        this.takeCoin();
        this.takeBottle();
        this.level.enemies.forEach(enemy => {
            if (enemy instanceof Chicken || enemy instanceof ChickenSmall || enemy instanceof Endboss) {
                this.checkCollisionsChickenChickenSmallEndboss(enemy);
            }
            this.checkJumpSpeedChickenChickenSmall(enemy);
        });
    }


    /**
     * 
     * check collisions - chicken, chicken small, endboss
     * 
     */
    checkCollisionsChickenChickenSmallEndboss(enemy) {

        this.checkCollisionForBottle(enemy);
        if (this.character.isColliding(enemy) && this.character.itFalls && this.isCharOverChicken(enemy)) {
            if (!enemy.isDead && !this.statusBar.percentage0Running) this.jumpOnEnemyTrue(enemy);
        } else {
            const endboss = this.level.enemies.find(enemy => enemy instanceof Endboss);
            if (this.character.isColliding(enemy) && !enemy.isDead && !endboss.youWon) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy);
                this.characterHitAboveTheGround(enemy);
            }
        }
    }


    /**
     * 
     * jump on enemy true
     * 
     */
    jumpOnEnemyTrue(enemy) {

        this.character.speedY = 3;
        enemy.speedY = 0;
        this.cloneSound(this.jumpOnEnemySound, 0.3)
        setTimeout(() => { enemy.notShowAgain = true }, 3000);
        enemy.isDead = true;
    }


    /**
     * 
     * check jump speed - chicken, chicken small
     * 
     */
    checkJumpSpeedChickenChickenSmall(enemy) {

        this.randJumSpInd += 1;
        if (this.randJumSpInd < 5) return;
        this.randJumSpInd = 0;
        if ((enemy instanceof Chicken || enemy instanceof ChickenSmall) && this.character.gameStarted) {
            if (!enemy.duringJump && !enemy.isDead) {
                const randomNumber = Math.random();
                this.chickenChickenSmallRandomJump(randomNumber, enemy);
                this.chickenChickenSmallRandomSpeed(randomNumber, enemy);
            }
        }
    }


    /**
     * 
     * chicken, chicken small - random speed
     * 
     */
    chickenChickenSmallRandomSpeed(randomNumber, enemy) {

        if (randomNumber > 0.5 && randomNumber < 0.55) {
            const enemySpeed = enemy.speed;
            if (enemy instanceof Chicken) { if (enemy.speed < 4) { enemy.speed = enemySpeed + 1.5 * Math.random(); setTimeout(() => { enemy.speed = enemySpeed }, 2000) } }
            if (enemy instanceof ChickenSmall) { if (enemy.speed < 4) { enemy.speed = enemySpeed + 2.5 * Math.random(); setTimeout(() => { enemy.speed = enemySpeed }, 3000) } }
        }
    }


    /**
     * 
     * chicken, chicken small - random jump
     * 
     */
    chickenChickenSmallRandomJump(randomNumber, enemy) {

        if (randomNumber > 0.5 && randomNumber < 0.55) {
            enemy.duringJump = true;
            enemy.blockMove = true;
            setTimeout(() => {
                enemy.blockMove = false;
                if ((enemy instanceof Chicken) && !enemy.isDead) enemy.speedY = 10 + 15 * Math.random();
                if ((enemy instanceof ChickenSmall) && !enemy.isDead) enemy.speedY = 10 + 10 * Math.random();
                setTimeout(() => { enemy.duringJump = false }, enemy.speedY * 100 + 1000);
            }, 600);
        }
    }

}












