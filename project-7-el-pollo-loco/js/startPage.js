
let impress = false;
let keyboardInfo = false;
let startGameClicked = false;
let initRestartGameRunning = false;

let stormSound = new Audio('audio/storm.mp3');
let keyPressSound = new Audio('audio/keyPress.mp3');
let doorSound = new Audio('audio/door.mp3');


/**
 * 
 * called when starting the app
 * 
 */
function startPageInit() {

    keyPressSound.volume = 0.5;
    doorSound.volume = 0.1;
    stormSound.volume = 0.5;
    moveCloud();
}


/**
 * 
 * called when body clicked
 * 
 */
function bodyClicked() {

    if (!startGameClicked) {
        hideKeys();
        hideImpressum();
    }
}


/**
 * 
 * menu start game clicked
 * 
 */
function startGame() {

    if (!startGameClicked) {
        startGameClicked = true;
        document.querySelector(".start span").style = "cursor: default";
        document.querySelector(".start span:nth-of-type(2)").style = "cursor: default; opacity: 0";
        document.querySelector(".start span:nth-of-type(3)").style = "cursor: default; opacity: 0";
        setTimeout(() => startGameContinuation(), 900);
    }
}


/**
 * 
 * menu start game clicked continuation
 * 
 */
function startGameContinuation() {

    document.querySelector(".start span:nth-of-type(1)").style = "cursor: default; opacity: 0";
    stormSound.play();
    setTimeout(() => {
        showMobileButtons();
        showScreenButton();
        world.showStartScreen = false;
        setTimeout(() => doorSound.play(), 200);
        world.character.startShowCharacter();
        document.querySelector(".cloud").classList.add("moved-start");
        document.querySelector(".cloud").style = "transition: right 3s ease-in-out";
    }, 1000);
}


/**
 * 
 * move cloud span 1 
 * 
 */
function moveCloud() {

    document.querySelector(".start span:nth-of-type(1)").addEventListener("mouseenter", function () {
        if (!startGameClicked) {
            document.querySelector(".cloud").classList.add("moved1");
            document.querySelector(".cloud").classList.remove("moved2");
            document.querySelector(".cloud").classList.remove("moved3");
            hideKeys();
            hideImpressum();
        }
    });
    moveCloud2();
}


/**
 * 
 * move cloud span 2
 * 
 */
function moveCloud2() {

    document.querySelector(".start span:nth-of-type(2)").addEventListener("mouseenter", function () {
        if (!startGameClicked) {
            document.querySelector(".cloud").classList.add("moved2");
            document.querySelector(".cloud").classList.remove("moved1");
            document.querySelector(".cloud").classList.remove("moved3");
            hideImpressum();
        }
    });
    moveCloud3();
}


/**
 * 
 * move cloud span 3
 * 
 */
function moveCloud3() {

    document.querySelector(".start span:nth-of-type(3)").addEventListener("mouseenter", function () {
        if (!startGameClicked) {
            document.querySelector(".cloud").classList.add("moved3");
            document.querySelector(".cloud").classList.remove("moved2");
            document.querySelector(".cloud").classList.remove("moved1");
            hideKeys();
        }
    });
}


/**
 * 
 * menu keyboard clicked
 * 
 */
function keys() {

    if (!startGameClicked) {
        if (!keyboardInfo) keyPressSound.play();
        keyboardInfo = true;
        document.querySelector(".sign-div").style = "opacity: 1";
        document.querySelector(".start span:nth-of-type(1)").style = "opacity: 0";
        document.querySelector(".start span:nth-of-type(1)").onclick = null;
        document.querySelector(".start span:nth-of-type(3)").style = "opacity: 0";
        document.querySelector(".start span:nth-of-type(3)").onclick = null;
    }
}


/**
 * 
 * hide keyboard description
 * 
 */
function hideKeys() {

    document.querySelector(".sign-div").style = "opacity: 0";
    document.querySelector(".start span:nth-of-type(1)").style = "opacity: 1";
    document.querySelector(".start span:nth-of-type(3)").style = "opacity: 1";
    setTimeout(() => {
        if (!keyboardInfo && !impress) { document.querySelector(".start span:nth-of-type(1)").onclick = function (event) { startGame(); stopProp(event) } }
        document.querySelector(".start span:nth-of-type(3)").onclick = function (event) { impressum(); stopProp(event) }
        keyboardInfo = false;
    }, 900);
}


/**
 * 
 * menu impressum clicked
 * 
 */
function impressum() {

    if (!startGameClicked) {
        if (!impress) {
            keyPressSound.play();
            document.querySelector(".window").style = "display: flex; opacity: 0";
            setTimeout(() => document.querySelector(".window").style = "display: flex; opacity: 1", 30);
            document.querySelector(".start span:nth-of-type(1)").style = "opacity: 0";
            document.querySelector(".start span:nth-of-type(1)").onclick = null;
            document.querySelector(".start span:nth-of-type(2)").style = "opacity: 0";
            document.querySelector(".start span:nth-of-type(2)").onclick = null;
            impress = true;
        }
    }
}


/**
 * 
 * hide impressum
 * 
 */
function hideImpressum() {

    if (impress) {
        document.querySelector(".window").style = "display: flex; opacity: 0";
        setTimeout(() => { document.querySelector(".window").style = ""; impress = false }, 900)
    }
    document.querySelector(".start span:nth-of-type(1)").style = "opacity: 1";
    document.querySelector(".start span:nth-of-type(2)").style = "opacity: 1";
    setTimeout(() => {
        if (!keyboardInfo && !impress) { document.querySelector(".start span:nth-of-type(1)").onclick = function (event) { startGame(); stopProp(event) } }
        document.querySelector(".start span:nth-of-type(2)").onclick = function (event) { keys(); stopProp(event) }
    }, 900);
}


/**
 * 
 * stop propagation
 * 
 */
function stopProp(event) {

    event.stopPropagation();
}


/**
 * 
 * back to start page clicked
 * 
 */
function backToStartPageClicked() {

    if (!initRestartGameRunning) location.href = 'index.html';
}






