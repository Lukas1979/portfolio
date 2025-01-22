class Coin extends MovableObject {

    height = 150;
    width = 150;
    intCoin;


    IMAGES_COIN = [
        'img/8_coin/coin_1.png',
        'img/8_coin/coin_2.png'   
    ]


    constructor(x, y) {

        super().loadImage('img/8_coin/coin_1.png');
        this.loadImages(this.IMAGES_COIN);
        this.x = x;
        this.y = y;
        this.animate();
    }


    /**
     * 
     * animate
     * 
     */
    animate() {

        this.currentImage = 0;
        this.intCoin = setInterval(() => this.playAnimation(this.IMAGES_COIN), 300);
    }
}





