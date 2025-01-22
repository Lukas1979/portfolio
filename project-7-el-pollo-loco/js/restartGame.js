/**
 * 
 * restart game clicked
 * 
 */
function restartGameClicked() {

    if (!initRestartGameRunning) {
        initRestartGameRunning = true;
        restartGameStep1();
        setTimeout(() => clearAllIntervalsOfLevel1(), 2400);
        setTimeout(() => restartGameStep2(), 2500);
        setTimeout(() => restartGameStep3(), 3000);
    }
}


/**
 * 
 * restart game step1
 * 
 */
function restartGameStep1() {

    const endboss = world.level.enemies.find(enemy => enemy instanceof Endboss);
    hideRestartMenu();
    world.statusBar.soundFadeAway(world.statusBar.gameOverSound);
    world.statusBar.soundFadeAway(endboss.endSound, 0.015);
    world.showArrow = false;
    world.statusBar.isGameOver = false;
    world.hideWorldForRestart = true;
    endboss.blockAddNewBossEnemies = true;
    endboss.initRestartRunning = true;
    endboss.bossInSight = false;
}


/**
 * 
 * restart game step2
 * 
 */
function restartGameStep2() {

    createLevel1();
    world.level = level1;
    const endboss = world.level.enemies.find(enemy => enemy instanceof Endboss);
    endboss.world = world;
    endboss.blockAddNewBossEnemies = false;
    world.character.x = -950;
    world.camera_x = 712;
    setTimeout(() => volumeUpSounds(), 2000);
}


/**
 * 
 * restart game step3
 * 
 */
function restartGameStep3() {

    world.character.currentImageCharDead = 0;
    world.hideWorldForRestart = false;
    world.hideWorldForRestartAlpha = 1;
    const endboss = world.level.enemies.find(enemy => enemy instanceof Endboss);
    endboss.world.character.interBlockYouWon = true;
    world.character.gameStarted = false;
    doorSound.play();
    world.character.startShowCharacter();
    setStatusBars();
    world.statusBar.charLowEnergyStart = false;
}


/**
 * 
 * clear all intervals of level1
 * 
 */
function clearAllIntervalsOfLevel1() {

    clearIntervalsOfChicks();
    world.level.clouds.forEach(cloud => clearInterval(cloud.intCloud));
    world.level.coins.forEach(coin => clearInterval(coin.intCoin));
    const endboss = world.level.enemies.find(enemy => enemy instanceof Endboss);
    clearInterval(endboss.intBlockHit);
    clearInterval(endboss.intBossWalkAlert);
    clearInterval(endboss.intRun);
    clearInterval(endboss.attackInt);
    clearInterval(endboss.hurtInt);
    clearInterval(endboss.intGravity);
    endboss.clearBossWalkInterval = true;
    clearInterval(endboss.endboss2.arrInt);
}


/**
 * 
 * clear intervals of chicks
 * 
 */
function clearIntervalsOfChicks() {

    world.level.enemies.forEach(enemy => {
        if (enemy instanceof Chicken || enemy instanceof ChickenSmall) {
            clearInterval(enemy.chick1);
            clearInterval(enemy.chick2);
            clearInterval(enemy.intGravity);
        }
    });
}


/**
 * 
 * set status bars
 * 
 */
function setStatusBars() {

    setStatusBarCharacter();
    world.statusBarCoin.percentage = 0;
    world.statusBarCoin.setPercentage(0);
    world.statusBarBottle.percentage = 0;
    world.statusBarBottle.setPercentage(0);
    world.availableBottles = 0;
    world.statusBarEndBoss.percentage = 100;
    world.statusBarEndBoss.setPercentage(100);
}


/**
 * 
 * set status bar - character
 * 
 */
function setStatusBarCharacter() {

    world.charLowEnergy = false;
    clearInterval(world.statusBar.energy);
    world.character.energy = 100;
    world.statusBar.percentage = 100;
    world.statusBar.setPercentage(100);
    world.statusBar.percentage0Running = false;
}


/**
 * 
 * hide restart menu
 * 
 */
function hideRestartMenu() {

    document.querySelector('.restart-div').style = "opacity: 0; display: inline-block;"
    setTimeout(() => {
        document.querySelector('.restart-div').style = "display: none";
        world.level.showRestartMenu = false;
        initRestartGameRunning = false;
    }, 2000);
}


/**
 * 
 * volume up sounds
 * 
 */
function volumeUpSounds() {

    if (!world.character.angryChick1Sound.paused) world.character.angryChick1Sound.pause();
    if (!world.character.angryChick2Sound.paused) world.character.angryChick2Sound.pause();
    world.character.angryChick1Sound.currentTime = 0;
    world.character.angryChick2Sound.currentTime = 0;
    world.character.angryChick1Sound.volume = 0.3;
    world.character.angryChick2Sound.volume = 0.3;
    world.character.levelUpSound.pause();
    world.character.levelUpSound.currentTime = 0;
    world.character.levelUpSound.volume = 0.2;
    volumeUpSoundsStatusBar();
}


/**
 * 
 * volume up sounds status bar
 * 
 */
function volumeUpSoundsStatusBar() {

    world.statusBar.gameOverSound.pause();
    world.statusBar.gameOverSound.currentTime = 0;
    world.statusBar.gameOverSound.volume = 0.4;
    world.statusBar.charLowEnergySound.pause();
    world.statusBar.charLowEnergySound.currentTime = 0;
    world.statusBar.charLowEnergySound.volume = 0.3;
}




