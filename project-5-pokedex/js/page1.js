
let section1 = document.getElementById('section1');
let page1 = document.getElementById('page1');
let page2 = document.getElementById('page2');

let currentPage = 1;
let spanPage1 = 40;


function page1start() {

    show40pokemon(1, 40);
    refreshSpan2(spanPage1);
}

async function show40pokemon(start, end) {

    let type = "";
    loadOn();
    disableHoverFor40cards();
    show40pokemon2(start, end, type);
}

async function show40pokemon2(start, end, type) {

    for (id = start; id < end + 1; id++) {
        let c1 = true;
        typeBackgroundColor2 = "#4f9bffff";
        const data = await fetchPokemon(id);
        data.types.forEach(typeInfo => {
            const typeName = typeInfo.type.name;
            if (typeBackground[typeName]) {
                if (c1) {
                    typeBackgroundColor1 = typeBackground[typeName];
                    c1 = false;
                    type = typeName;
                } else { typeBackgroundColor2 = typeBackground[typeName] }
            }
        });        
        section1.innerHTML += getCard40Templates(data, id, type);       
    }
    show40pokemon3();
}

function show40pokemon3() {

    loadOff();
    enableHoverFor40cards();
}

function enableHoverFor40cards() {

    const cards = document.getElementById('section1').getElementsByClassName('card40');
    for (let card of cards) { card.classList.add('hover-enabled') };    
}

function disableHoverFor40cards() {

    const cards = document.getElementById('section1').getElementsByClassName('card40');
    for (let card of cards) { card.classList.remove('hover-enabled') };    
}

function arrowClick() {

    if (currentPage == 1) {
        page1.style.display = 'none';
        page2.style.display = 'block';
        document.getElementById('pageArrow').src = "img/arrow2.png";
        refreshSpan();
        currentPage = 2;
    } else {
        page1.style.display = 'block';
        page2.style.display = 'none';
        document.getElementById('pageArrow').src = "img/arrow1.png";
        refreshSpan2(spanPage1);
        currentPage = 1;
    }
}

function cardPage1Click(id) {

    let newOffset = Math.trunc((id - 1) / 10) * 10;
    if ((offset != newOffset) || searchView) {
        offset = newOffset;
        createPokemonCards();
        searchView = false;
    }
    const numberString = id.toString();
    let lastDigit = parseInt(numberString[numberString.length - 1], 10);
    refreshSpan()
    arrowClick();
    if (lastDigit == 0) lastDigit = 10;
    setTimeout(onClickButtons, 100, lastDigit);
    setTimeout(refreshButtons, 100, lastDigit);
}

function loadMore40() {

    if (spanPage1 != 1024 && !blockButtonLoad) {
        if (spanPage1 == 1000) {
            show40pokemon(spanPage1 + 1, 1024);
            spanPage1 = 1024;
            refreshSpan2(spanPage1);
        } else {
            show40pokemon(spanPage1 + 1, spanPage1 + 40);
            spanPage1 = spanPage1 + 40;
            refreshSpan2(spanPage1);
        }
    }
}











