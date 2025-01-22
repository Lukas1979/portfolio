class MovableObject extends DrawableObject {

    speed = 0.125;
    otherDirection = false;
    energy = 100;
    lastHit = 0;
    speedY = 0;
    acceleration = 1;
    itFalls = false;
    jumpStart = false;
    currentImageCharJump = 0;
    currentImageCharDead = 0;
    notShowAgain;
    notShowAgainAlpha = 1;
    intGravity;


    /**
     * 
     * apply gravity
     * 
     */
    applyGravity() {

        this.intGravity = setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
                this.applyGravityY();
                if (this instanceof ThrowableObject && this.splash) { clearInterval(this.intGravity) }
                if ((this instanceof Character) && this.y < 165 && this.speedY < 0) {
                    this.itFalls = true;
                } else if (this instanceof Character) this.itFalls = false;
            }
        }, 40);
    }


    /**
     * 
     * apply gravity - Y correction
     * 
     */
    applyGravityY() {

        if (this instanceof Chicken && this.y > 365) this.y = 365;
        if (this instanceof Character && this.y > 165) this.y = 165;
        if (this instanceof ChickenSmall && this.y > 374) this.y = 374;
        if (this instanceof Endboss && this.y > 55) this.y = 55;
    }


    /**
     * 
     * is above ground
     * 
     */
    isAboveGround() {

        let objectOnGroundY;
        if (this instanceof Chicken) { objectOnGroundY = 365 };
        if (this instanceof ChickenSmall) { objectOnGroundY = 374 };
        if (this instanceof Character) { objectOnGroundY = 165 };
        if (this instanceof Endboss) { objectOnGroundY = 55 };
        if (this instanceof ThrowableObject) {
            return true;
        } else return this.y < objectOnGroundY;
    }


    /**
     * 
     * move left
     * 
     */
    moveLeft() {

        this.x -= this.speed;
    }


    /**
     * 
     * move right
     * 
     */
    moveRight() {

        this.x += this.speed;
    }


    /**
     * 
     * play animation
     * 
     */
    playAnimation(images) {

        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }


    /**
     * 
     * play animation character jump
     * 
     */
    playAnimationCharJump(images) {

        let i = this.currentImageCharJump % images.length;
        let path = images[i];
        if (!this.isHurt()) { this.img = this.imageCache[path] }
        this.currentImageCharJump++;
    }


    /**
     * 
     * play animation character dead
     * 
     */
    playAnimationCharDead(images) {

        let i = this.currentImageCharDead % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        if (i < 6) this.currentImageCharDead++;
    }


    /**
     * 
     * is colliding character - chicken, chicken small, endboss
     * 
     */
    isColliding(obj) {

        if (!(obj instanceof Endboss)) {
            if (!this.otherDirection) {
                let thresholds = [[-52, 130], [-25, 140], [-8, 150], [-3, 160], [2, 165], [9, 170], [14, 175], [18, 180], [23, 205]];
                let offset = thresholds.reduce((acc, [val, off]) => (this.x - obj.x >= val ? off : acc), 120);
                return this.x + 25 + this.width - 67 >= obj.x + 13 &&
                    this.x + 25 <= obj.x - 8 + obj.width &&
                    this.y + 108 + this.height - 128 >= obj.y &&
                    this.y + offset <= obj.y + obj.height;
            } else return this.isCollidingCharChickenChickenSmallCharLeft(obj);
        } else return this.characterEndbossCollision(obj);
    }


    /**
     * 
     * is colliding character - chicken, chicken small - character direction left
     * 
     */
    isCollidingCharChickenChickenSmallCharLeft(obj) {

        let dirLeR = this.characterChickenChickenSmallOffset(obj);
        return obj.x + obj.width >= this.x + 52 &&
            obj.x <= this.x + 25 + this.width - dirLeR &&
            this.y + 108 + this.height - 128 >= obj.y &&
            this.y + 125 <= obj.y + obj.height;
    }


    /**
     * 
     * character endboss collision
     * 
     */
    characterEndbossCollision(obj) {

        if (this.y - obj.y < 110 && this.y - obj.y > -40) return this.endbossHead(obj);
        if (this.y - obj.y >= 110 && this.y - obj.y < 166) return this.endbossCenter(obj);
        if (this.y - obj.y >= 166) return this.endbossClaws(obj);
    }


    /**
     * 
     * endboss head
     * 
     */
    endbossHead(obj) {

        let { dirRbossL, dirLbossR } = this.endbossHeadOffset1(obj);
        let { dirRbossR, dirRbossLhead, dirLbossL } = this.endbossHeadOffset2(obj);
        if (!this.otherDirection) {
            return this.x + 25 + this.width - 102 >= obj.x + dirRbossR &&
                this.x + dirRbossL <= obj.x - dirRbossLhead + obj.width &&
                this.y + 108 + this.height - 120 >= obj.y &&
                this.y + 108 <= obj.y + obj.height;
        } else {
            return obj.x + obj.width >= this.x + dirLbossL &&
                obj.x <= this.x + 25 + this.width - dirLbossR &&
                this.y + 108 + this.height - 120 >= obj.y &&
                this.y + 108 <= obj.y + obj.height;
        }
    }


    /**
     * 
     * endboss center
     * 
     */
    endbossCenter(obj) {

        let { dirRbossL, dirLbossR } = this.endbossCenterOffset(obj);
        if (!this.otherDirection) {
            return this.x + 25 + this.width - 102 >= obj.x + 13 &&
                this.x + dirRbossL <= obj.x - 8 + obj.width &&
                this.y + 108 + this.height - 120 >= obj.y &&
                this.y + 108 <= obj.y + obj.height;
        } else {
            return obj.x + obj.width >= this.x + 80 &&
                obj.x <= this.x + 25 + this.width - dirLbossR &&
                this.y + 108 + this.height - 120 >= obj.y &&
                this.y + 108 <= obj.y + obj.height;
        }
    }


    /**
     * 
     * endboss claws
     * 
     */
    endbossClaws(obj) {

        let dirRbossL = this.endbossClawsOffset1(obj);
        let { dirLbossR, dirLbossL } = this.endbossClawsOffset2(obj);
        let clawsR = this.endbossClawsOffset3(obj);
        if (!this.otherDirection) {
            return this.x + 25 + this.width - 142 >= obj.x + clawsR &&
                this.x + dirRbossL <= obj.x - 8 + obj.width &&
                this.y + 108 + this.height - 120 >= obj.y &&
                this.y + 138 <= obj.y + obj.height;
        } else return this.endbossClawsCharDirectionLeft(dirLbossL, dirLbossR, obj);

    }


    /**
     * 
     * endboss claws character direction left
     * 
     */
    endbossClawsCharDirectionLeft(dirLbossL, dirLbossR, obj) {

        return obj.x + obj.width >= this.x + dirLbossL &&
            obj.x <= this.x + 25 + this.width - dirLbossR &&
            this.y + 108 + this.height - 120 >= obj.y &&
            this.y + 138 <= obj.y + obj.height;
    }


    /**
     * 
     * is take coin
     * 
     */
    isTakeCoin(obj) {

        if (!this.otherDirection) {
            return this.x + 25 + this.width - 67 >= obj.x + 40 &&
                this.x + 25 <= obj.x + 53 + 13 + obj.width - 120 &&
                this.y + 108 + this.height - 120 >= obj.y + 53 &&
                this.y + 108 <= obj.y + 53 + obj.height - 106;
        } else {
            return obj.x + 53 + obj.width - 106 >= this.x + 25 &&
                obj.x + 53 <= this.x + 25 + this.width - 50 &&
                this.y + 108 + this.height - 120 >= obj.y + 53 &&
                this.y + 108 <= obj.y + 53 + obj.height - 106;
        }
    }


    /**
     * 
     * is take bottle
     * 
     */
    isTakeBottle(obj) {

        if (!this.otherDirection) {
            return this.x + 25 + this.width - 67 >= obj.x + 40 &&
                this.x + 25 <= obj.x + 40 + obj.width - 68 &&
                this.y + 108 + this.height - 120 >= obj.y + 14 &&
                this.y + 104 <= obj.y + 14 + obj.height;
        } else {
            return obj.x + 40 + obj.width - 90 >= this.x + 25 &&
                obj.x + 40 <= this.x + 25 + this.width - 50 &&
                this.y + 108 + this.height - 120 >= obj.y + 14 &&
                this.y + 104 <= obj.y + 14 + obj.height;
        }
    }


    /**
     * 
     * character hit
     * 
     */
    hit() {

        if (!this.isHurt() && !this.isDead()) {
            this.hitSound.play();
            setTimeout(() => { this.hitSound.pause(); this.hitSound.currentTime = 0; }, 550);
            this.energy -= 20;
            if (this.energy < 0) { this.energy = 0 } else this.lastHit = new Date().getTime();
        }
    }


    /**
     * 
     * is hurt
     * 
     */
    isHurt() {

        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 1;
    }


    /**
     * 
     * is dead
     * 
     */
    isDead() {

        return this.energy == 0;
    }
}











