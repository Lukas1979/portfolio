let fotos = ['fotogram1.jpg', 'fotogram2.jpg', 'fotogram3.jpg', 'fotogram4.jpg', 'fotogram5.jpg', 'fotogram6.jpg', 'fotogram7.jpg', 'fotogram8.jpg', 'fotogram9.jpg', 'fotogram10.png', 'fotogram11.png', 'fotogram12.jpg'];

fotos.push("landscape-85928.jpg", "mountains-84514.jpg", "norway-85937.jpg");

let snumber = 0;
let idcurrent = "";
let l1 = 0;
let l2 = 0;


function showImg(number) {

    snumber = number - 1;

    document.getElementById('dimm').classList.remove('d-none');
    document.getElementById('fenster1').classList.remove('d-none');

    document.getElementById('fenster2').innerHTML = `

    <div class="foto-name" id="changeFotoName" onclick="bildF2(), func1(event)">${fotos[snumber]} </div>

    
    <div onclick="back()" class="x-div">x</div> 

    <div class="arrow-div-left"> <img src="bilder_fotogram/arrow_left.svg" alt="" class="arrow" onclick="bildChangeL(), func1(event)"> </div>
    <div class="arrow-div-right"> <img src="bilder_fotogram/arrow_right.svg" alt="" class="arrow" onclick="bildChangeR(), func1(event)"> </div>
    <div class="bild-number" id="changeBildNumber"> ${number} / ${fotos.length} </div>

    `;
    loadBilder(number);
}

function loadBilder(number) {

    snumber = number - 1;

    for (i = 0; i < fotos.length; i++) {

        let a = "bilder_fotogram/" + fotos[i];

        document.getElementById('fenster2').innerHTML += `

        <img src="${a}" alt="" class="bild-f2 aus" id="bild${i + 1}">

   `;
    }

    idcurrent = 'bild' + number;

    document.getElementById(idcurrent).classList.remove('aus');

}

function back() {

    document.getElementById('dimm').classList.add('d-none');
    document.getElementById('fenster1').classList.add('d-none');
}

function func1(event) {

    event.stopPropagation();
}

function bildF2() {

    number = snumber + 1;
    idcurrent = "bild" + number;
    document.getElementById(idcurrent).classList.toggle('object-fit');
}

function bildChangeL() {

    let left = "";
    let right = "";


    if (snumber + 1 == 1) {
        l1 = fotos.length;
    } else {
        l1 = snumber;
    }

    let current = snumber + 1;

    right = 'bild' + current;

    left = 'bild' + l1;

    document.getElementById(left).classList.remove('aus');
    document.getElementById(right).classList.add('aus');

    snumber--;

    if (snumber == -1) {
        snumber = fotos.length - 1;
    }

    changeFotoName();
}

function changeFotoName() {

    number = snumber + 1;

    document.getElementById("changeFotoName").innerHTML = fotos[snumber];
    document.getElementById("changeBildNumber").innerHTML = number + " / " + fotos.length;
}

function bildChangeR() {

    let left = "";
    let right = "";


    if (snumber + 1 == fotos.length) {
        r1 = 1;
    } else {
        r1 = snumber + 2;
    }

    let current = snumber + 1;

    right = 'bild' + r1;

    left = 'bild' + current;

    document.getElementById(left).classList.add('aus');
    document.getElementById(right).classList.remove('aus');

    snumber++;

    if (snumber == fotos.length) {
        snumber = 0;
    }

    changeFotoName();
}

function loadFotos() {


    for (img = 1; img < fotos.length + 1; img++) {

        let src = "bilder_fotogram/" + fotos[img - 1];

        document.getElementById("fotos").innerHTML += `

        <img onclick="showImg(${img})" src="${src}" alt="" class="bild">
    `;
    }

}







