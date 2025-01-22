
class Endboss extends MovableObject {

    IMAGES_ALERT = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png'
    ];

    IMAGES_WALKING = [
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png'
    ];

    IMAGES_ATTACK = [
        'img/4_enemie_boss_chicken/3_attack/G13.png',
        'img/4_enemie_boss_chicken/3_attack/G14.png',
        'img/4_enemie_boss_chicken/3_attack/G15.png',
        'img/4_enemie_boss_chicken/3_attack/G16.png',
        'img/4_enemie_boss_chicken/3_attack/G17.png',
        'img/4_enemie_boss_chicken/3_attack/G18.png',
        'img/4_enemie_boss_chicken/3_attack/G19.png',
        'img/4_enemie_boss_chicken/3_attack/G20.png'
    ];

    IMAGES_HURT = [
        'img/4_enemie_boss_chicken/4_hurt/G21.png',
        'img/4_enemie_boss_chicken/4_hurt/G22.png',
        'img/4_enemie_boss_chicken/4_hurt/G23.png'
    ];

    IMAGES_DEAD = [
        'img/4_enemie_boss_chicken/5_dead/G24.png',
        'img/4_enemie_boss_chicken/5_dead/G25.png',
        'img/4_enemie_boss_chicken/5_dead/G26.png'
    ];

    world;
    endboss2 = new Endboss2();

    width = 300;
    height = 400;
    y = 55;
    currentX = 2775;
    blockBottleHit = false;
    speed = 10;
    bossInSight = false;
    moved = 0;
    isDead = false;
    youWon = false;
    showYouWon = false;
    noBottle = false;
    blockFalse = false;
    arrow = false;
    checkMoved = false;
    bossWalk = false;
    checkBossAttack = false;
    newBossEnemies = false;
    isHurt = false;
    isHurtAnim = false;
    blockAddNewBossEnemies = false;
    intBlockHit;
    intBossWalkAlert;
    intRun;
    attackInt;
    hurtInt;
    clearBossWalkInterval = false;
    initRestartRunning = false;

    bossDeadSound = new Audio('audio/bossDead.mp3');
    endSound = new Audio('audio/end.mp3');


    constructor() {

        super();
        this.loadImagesForConstructor();
        this.x = this.currentX;
        this.animate();
        this.applyGravity();
        setTimeout(() => { this.run() }, 2000);
        this.endboss2.endboss = this;
        this.handleMuteSoundsCreateNewLevel1EndbossNewSounds();
    }


    /**
     * 
     * handle mute sounds create new level1 endboss new sounds
     * 
     */
    handleMuteSoundsCreateNewLevel1EndbossNewSounds() {

        setTimeout(() => {
            const speakerStorage = sessionStorage.getItem("speaker");
            if (speakerStorage == "false" && !this.bossDeadSound.muted) this.bossDeadSound.muted = true;
            if (speakerStorage == "false" && !this.endSound.muted) this.endSound.muted = true;
            this.bossDeadSound.volume = 0.2;
            this.endSound.volume = 0.2;
        }, 1000);
    }


    /**
     * 
     * load images for constructor
     * 
     */
    loadImagesForConstructor() {

        this.loadImage(this.IMAGES_ALERT[0]);
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
    }


    /**
     * 
     * animate
     * 
     */
    animate() {

        this.checkBossWalking();
        this.intBlockHit = setInterval(() => {
            if (this.blockBottleHit) { this.blockBottleHitTrue() } else this.blockBottleHitFalse();
        }, 20);
    }


    /**
     * 
     * block bottle hit - true
     * 
     * 400 - back distance
     * 
     */
    blockBottleHitTrue() {
        if (this.x < this.currentX + 400) {
            this.moveRight();
            const randomNumber = Math.random();
            if (randomNumber > 0.5 && randomNumber < 0.55) this.speedY = 15;
        }
        this.moved = this.x - this.currentX;
    }


    /**
     * 
     * block bottle hit - false
     * 
     * 300 - forward tempo
     * 
     */
    blockBottleHitFalse() {

        if (this.x > this.currentX) {
            this.moveLeft();
            const randomNumber = Math.random();
            if (randomNumber > 0.5 && randomNumber < 0.60) this.speedY = 15;
            this.currentX -= this.moved / 300;
        } else { this.x = this.currentX; }
        if (this.x < 2555 && !this.bossInSight && !this.initRestartRunning) this.bossInSight = true;
    }


    /**
     * 
     * check boss walking
     * 
     */
    checkBossWalking() {

        this.intBossWalkAlert = setInterval(() => {
            if (!this.isAboveGround() && this.bossWalk) {
                if (!this.isHurtAnim && !this.youWon) this.playAnimation(this.IMAGES_WALKING);
            } else
                if (!this.bossWalk && !this.isAboveGround()) {
                    if (!this.isHurtAnim && !this.youWon) this.playAnimation(this.IMAGES_ALERT);
                }
        }, 200);
    }


    /**
     * 
     * check attack
     * 
     */
    checkAttack() {

        if (this.isAboveGround() && !this.bossWalk) {
            if (!this.checkBossAttack) {
                this.checkBossAttack = true;
                this.attackInt = setInterval(() => {
                    if (!this.isHurtAnim && !this.youWon) this.playAnimation(this.IMAGES_ATTACK);
                    if (!(this.isAboveGround() && !this.bossWalk)) { this.checkBossAttack = false; clearInterval(this.attackInt) }
                }, 150);
            }
        }
    }


    /**
     * 
     * run
     * 
     */
    run() {

        this.intRun = setInterval(() => {
            this.checkBottlesForBoss();
            this.checkBlockHitOfBottle();
            this.endboss2.checkYouWon();
            this.bossMoved();
            this.checkAttack();
            this.bossEnemies();
            this.checkIsHurt();
        }, 50);
    }


    /**
     * 
     * check is hurt
     * 
     */
    checkIsHurt() {

        if (this.isHurt) {
            if (!this.isHurtAnim) {
                this.isHurtAnim = true;
                this.hurtInt = setInterval(() => { if (!this.youWon) this.playAnimation(this.IMAGES_HURT) }, 200);
                setTimeout(() => {
                    this.isHurtAnim = false;
                    this.isHurt = false;
                    clearInterval(this.hurtInt);
                }, 4000);
            }
        }
    }


    /**
     * 
     * boss enemies
     * 
     */
    bossEnemies() {

        if (this.world.character.x > this.x - 500) {
            if (!this.newBossEnemies && !this.youWon) {
                this.newBossEnemies = true;
                this.addbossEnemies();
            }
        }
    }


    /**
     * 
     * add boss enemies
     * 
     */
    addbossEnemies() {

        if (!this.isDead && !this.blockAddNewBossEnemies) {
            const randomNumber = Math.random();
            if (randomNumber > 0.5) {
                const newEnemies = [new Chicken(720 * 4, 1 + (0.3 * Math.random()))];
                this.world.level.enemies.push(...newEnemies);
                setTimeout(() => this.newBossEnemies = false, 2000);
            } else {
                const newEnemies = [new ChickenSmall(720 * 4, 1 + (0.3 * Math.random()))];
                this.world.level.enemies.push(...newEnemies);
                setTimeout(() => this.newBossEnemies = false, 3000);
            }
        }
    }


    /**
     * 
     * boss moved
     * 
     */
    bossMoved() {

        if (!this.checkMoved) {
            this.checkMoved = true;
            const remX = this.x;
            setTimeout(() => { this.bossMovedWalkInterval(remX) }, 50);
        }
    }


    /**
     * 
     * boss moved - walk interval
     * 
     */
    bossMovedWalkInterval(remX) {

        if (remX != this.x && !this.isAboveGround()) {
            const walk = setInterval(() => {
                this.bossWalk = true;
                if (this.clearBossWalkInterval) { clearInterval(walk); this.clearBossWalkInterval = false }
            }, 20);
            setTimeout(() => { clearInterval(walk) }, 400);
        } else this.bossWalk = false;
        this.checkMoved = false;
    }


    /**
     * 
     * check block hit of bottle
     * 
     */
    checkBlockHitOfBottle() {

        if (this.world.throwableObjects.length != 0) {
            this.world.throwableObjects.forEach(bottle => this.endbossBlockBottleHit(bottle));
        }
    }


    /**
     * 
     * check block hit of bottle
     * 
     */
    endbossBlockBottleHit(bottle) {

        if (bottle.x > this.x - 90 && bottle.y - 90 < this.y + this.height) {
            this.blockBottleHit = true;
        } else {
            if (!this.blockFalse) {
                this.blockFalse = true;
                setTimeout(() => { this.blockBottleHit = false; this.blockFalse = false }, 2000);
            }
        }
    }


    /**
     * 
     * check bottles for endboss
     * 
     */
    checkBottlesForBoss() {

        if (this.world.availableBottles == 0 && this.endboss2.areBottlesNearby() && this.endboss2.checkBottlesOnGroundForEndboss()) {
            if (!this.noBottle && this.world.character.levelUp) {
                this.noBottle = true;
                this.endboss2.showArrowNoBottlesForEndboss();
                const newBottles = this.newBottlesForEndboss();
                this.world.level.bottles.push(...newBottles);
            }
        }
    }


    /**
     * 
     * new bottles for endboss
     * 
     */
    newBottlesForEndboss() {

        return [
            new BottleOnGround(this.x - 720 * 2 + 200 + 30 * Math.random(), 331, Math.random(), true),
            new BottleOnGround(this.x - 720 * 2 + 250 + 30 * Math.random(), 331, Math.random(), true),
            new BottleOnGround(this.x - 720 * 2 + 300 + 30 * Math.random(), 331, Math.random(), true),
            new BottleOnGround(this.x - 720 * 2 + 350 + 30 * Math.random(), 331, Math.random(), true),
        ];
    }

}










