function part1() {

    document.getElementById('getPart').innerHTML = getPart1();
}

function part2() {

    document.getElementById('getPart').innerHTML = getPart2();

    var input = document.getElementById("input2");
    input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("button2").click();
        }
    });
}

function part3() {

    document.getElementById('getPart').innerHTML = getPart3();
}

function part4() {

    document.getElementById('getPart').innerHTML = getPart4();
}

function part5() {

    document.getElementById('getPart').innerHTML = getPart5();

    var input = document.getElementById("input5");
    input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("button5").click();
        }
    });
} 

function part6() {

    document.getElementById('getPart').innerHTML = getPart6();

    var input = document.getElementById("input6");
    input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("button6").click();
        }
    });
}

function part7() {

    document.getElementById('getPart').innerHTML = getPart7();

    var input = document.getElementById("input7");
    input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("button7").click();
        }
    });
}

function menuResponsive() {

    document.getElementById('menu_hidden').classList.add('menu-hidden-show');
}

function backHH() {

    document.getElementById('menu_hidden').classList.remove('menu-hidden-show');
}

function stopBubb(event) {

    event.stopPropagation();
}

function facebookL() {
    window.open('http://www.facebook.com', '_blank');
}

function twitterL() {
    window.open('http://www.twitter.com', '_blank');
}

function instagramL() {
    window.open('http://www.instagram.com', '_blank');
}

function button2() {
    let myinput = +document.getElementById('input2').value;

    if (myinput < 1) {

        myinput = 1;
    }

    if (myinput > 10) {

        myinput = 10;
    }

    document.getElementById('input2').value = myinput;

    x = 3 * myinput
    y = 1 * myinput
    result1(x, y);
}

function result1(eier, butter) {

    document.getElementById('table2').innerHTML = `
        <tbody>
                <tr>
                    <td class="td_width">${eier}</td>
                    <td>Eier</td>
                </tr>
                <tr>
                    <td>${butter} Prise</td>
                    <td>Salz</td>
                </tr>
                <tr>
                    <td>${butter} EL</td>
                    <td>Butter</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Pfeffer</td>
                </tr>
                
        </tbody>
    `;
}

function button5() {
    let myinput = +document.getElementById('input5').value;

    if (myinput < 1) {

        myinput = 1;
    }

    if (myinput > 10) {

        myinput = 10;
    }

    document.getElementById('input5').value = myinput;

    x = 6 * myinput
    y = 300 * myinput
    v = 900 * myinput
    s = 250 * myinput
    m = 2 * myinput
    a = 1 * myinput
    result5(x, y, v, s, m, a);
}

function result5(eier, zucker, frischkäse, schlagsahne, mehl, vanilleeextrakt) {

    document.getElementById('table5').innerHTML = `
    <tbody>
                <tr>
                    <td class="td_width">${eier}</td>
                    <td>Eier</td>
                </tr>
                <tr>
                    <td>${zucker} g</td>
                    <td>Zucker</td>
                </tr>
                <tr>
                    <td>${frischkäse} g</td>
                    <td>Frischkäse</td>
                </tr>
                <tr>
                    <td>${schlagsahne} ml</td>
                    <td>Schlagsahne</td>
                </tr>
                 <tr>
                    <td>${mehl} EL</td>
                    <td>Mehl</td>
                </tr>
                <tr>
                    <td>${vanilleeextrakt} EL</td>
                    <td>Vanilleextrakt</td>
                </tr>
                
            </tbody>
    `;
}

function button6() {
    let myinput = +document.getElementById('input6').value;

    if (myinput < 1) {

        myinput = 1;
    }

    if (myinput > 10) {

        myinput = 10;
    }

    document.getElementById('input6').value = myinput;

    value1 = 0.25 * myinput;
    value2 = 0.5 * myinput;

    result6(value1, value2);
}

function result6(value1, value2) {

    document.getElementById('table6').innerHTML = `
            <tbody>
                <tr>
                    <td class="td_width">${value1}</td>
                    <td>Ente(n) &nbsp; (ca. 3 kg)</td>
                </tr>
                <tr>
                    <td>${value1} Bund</td>
                    <td>Beifuß</td>
                </tr>
                <tr>
                    <td>${value2} EL</td>
                    <td>Salz</td>
                </tr>
                <tr>
                    <td>${value1} Liter</td>
                    <td>Wasser, kochendes</td>
                </tr>
                <tr>
                    <td>evtl.</td>
                    <td>Äpfel</td>
                </tr>                            
            </tbody>
    `;
}

function button7() {
    let myinput = +document.getElementById('input7').value;

    if (myinput < 1) {

        myinput = 1;
    }

    if (myinput > 10) {

        myinput = 10;
    }

    document.getElementById('input7').value = myinput;

    value1 = 100 * myinput;
    value2 = 188 * myinput;
    value3 = 0.25 * myinput;
    value4 = 0.75 * myinput;

    result7(value1, value2, value3, value4);
}

function result7(value1, value2, value3, value4) {

    document.getElementById('table7').innerHTML = `

            <tbody>
                <tr>
                    <td class="td_width">${value1} g</td>
                    <td>Mehl (wer mag, kann Vollkornmehl verwenden)</td>
                </tr>
                <tr>
                    <td>${value2} ml</td>
                    <td>Milch, fettarme</td>
                </tr>
                <tr>
                    <td>${value3} Prise(n)</td>
                    <td>Salz</td>
                </tr>
                <tr>
                    <td>${value4} große</td>
                    <td>Ei (er)</td>
                </tr>
                <tr>
                    <td>${value3} Schuss</td>
                    <td>Mineralwasser</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Butter zum Backen</td>
                </tr>
            </tbody>
    `;
}

function showPopup(event) {
    event.preventDefault();
    document.getElementById('popup').classList.add('active');
    document.getElementById('overlay').classList.add('active');
    // Formularübermittlung mit JavaScript durchführen lassen
}

function closePopup() {
    document.getElementById('popup').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
    part3();
}

function sendMail(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch("https://formspree.io/f/xzzpbpan", {
        method: "POST",
        body: new FormData(event.target),
        headers: {
            'Accept': 'application/json'
        }
    }).then(showPopup(event)).catch((error) => {
        console.log(error);
    });
}


