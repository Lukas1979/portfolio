
const img = new Image();
img.src = "img/9_intro_outro_screens/start/startscreen_1.png";

let impress = false;
let keyboard = false;


/**
 * 
 * called when starting the app
 * 
 */
function init() {

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    moveCloud();
    sessionStorage.setItem("speaker", "true");
}


/**
 * 
 * move cloud - span 1
 * 
 */
function moveCloud() {

    document.querySelector(".start span:nth-of-type(1)").addEventListener("mouseenter", function () {
        document.querySelector(".cloud").classList.add("moved1");
        document.querySelector(".cloud").classList.remove("moved2");
        document.querySelector(".cloud").classList.remove("moved3");
        hideKeys();
        hideImpressum();
    });
    moveCloud2();
}


/**
 * 
 * move cloud - span 2
 * 
 */
function moveCloud2() {

    document.querySelector(".start span:nth-of-type(2)").addEventListener("mouseenter", function () {
        document.querySelector(".cloud").classList.add("moved2");
        document.querySelector(".cloud").classList.remove("moved1");
        document.querySelector(".cloud").classList.remove("moved3");
        hideImpressum();
    });
    moveCloud3()
}


/**
 * 
 * move cloud - span 3
 * 
 */
function moveCloud3() {

    document.querySelector(".start span:nth-of-type(3)").addEventListener("mouseenter", function () {
        document.querySelector(".cloud").classList.add("moved3");
        document.querySelector(".cloud").classList.remove("moved2");
        document.querySelector(".cloud").classList.remove("moved1");
        hideKeys();
    });
}


/**
 * 
 * resize canvas
 * 
 */
function resizeCanvas() {

    var canvas = document.getElementById('canvas');
    var container = document.querySelector('.canvas-outer');
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
    drawIntroScreen();
}


/**
 * 
 * draw image
 * 
 */
function drawIntroScreen() {

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
}


/**
 * 
 * menu start game clicked
 * 
 */
function startGame() {

    document.querySelector(".start span:nth-of-type(2)").style = "opacity: 0";
    document.querySelector(".start span:nth-of-type(3)").style = "opacity: 0";
    setTimeout(() => { location.href = 'subpage.html' }, 1000);
}


/**
 * 
 * menu keyboard clicked
 * 
 */
function keys() {

    keyboard = true;
    document.querySelector(".sign-div").style = "opacity: 1";
    document.querySelector(".start span:nth-of-type(1)").style = "opacity: 0";
    document.querySelector(".start span:nth-of-type(1)").onclick = null;
    document.querySelector(".start span:nth-of-type(3)").style = "opacity: 0";
    document.querySelector(".start span:nth-of-type(3)").onclick = null;
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
        if (!keyboard && !impress) { document.querySelector(".start span:nth-of-type(1)").onclick = function (event) { startGame(); stopProp(event) } }
        document.querySelector(".start span:nth-of-type(3)").onclick = function (event) { impressum(); stopProp(event) }
        keyboard = false;
    }, 900);
}


/**
 * 
 * menu impressum clicked
 * 
 */
function impressum() {

    if (!impress) {
        document.querySelector(".window").style = "display: flex; opacity: 0";
        setTimeout(() => document.querySelector(".window").style = "display: flex; opacity: 1", 30);
        document.querySelector(".start span:nth-of-type(1)").style = "opacity: 0";
        document.querySelector(".start span:nth-of-type(1)").onclick = null;
        document.querySelector(".start span:nth-of-type(2)").style = "opacity: 0";
        document.querySelector(".start span:nth-of-type(2)").onclick = null;
        impress = true;
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
        if (!keyboard && !impress) { document.querySelector(".start span:nth-of-type(1)").onclick = function (event) { startGame(); stopProp(event) } }
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








