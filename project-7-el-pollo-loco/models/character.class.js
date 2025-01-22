class Character extends MovableObject {

    IMAGES_WALKING = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png'
    ];

    IMAGES_JUMPING = [
        'img/2_character_pepe/3_jump/J-31.png',
        'img/2_character_pepe/3_jump/J-32.png',
        'img/2_character_pepe/3_jump/J-33.png',
        'img/2_character_pepe/3_jump/J-34.png',
        'img/2_character_pepe/3_jump/J-35.png',
        'img/2_character_pepe/3_jump/J-36.png',
        'img/2_character_pepe/3_jump/J-37.png',
        'img/2_character_pepe/3_jump/J-38.png',
        'img/2_character_pepe/3_jump/J-39.png'
    ];

    IMAGES_DEAD = [
        'img/2_character_pepe/5_dead/D-51.png',
        'img/2_character_pepe/5_dead/D-52.png',
        'img/2_character_pepe/5_dead/D-53.png',
        'img/2_character_pepe/5_dead/D-54.png',
        'img/2_character_pepe/5_dead/D-55.png',
        'img/2_character_pepe/5_dead/D-56.png',
        'img/2_character_pepe/5_dead/D-57.png'
    ];

    IMAGES_HURT = [
        'img/2_character_pepe/4_hurt/H-41.png',
        'img/2_character_pepe/4_hurt/H-42.png',
        'img/2_character_pepe/4_hurt/H-43.png',
    ];

    IMAGES_STANDS = [
        'img/2_character_pepe/1_idle/idle/i-1.png',
        'img/2_character_pepe/1_idle/idle/i-2.png',
        'img/2_character_pepe/1_idle/idle/i-3.png',
        'img/2_character_pepe/1_idle/idle/i-4.png',
        'img/2_character_pepe/1_idle/idle/i-5.png',
        'img/2_character_pepe/1_idle/idle/i-6.png',
        'img/2_character_pepe/1_idle/idle/i-7.png',
        'img/2_character_pepe/1_idle/idle/i-8.png',
        'img/2_character_pepe/1_idle/idle/i-9.png',
        'img/2_character_pepe/1_idle/idle/i-10.png'
    ];

    IMAGES_SLEEP = [
        'img/2_character_pepe/1_idle/long_idle/I-11.png',
        'img/2_character_pepe/1_idle/long_idle/I-12.png',
        'img/2_character_pepe/1_idle/long_idle/I-13.png',
        'img/2_character_pepe/1_idle/long_idle/I-14.png',
        'img/2_character_pepe/1_idle/long_idle/I-15.png',
        'img/2_character_pepe/1_idle/long_idle/I-16.png',
        'img/2_character_pepe/1_idle/long_idle/I-17.png',
        'img/2_character_pepe/1_idle/long_idle/I-18.png',
        'img/2_character_pepe/1_idle/long_idle/I-19.png',
        'img/2_character_pepe/1_idle/long_idle/I-20.png',
    ];

    noActionStartTime;
    noActionStart = false;
    speed = 4;
    walkingSound = new Audio('audio/desertWalking.mp3');
    charJumpSound = new Audio('audio/charJump.mp3');
    charLandingSound = new Audio('audio/charLanding.mp3');
    hitSound = new Audio('audio/chick.mp3');
    snoringSound = new Audio('audio/snoring.mp3');
    levelUpSound = new Audio('audio/levelUp.mp3');
    angryChick1Sound = new Audio('audio/angryChick1.mp3');
    angryChick2Sound = new Audio('audio/angryChick2.mp3');
    allowWalkingSoundPaused = false;
    showEndBossStatusBar = false;
    gameStarted = false;
    levelUp = false;
    interBlockYouWon = true;
    y = 165;
    x = -950;


    constructor() {

        super().loadImage('img/2_character_pepe/2_walk/W-21.png');
        this.setVolumeForSounds();
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_STANDS);
        this.loadImages(this.IMAGES_SLEEP);
        this.animate();
        this.applyGravity();
        setTimeout(() => this.allowWalkingSoundPaused = true, 100);
    }


    /**
     * 
     * set volume for sounds
     * 
     */
    setVolumeForSounds() {

        this.charJumpSound.volume = 0.4;
        this.charLandingSound.volume = 0.4;
        this.hitSound.volume = 0.1;
        this.snoringSound.volume = 0.2;
        this.levelUpSound.volume = 0.2;
        this.angryChick1Sound.volume = 0.3;
        this.angryChick2Sound.volume = 0.3;
    }


    /**
     * 
     * start, show character
     * 
     */
    startShowCharacter() {

        setTimeout(() => {
            this.world.keyboard.RIGHT = true;
            let showChar = setInterval(() => {
                if (this.x >= -712) {
                    this.world.keyboard.RIGHT = false;
                    clearInterval(showChar);
                    this.gameStarted = true;
                }
            }, 50);
        }, 200);
    }


    /**
     * 
     * animate
     * 
     */
    animate() {

        setInterval(() => {
            if (this.interBlockYouWon) {
                if (!this.walkingSound.paused && this.allowWalkingSoundPaused) this.walkingSound.pause();
                this.moveCharacterKeyRightLeftOn();
                this.characterKeyJumpOn();
                this.bossIsComing();
                if (this.x < this.world.level.char_rX_cam && this.x > this.world.level.char_lX_cam) { this.world.camera_x = -this.x + 80 }
            }
        }, 1000 / 60);
        this.animateIntervals();
    }


    /**
     * 
     * animate intervals
     * 
     */
    animateIntervals() {

        this.playAnimationCharNoActionInterval();
        this.playAnimationCharWalkingInterval();
        this.playAnimationCharDeadInterval();
        this.playAnimationCharJumpInterval();
    }


    /**
     * 
     * boss is coming
     * 
     */
    bossIsComing() {

        const endboss = this.world.level.enemies.find(enemy => enemy instanceof Endboss);
        if (this.x > endboss.x - 1600) { this.levelUpSound.play(); this.levelUp = true }
        if (this.x > endboss.x - 900) { this.angryChick1Sound.play(); this.angryChick2Sound.play() }
    }


    /**
     * 
     * character, jump - on
     * 
     */
    characterKeyJumpOn() {

        if (this.world.keyboard.SPACE && !this.isAboveGround() && !this.isDead()) {
            this.jump();
            this.charAwakening();
            this.charJumpSound.play();
            setTimeout(() => { this.charJumpSound.pause(); this.charJumpSound.currentTime = 0; }, 1000);
            setTimeout(() => { this.charLandingSound.play(); }, 700);
            setTimeout(() => { this.charLandingSound.pause(); this.charLandingSound.currentTime = 0; }, 1400);
        }
    }


    /**
     * 
     * move character, right or left - on
     * 
     */
    moveCharacterKeyRightLeftOn() {

        if (this.world.keyboard.RIGHT == true && this.x < this.world.level.char_rX && !this.isDead() && !this.world.charHitAboveGround) {
            this.otherDirection = false;
            this.moveRight();
            if (!this.isAboveGround()) this.walkingSound.play();
            this.charAwakening();
        }
        if (this.world.keyboard.RIGHT == true || this.world.keyboard.LEFT == true) {
            this.allowWalkingSoundPaused = false;
        } else if (this.gameStarted) this.allowWalkingSoundPaused = true;
        this.moveCharacterKeyLeftOn();
    }


    /**
     * 
     * move character, left - on
     * 
     */
    moveCharacterKeyLeftOn() {

        if (this.world.keyboard.LEFT == true && this.x > this.world.level.char_lX && !this.isDead() && !this.world.charHitAboveGround) {
            this.otherDirection = true;
            this.moveLeft();
            if (!this.isAboveGround()) this.walkingSound.play();
            this.charAwakening();
        }
    }


    /**
     * 
     * play animation character no action, stands or sleep - interval
     * 
     */
    playAnimationCharNoActionInterval() {

        setInterval(() => {
            if (this.noAction()) {
                if (!this.noActionStart) { this.noActionStart = true; this.noActionStartTime = new Date().getTime() }
                this.playAnimation(this.IMAGES_STANDS);
            } else this.charAwakening();
            const currentTime = new Date().getTime();
            this.playAnimationCharNoActionSleep(currentTime);
        }, 600);
    }


    /**
     * 
     * play animation character no action, sleep 
     * 
     */
    playAnimationCharNoActionSleep(currentTime) {

        const endboss = this.world.level.enemies.find(enemy => enemy instanceof Endboss);
        if ((currentTime - this.noActionStartTime > 5000) && !endboss.youWon) {
            if (world.character.gameStarted) {  
                this.playAnimation(this.IMAGES_SLEEP);
                this.snoringSound.play();
            }
        }
    }


    /**
     * 
     * play animation character walking - interval
     * 
     */
    playAnimationCharWalkingInterval() {

        setInterval(() => {
            if (this.interBlockYouWon) {
                if (this.isHurt() && !this.isDead()) {
                    this.playAnimation(this.IMAGES_HURT);
                } else
                    if ((this.world.keyboard.RIGHT == true || this.world.keyboard.LEFT == true) && !this.isAboveGround() && !this.isDead()) {
                        this.playAnimation(this.IMAGES_WALKING);
                    }
            }
        }, 150);
    }


    /**
     * 
     * play animation character dead - interval
     * 
     */
    playAnimationCharDeadInterval() {

        setInterval(() => { if (this.isDead()) this.playAnimationCharDead(this.IMAGES_DEAD) }, 310);
    }


    /**
     * 
     * play animation character jump - interval
     * 
     */
    playAnimationCharJumpInterval() {

        setInterval(() => {
            if (this.isAboveGround()) {
                if (this.jumpStart) { this.currentImageCharJump = 0; this.jumpStart = false }
                this.playAnimationCharJump(this.IMAGES_JUMPING);
            }
        }, 122);
    }


    /**
     * 
     * jump
     * 
     */
    jump() {

        this.jumpStart = true;
        this.speedY = 14;
    }


    /**
     * 
     * no action
     * 
     */
    noAction() {

        return !this.world.keyboard.RIGHT &&
            !this.world.keyboard.LEFT &&
            !this.world.keyboard.SPACE &&
            !this.isAboveGround() &&
            !this.isDead() &&
            !this.isHurt();
    }


    /**
     * 
     * character awakening
     * 
     */
    charAwakening() {

        this.noActionStart = false;
        this.noActionStartTime = new Date().getTime();
        this.snoringSound.pause();
        this.snoringSound.currentTime = 0;
    }
}



