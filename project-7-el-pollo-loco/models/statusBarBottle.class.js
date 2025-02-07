class StatusBarBottle extends DrawableObject {

    IMAGES = [
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/20.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/40.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/60.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/80.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/100.png'
    ]

    percentage = 0;


    constructor() {

        super();
        this.loadImages(this.IMAGES);
        this.x = 18;
        this.y = 3;
        this.width = 200;
        this.height = 50;
        this.setPercentage(0);
    }


    /**
     * 
     * set percentage
     * 
     */
    setPercentage(percentage) {

        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }


    /**
     * 
     * resolve image index
     * 
     */
    resolveImageIndex() {

        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage < 100 && this.percentage >= 80) {
            return 4;
        } else if (this.percentage < 80 && this.percentage >= 60) {
            return 3;
        } else if (this.percentage < 60 && this.percentage >= 40) {
            return 2;
        } else if (this.percentage < 40 && this.percentage >= 20) {
            return 1;
        } else return 0;
    }

}








