class ChickenSmall extends MovableObject {

    y = 374;
    width = 50;
    height = 50;
    isDead = false;
    duringJump = false;
    blockMove = false;
    chick1;
    chick2;

    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
    ];


    constructor(x, forSpeed) {  

        super().loadImage('img/3_enemies_chicken/chicken_small/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.x = x;
        this.speed = 0.125 + forSpeed * Math.random();
        this.animate();
        this.applyGravity();
    }


    /**
     * 
     * animate
     * 
     */
    animate() {

        this.moveLeftInterval();
        this.playAnimationInterval();
    }


    /**
     * 
     * move left - interval
     * 
     */
    moveLeftInterval() {  

        setTimeout(() => {
            this.chick1 = setInterval(() => {
                if (world && world.character && world.character.gameStarted) {
                    if (this.x < -1000) this.isDead = true;
                    if (!this.blockMove) this.moveLeft();
                    if (this.isDead) clearInterval(this.chick1);
                }
            }, 1000 / 60);
        }, 500);
    }


    /**
     * 
     * play animation - interval
     * 
     */
    playAnimationInterval() {

        this.chick2 = setInterval(() => {
            if (!this.blockMove) this.playAnimation(this.IMAGES_WALKING);
            if (this.isDead) {
                clearInterval(this.chick2);
                this.loadImage('img/3_enemies_chicken/chicken_small/2_dead/dead.png');
            }
        }, 200);
    }

}





