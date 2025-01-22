class BottleOnGround extends MovableObject {

    height = 100;
    width = 100;
    bottleForEndboss;

    IMAGES_BOTTLE = [
        'img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        'img/6_salsa_bottle/2_salsa_bottle_on_ground.png'
    ]

    constructor(x, y, dir, endboss) {

        super();
        if (dir <= 0.5) { this.loadImage(this.IMAGES_BOTTLE[0]) } else this.loadImage(this.IMAGES_BOTTLE[1]);
        this.x = x;
        this.y = y;
        this.bottleForEndboss = endboss;
    }
}




