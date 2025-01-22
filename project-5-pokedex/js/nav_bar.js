
function refreshSpan() {

    if (offset != 1020) {
        document.getElementById('start_end_bar1').innerHTML = (offset + 1) + " - " + (offset + 10);
    } else {
        document.getElementById('start_end_bar1').innerHTML = (offset + 1) + " - " + 1024;
    }
}

function refreshSpan2(end) {

    document.getElementById('start_end_bar1').innerHTML = "1 - " + end;
}

function refreshButtons(i) {

    document.getElementById('b' + i).classList.add('down');
    for (a = 1; a < 11; a++) {
        if (a != i) { document.getElementById('b' + a).classList.remove('down') }
    }
    currentButton = i;
}

function onClickButtons(i) {

    const a = i - currentButton;
    if (a < 6 && a > 0) onClickButtons2(angle += -(36 * a));
    if (a > 5) onClickButtons2(angle -= -(36 * (10 - a)));
    if (a > -6 && a < 0) onClickButtons2(angle += -(36 * a));
    if (a < -5) onClickButtons2(angle -= (36 * (10 + a)));
    hideAddedCard();
}

function onClickButtons2(angle) {

    carouselInner.style.transform = `translateZ(-400px) rotateY(${angle}deg)`;
}

function clickOnNav(idName) {

    document.getElementById(idName).style = 'scale: 0.75';
    setTimeout(() => document.getElementById(idName).style = 'scale: 1', 100);
}

function hideAddedCard() {

    if (!hideCardBlock) {
        const areaPokemon1 = document.getElementById('area1_pokemon');
        const area2Description = document.getElementById('area2_description');
        if (areaPokemon1 != null) { areaPokemon1.style.opacity = 0; setTimeout(hideAddedCardDisplayNone, 1000); }
        if (area2Description != null) { area2Description.style.opacity = 0; dimArrows(1); }
        hidePokemon.classList.add('opacity0');
        hidePokemon.classList.remove('opacity1');
        resetZoom();
        hideCardBlock = true;
        setTimeout(() => hideCardBlock = false, 1000);
    }
}

function hideAddedCardDisplayNone() {

    document.getElementById('area1_pokemon').style.display = 'none';
    document.getElementById('area2_description').style.display = 'none';
    zoomed = false;
    hidePokemon.onclick = buttonClicked;
    document.getElementById('main_content').style.cursor = 'default';
}

function hideCarousel() {

    hidePokemon.classList.add('opacity1');
    hidePokemon.classList.remove('opacity0');
    dimArrows(0);
}

function onFocusHideAddedCard() {

    hideAddedCard();
}

function dimArrows(spec) {

    document.getElementById('arrows_page2_1').style = `opacity: ${spec}`;
    document.getElementById('arrows_page2_2').style = `opacity: ${spec}`;
}








