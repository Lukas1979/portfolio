let canvas;
let world;
let speaker = true;
let keyboard = new Keyboard;
let fullScreenOn = false;

createLevel1();

const portraitQuery = window.matchMedia(
    "(orientation: portrait) and (max-width: 600px), (orientation: portrait) and (max-height: 600px)"
);


/**
 * 
 * called when starting the app
 * 
 */
function init() {

    startPageInit();
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    eventListener();
    portraitQuery.addEventListener("change", handlePortraitChange);
    handlePortraitChange(portraitQuery);
    setMutedForStartThisPage();
    canvasFullScreenChange();
}


/**
 * 
 * set muted for start this page
 * 
 */
function setMutedForStartThisPage() {

    const speakerStorage = sessionStorage.getItem("speaker");
    if (speakerStorage == "false") speakerClicked();
}


/**
 * 
 * event listener 'change' function
 * 
 */
function handlePortraitChange(e) {

    if (e.matches) { if (fullScreenOn) { exitFullScreen(); fullScreenOn = false } }
}


/**
 * 
 * show megaphone and fullscreen button
 * 
 */
function showScreenButton() {

    if (isMobileBrowser()) document.querySelector('.screen').style = "display: none";
    setTimeout(() => document.querySelector('.sp-sc').style = "opacity: 1", 500);
}


/**
 * 
 * megaphone clicked
 * 
 */
function speakerClicked() {

    const board = document.querySelector('.speaker img:nth-of-type(1)');
    if (speaker) { board.style = "opacity: 1" } else board.style = "opacity: 0";
    speaker = !speaker;
    toggleMuteAllSounds();
    sessionStorage.setItem("speaker", speaker);
}


/**
 * 
 * toggle mute all sounds
 * 
 */
function toggleMuteAllSounds() {

    toggleMuteCharacterSounds();
    toggleMuteEndBossSounds();
    toggleMuteStatusBarSounds();
    toggleMuteWorldSounds();
    keyPressSound.muted = !keyPressSound.muted;
    doorSound.muted = !doorSound.muted;
    stormSound.muted = !stormSound.muted;
}


/**
 * 
 * toggle mute character sounds
 * 
 */
function toggleMuteCharacterSounds() {

    world.character.walkingSound.muted = !world.character.walkingSound.muted;
    world.character.charJumpSound.muted = !world.character.charJumpSound.muted;
    world.character.charLandingSound.muted = !world.character.charLandingSound.muted;
    world.character.hitSound.muted = !world.character.hitSound.muted;
    world.character.snoringSound.muted = !world.character.snoringSound.muted;
    world.character.levelUpSound.muted = !world.character.levelUpSound.muted;
    world.character.angryChick1Sound.muted = !world.character.angryChick1Sound.muted;
    world.character.angryChick2Sound.muted = !world.character.angryChick2Sound.muted;
}


/**
 * 
 * toggle mute end boss sounds
 * 
 */
function toggleMuteEndBossSounds() {

    const endboss = world.level.enemies.find(enemy => enemy instanceof Endboss);
    endboss.bossDeadSound.muted = !endboss.bossDeadSound.muted;
    endboss.endSound.muted = !endboss.endSound.muted;
}


/**
 * 
 * toggle mute status bar sounds
 * 
 */
function toggleMuteStatusBarSounds() {

    world.statusBar.charLowEnergySound.muted = !world.statusBar.charLowEnergySound.muted;
    world.statusBar.dangerSound.muted = !world.statusBar.dangerSound.muted;
    world.statusBar.charDeadSound.muted = !world.statusBar.charDeadSound.muted;
    world.statusBar.gameOverSound.muted = !world.statusBar.gameOverSound.muted;
}


/**
 * 
 * toggle mute world sounds
 * 
 */
function toggleMuteWorldSounds() {

    world.throwSound.muted = !world.throwSound.muted;
    world.bubbleSound.muted = !world.bubbleSound.muted;
    world.muted = !world.muted;
}


/**
 * 
 * is mobile buttons, not fullscreen
 * 
 */
function showMobileButtons() {

    if (isMobileBrowser()) { document.querySelector('.lr-div').style = ""; document.querySelector('.jb-div').style = "" }
}


/**
 * 
 * detect is mobile browser, 
 * 
 */
function isMobileBrowser() {

    return mobileNow;
}


/**
 * 
 * eventListener
 * 
 */
function eventListener() {

    eventListener1();
    eventListener2();
    eventListener3();
    eventListener4();
    //document.body.addEventListener('contextmenu', (e) => e.preventDefault());
}


/**
 * 
 * eventListener 1
 * 
 */
function eventListener1() {

    window.addEventListener('keydown', (e) => {
        if (world.character.gameStarted) {
            if (e.key == 'ArrowLeft') keyboard.LEFT = true;
            if (e.key == 'ArrowRight') keyboard.RIGHT = true;
            if (e.key == 'ArrowUp') keyboard.UP = true;
            if (e.key == 'ArrowDown') keyboard.DOWN = true;
            if (e.key == ' ') keyboard.SPACE = true;
            if (e.key == 'd') keyboard.D = true;
        }
        initRestartMenuKeyboard(e);
    });
}


/**
 * 
 * init restart menu keyboard
 * 
 */
function initRestartMenuKeyboard(e) {

    const restartDiv = document.querySelector('.restart-div');
    const style = window.getComputedStyle(restartDiv);
    const opacity = parseFloat(style.opacity);
    if (e.key == 'r' && opacity > 0.6 && style.display !== 'none') restartGameClicked();
    if (e.key == 's' && opacity > 0.6 && style.display !== 'none' && !initRestartGameRunning) backToStartPageClicked();
}


/**
 * 
 * eventListener 2
 * 
 */
function eventListener2() {

    window.addEventListener('keyup', (e) => {
        if (world.character.gameStarted) {
            if (e.key == 'ArrowLeft') keyboard.LEFT = false;
            if (e.key == 'ArrowRight') keyboard.RIGHT = false;
            if (e.key == 'ArrowUp') keyboard.UP = false;
            if (e.key == 'ArrowDown') keyboard.DOWN = false;
            if (e.key == ' ') keyboard.SPACE = false;
            if (e.key == 'd') keyboard.D = false;
        }
    });
}


/**
 * 
 * eventListener 3
 * 
 */
function eventListener3() {

    document.querySelector('.left').addEventListener('touchstart', handleStartLeft);
    function handleStartLeft(event) { event.preventDefault(); if (world.character.gameStarted) keyboard.LEFT = true; }
    document.querySelector('.right').addEventListener('touchstart', handleStartRight);
    function handleStartRight(event) { event.preventDefault(); if (world.character.gameStarted) keyboard.RIGHT = true; }
    document.querySelector('.jump').addEventListener('touchstart', handleStartJump);
    function handleStartJump(event) { event.preventDefault(); if (world.character.gameStarted) keyboard.SPACE = true; }
    document.querySelector('.bottle').addEventListener('touchstart', handleStartThrow);
    function handleStartThrow(event) { event.preventDefault(); if (world.character.gameStarted) keyboard.D = true; }
}


/**
 * 
 * eventListener 4
 * 
 */
function eventListener4() {

    document.querySelector('.left').addEventListener('touchend', handleStartLeft);
    function handleStartLeft() { if (world.character.gameStarted) keyboard.LEFT = false; }
    document.querySelector('.right').addEventListener('touchend', handleStartRight);
    function handleStartRight() { if (world.character.gameStarted) keyboard.RIGHT = false; }
    document.querySelector('.jump').addEventListener('touchend', handleStartJump);
    function handleStartJump() { if (world.character.gameStarted) keyboard.SPACE = false; }
    document.querySelector('.bottle').addEventListener('touchend', handleStartThrow);
    function handleStartThrow() { if (world.character.gameStarted) keyboard.D = false; }
}


/**
 * 
 * fullscreen clicked
 * 
 */
function fullScreenClicked() {

    if (fullScreenOn) { exitFullScreen() } else enterFullScreen();
    fullScreenOn = !fullScreenOn;
}


/**
 * 
 * canvas full screen change
 * 
 */
function canvasFullScreenChange() {

    document.addEventListener('fullscreenchange', () => {
        const element = document.getElementById('canvas');
        if (document.fullscreenElement !== element) fullScreenOn = false;
    });
}


/**
 * 
 * enter fullscreen
 * 
 */
function enterFullScreen() {

    const element = document.getElementById('canvas');
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    }
}


/**
 * 
 * exit fullscreen
 * 
 */
function exitFullScreen() {

    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    }
}







