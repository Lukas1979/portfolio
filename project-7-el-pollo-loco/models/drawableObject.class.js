class DrawableObject {

    img;
    imageCache = {};
    currentImage = 0;
    x = -300;
    y = 162;
    width = 140;
    height = 270;


    /**
     * 
     * load image
     * 
     */
    loadImage(path) {

        this.img = new Image();
        this.img.src = path;
    }


    /**
     * 
     * load imageges from array
     * 
     */
    loadImages(arr) {

        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }


    /**
     * 
     * canvas draw image
     * 
     */
    draw(ctx) {

        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }


    /**
     * 
     * endboss head offset 1
     * 
     */
    endbossHeadOffset1(obj) {

        let dirRbossL = 80;
        let dirLbossR = 125;
        if (this.y - obj.y <= 98) dirLbossR = 115;
        if (this.y - obj.y <= 62) dirLbossR = 105;
        if (this.y - obj.y <= 42) dirLbossR = 95;
        if (this.y - obj.y <= 14) dirLbossR = 85;
        if (this.y - obj.y <= -18) dirLbossR = 75;
        if (this.y - obj.y <= -30) dirLbossR = 65;
        return { dirRbossL, dirLbossR };
    }


    /**
     * 
     * endboss head offset 2
     * 
     */
    endbossHeadOffset2(obj) {

        let dirRbossR = 13;
        if (this.y - obj.y <= 62) dirRbossR = -5;
        if (this.y - obj.y <= 54) dirRbossR = -20;
        if (this.y - obj.y <= 42) dirRbossR = -30;
        let dirRbossLhead = 8;
        if (this.y - obj.y <= 94) dirRbossLhead = -7;
        if (this.y - obj.y <= 62) dirRbossLhead = -25;
        if (this.y - obj.y <= 42) dirRbossLhead = -35;
        let dirLbossL = 80;
        if (this.y - obj.y <= 86) dirLbossL = 50;
        if (this.y - obj.y <= 6) dirLbossL = 60;
        return { dirRbossR, dirRbossLhead, dirLbossL };
    }


    /**
     * 
     * endboss center offset
     * 
     */
    endbossCenterOffset(obj) {

        let dirRbossL = 80;
        if (this.y - obj.y >= 154) dirRbossL = 95;
        let dirLbossR = 125;
        if (this.y - obj.y >= 130) dirLbossR = 145;
        if (this.y - obj.y >= 158) dirLbossR = 155;
        return { dirRbossL, dirLbossR };
    }


    /**
     * 
     * endboss claws offset 1
     * 
     */
    endbossClawsOffset1(obj) {

        let dirRbossL = 100;
        if (this.y - obj.y >= 178) dirRbossL = 120;
        if (this.y - obj.y >= 206) dirRbossL = 140;
        if (this.y - obj.y >= 226) dirRbossL = 160;
        if (this.y - obj.y >= 246) dirRbossL = 180;
        return dirRbossL;
    }


    /**
     * 
     * endboss claws offset 2
     * 
     */
    endbossClawsOffset2(obj) {

        let dirLbossR = 155;
        if (this.y - obj.y >= 190) dirLbossR = 175;
        if (this.y - obj.y >= 226) dirLbossR = 185;
        if (this.y - obj.y >= 238) dirLbossR = 195;
        if (this.y - obj.y >= 258) dirLbossR = 220;
        let dirLbossL = 85;
        if (this.y - obj.y >= 182) dirLbossL = 105;
        if (this.y - obj.y >= 202) dirLbossL = 125;
        if (this.y - obj.y >= 210) dirLbossL = 145;
        if (this.y - obj.y >= 230) dirLbossL = 155;
        if (this.y - obj.y >= 258) dirLbossL = 165;
        return { dirLbossR, dirLbossL };
    }


    /**
     * 
     * endboss claws offset 3
     * 
     */
    endbossClawsOffset3(obj) {

        let clawsR = 13;
        if (this.y - obj.y >= 190 && this.y - obj.y <= 266) clawsR = 33;
        return clawsR;
    }

    
    /**
     * 
     * bottle hit endboss offset 1
     * 
     */
    bottleHitEndbossOffset1(obj, bottleFrame) {

        let bottLbossR = 14;
        if (bottleFrame.y - obj.y >= 151) bottLbossR = 30;
        if (bottleFrame.y - obj.y >= 185) bottLbossR = 40;
        if (bottleFrame.y - obj.y >= 219) bottLbossR = 50;
        if (bottleFrame.y - obj.y >= 251) bottLbossR = 60;
        if (bottleFrame.y - obj.y >= 271) bottLbossR = 70;
        if (bottleFrame.y - obj.y >= 275) bottLbossR = 80;
        if (bottleFrame.y - obj.y >= 284) bottLbossR = 90;
        if (bottleFrame.y - obj.y >= 291) bottLbossR = 100;
        if (bottleFrame.y - obj.y >= 350) bottLbossR = 110;
        return bottLbossR;
    }

    
    /**
     * 
     * bottle hit endboss offset 2
     * 
     */
    bottleHitEndbossOffset2(obj, bottleFrame) {

        let bottRbossL = 24;
        if (bottleFrame.y - obj.y >= 151) bottRbossL = 40;
        if (bottleFrame.y - obj.y >= 188) bottRbossL = 50;
        if (bottleFrame.y - obj.y >= 258) bottRbossL = 60;
        if (bottleFrame.y - obj.y >= 283) bottRbossL = 70;
        if (bottleFrame.y - obj.y >= 293) bottRbossL = 90;
        if (bottleFrame.y - obj.y >= 315) bottRbossL = 120;
        if (bottleFrame.y - obj.y >= 352) bottRbossL = 140;
        return bottRbossL;
    }


    /**
     * 
     * character chicken, chicken small offset
     * 
     */
    characterChickenChickenSmallOffset(obj) {

        let dirLeR = 67;
        if (this.y - obj.y >= -144) dirLeR = 72;
        if (this.y - obj.y >= -118) dirLeR = 77;
        if (this.y - obj.y >= -112) dirLeR = 82;
        if (this.y - obj.y >= -101) dirLeR = 92;
        if (this.y - obj.y >= -82) dirLeR = 102;
        return dirLeR;
    }

}









