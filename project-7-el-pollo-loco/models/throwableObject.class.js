class ThrowableObject extends MovableObject {

    IMAGES_SPLASH = [

        'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png'
    ];

    IMAGES_ROTATION = [

        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
    ];

    splash = false;
    splashStart = false;
    splashNo = 0;
    throwL;
    throwR;
    bottleRotation;
    removeBottle = false;


    constructor(x, y) {

        super().loadImage('img/6_salsa_bottle/salsa_bottle.png');
        this.loadImages(this.IMAGES_SPLASH);
        this.loadImages(this.IMAGES_ROTATION);
        this.x = x;
        this.y = y;
        this.width = 70;
        this.height = 80;
        this.throw();
        this.checkSplash();
    }


    /**
     * 
     * throw
     * 
     */
    throw() {

        this.speedY = 15;
        this.applyGravity();
        if (!world.character.otherDirection) {
            this.throwR = setInterval(() => this.x += 5, 25);
            this.bottleRotation = setInterval(() => this.playAnimation(this.IMAGES_ROTATION), 200);
        } else {
            this.x -= 70;
            this.throwL = setInterval(() => this.x -= 5, 25);
            this.bottleRotation = setInterval(() => this.playAnimation(this.IMAGES_ROTATION), 200);
        }
    }


    /**
     * 
     * check splash
     * 
     */
    checkSplash() {

        setInterval(() => {
            if (this.splash && !this.splashStart) {
                this.splashStart = true;
                clearInterval(this.throwL);
                clearInterval(this.throwR);
                clearInterval(this.bottleRotation);
                this.currentImage = 0;
                this.splashInterval();
            }
        }, 50);
    }


    /**
     * 
     * splash interval
     * 
     */
    splashInterval() {

        const splashInter = setInterval(() => {
            if (this.currentImage < this.IMAGES_SPLASH.length) {
                this.playAnimation(this.IMAGES_SPLASH);
            } else clearInterval(splashInter);
        }, 40);
    }

}





