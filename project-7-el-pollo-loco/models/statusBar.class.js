class StatusBar extends DrawableObject {

    IMAGES = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png',
    ];

    charLowEnergySound = new Audio('audio/spookyWind.mp3');
    dangerSound = new Audio('audio/danger.mp3');
    charDeadSound = new Audio('audio/dunDun.mp3');
    gameOverSound = new Audio('audio/music1.mp3');
    percentage = 100;
    energy;
    charLowEnergyStart = false;
    isGameOver = false;
    percentage0Running = false;


    constructor() {

        super();
        this.charLowEnergySound.volume = 0.3;
        this.gameOverSound.volume = 0.4;
        this.dangerSound.volume = 0.6;
        this.charDeadSound.volume = 0.2;
        this.loadImages(this.IMAGES);
        this.x = 18;
        this.y = 36;
        this.width = 200;
        this.height = 50;
        this.setPercentage(100);
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
        this.isLowEnergy(percentage);
        this.isPercentage0(percentage);
    }


    /**
     * 
     * is percentage 0
     * 
     */
    isPercentage0(percentage) {

        if (percentage == 0 && !this.percentage0Running) {
            this.percentage0Running = true;
            clearInterval(this.energy);
            world.charLowEnergy = false;
            this.charDeadSound.play();
            this.muteSounds();
            setTimeout(() => { this.gameOverSound.play() }, 2000);
            this.fadeAwayCharLowEnergySound();
            setTimeout(() => this.world.level.restartMenu(), 4000);
        }
    }


    /**
     * 
     * mute sounds
     * 
     */
    muteSounds() {

        world.character.angryChick1Sound.volume = 0;
        world.character.angryChick2Sound.volume = 0;
        world.character.levelUpSound.volume = 0;
    }


    /**
     * 
     * fade away character low energy sound
     * 
     */
    fadeAwayCharLowEnergySound() {

        setTimeout(() => {
            this.isGameOver = true;
            this.soundFadeAway(this.charLowEnergySound);
        }, 2800);
    }


    /**
     * 
     * is low energy
     * 
     */
    isLowEnergy(percentage) {

        if (percentage == 20) {
            if (!this.charLowEnergyStart) {
                this.charLowEnergyStart = true;
                this.charLowEnergySound.loop = true;
                this.charLowEnergySound.play();
                this.dangerSound.play();
                this.energy = setInterval(() => { world.charLowEnergy = !world.charLowEnergy }, 600);
            }
        }
    }


    /**
     * 
     * sound fade away
     * 
     */
    soundFadeAway(sound, speed) {

        if (speed) { speed = speed } else speed = 0.03;
        let soundVol = sound.volume;
        let soundInterval = setInterval(() => {
            if (soundVol > 0) {
                sound.volume = soundVol;
                soundVol -= speed;
                if (soundVol < 0) { soundVol = 0; sound.volume = soundVol }
            } else clearInterval(soundInterval);
        }, 200);
    }


    /**
     * 
     * resolve image index
     * 
     */
    resolveImageIndex() {

        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage == 80) {
            return 4;
        } else if (this.percentage == 60) {
            return 3;
        } else if (this.percentage == 40) {
            return 2;
        } else if (this.percentage == 20) {
            return 1;
        } else return 0;
    }

}





