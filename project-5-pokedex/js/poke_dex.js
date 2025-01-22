
const carouselInner = document.getElementById('carouselInner');
const rotateLeftButton = document.getElementById('l1');
const rotateRightButton = document.getElementById('r1');
const zoomCardButton = document.getElementById('c1');
const loadMoreButton = document.getElementById('more1');
const loadLessButton = document.getElementById('less1');
const loading = document.getElementById('loading_dots');
const hidePokemon = document.getElementById('hide_pokemon');
const boar = document.getElementById('boar');
const addedCard = document.getElementById('added_card_area');
const hideMainContent = document.getElementById('hide_main_content');
const navBar2 = document.getElementById('nav_bar2');
const carouselTouch = document.getElementById('hide_pokemon');

let angle = 0;
let zoomed = false;
let offset = 0;
const limit = 10;
let randomId = 0;
let current10 = [];
let currentIdPokmonToView = 1;
let blockButtonLoad = false;
let currentButton = 1;
let hideCardBlock = false;

function start() {

    createPokemonCards();
    refreshSpan();
    refreshButtons(1);
}

// Funktion zum Drehen der Galerie
function rotateCarousel(direction) {
    //if (zoomed) return;
    angle += (direction === 'left' ? 36 : -36);
    carouselInner.style.transform = `translateZ(-400px) rotateY(${angle}deg)`;
    refreshButtons(calculateCarouselIndex() + 1);
    hideAddedCard();
}

// Funktion zum Vergrößern der mittleren Karte 
function zoomCard() {

    if (!zoomed && !blockButtonLoad && !hideCardBlock) {
        zoomed = true;
        hideCardBlock = true;
        setTimeout(() => hideCardBlock = false, 1000);
        const cards = carouselInner.getElementsByClassName('card');
        const cardsImg = carouselInner.getElementsByClassName('card-img');
        for (let card of cards) { card.classList.add('card-dimmed') };
        let carouselIndex = calculateCarouselIndex();
        const currentCardImg = cardsImg[carouselIndex];
        currentCardImg.style.transform += ' scale(1.2)';
        const currentCard = cards[carouselIndex];
        currentCard.style.transform += ' scale(1.45)';
        currentCard.classList.remove('card-dimmed');
        checkForEmptyCard(carouselIndex);
    }
    clickOnNav('c1');
}

function checkForEmptyCard(carouselIndex) {

    if (current10[carouselIndex] != 0) {
        currentIdPokmonToView = current10[carouselIndex];
        addPokemonToView(currentIdPokmonToView);
        hideCarousel();
        buttonClicked = hidePokemon.onclick;
        hidePokemon.onclick = null;
        document.getElementById('main_content').style.cursor = 'pointer';
    } else {
        setTimeout(resetZoom, 2000);
        setTimeout(() => zoomed = false, 2000);
    }
}

function calculateCarouselIndex() {

    let middleIndex = Math.round(angle / 36) % 10;
    if (middleIndex < 0) {
        middleIndex = Math.abs(middleIndex);
    } else {
        if (middleIndex > 0) {
            middleIndex = -(middleIndex);
        }
    }
    const carouselIndex = (middleIndex + 10) % 10
    return carouselIndex;
}

// Funktion zum Zurücksetzen der Zoomfunktion
function resetZoom() {

    const cards = carouselInner.getElementsByClassName('card');
    for (let card of cards) {
        card.style.transform = card.style.transform.replace(' scale(1.45)', '');
        card.classList.remove('card-dimmed');
    }
    const cardsImg = carouselInner.getElementsByClassName('card-img');
    for (let card of cardsImg) {
        card.style.transform = "";
    }
}

// Event Listener für die Buttons
rotateLeftButton.addEventListener('click', () => { rotateCarousel('left'); clickOnNav('l1') });
rotateRightButton.addEventListener('click', () => { rotateCarousel('right'); clickOnNav('r1') });
zoomCardButton.addEventListener('click', zoomCard);

loadMoreButton.addEventListener('click', () => {

    clickOnNav('more1');
    if (blockButtonLoad) return;
    if (randomId == 1020) {
        angle = 0;
        carouselInner.style.transform = `translateZ(-400px) rotateY(${angle}deg)`;
    }
    if (randomId == 1030) {
        randomId = 1;
        offset = 0;

        angle = 0;
        carouselInner.style.transform = `translateZ(-400px) rotateY(${angle}deg)`;
    } else { offset += limit };
    loadMore2();
});

function loadMore2() {

    createPokemonCards();
    refreshSpan();
    refreshButtons(calculateCarouselIndex() + 1);
    hideAddedCard();
}


loadLessButton.addEventListener('click', () => {

    clickOnNav('less1');
    if (blockButtonLoad) return;
    if (randomId == 10 && offset == 0) {
        randomId = 1030;
        offset = 1020;
        angle = 0;
        carouselInner.style.transform = `translateZ(-400px) rotateY(${angle}deg)`;
    } else { offset -= limit };
    createPokemonCards();
    refreshSpan();
    refreshButtons(calculateCarouselIndex() + 1);
    hideAddedCard();
});

function loadOn() {

    loading.style.display = 'flex';
    blockButtonLoad = true;

    if (document.activeElement !== searchInput) {

        searchInput.disabled = true;
        searchInput.value = "";
        searchInput.placeholder = "loading...";
    }
}

function loadOff() {

    loading.style.display = 'none';
    blockButtonLoad = false;

    if (document.activeElement !== searchInput) {

        searchInput.disabled = false;
        searchInput.placeholder = "enter a name";
    }
}

function mainContentClick() {

    if (zoomed) hideAddedCard();

}

function propOff(event) {

    event.stopPropagation();
}

carouselTouch.addEventListener('touchstart', (event) => {
    isDragging = true;
    onTouchStart(event);
});

carouselTouch.addEventListener('touchmove', onTouchMove);
carouselTouch.addEventListener('touchend', () => {
    isDragging = false;
    lastDirection = null;  // Zurücksetzen bei Ende des Dragging
});

// Event Listener für Mobile
navBar2.addEventListener('touchstart', (event) => {
    isDragging = true;
    onTouchStart(event);
});

navBar2.addEventListener('touchmove', onTouchMove);
navBar2.addEventListener('touchend', () => {
    isDragging = false;
    lastDirection = null;  // Zurücksetzen bei Ende des Dragging
});

// Variablen für den Status
let lastDirection = null; // Speichert die letzte Richtung

// Funktionen für Touch-Events auf mobilen Geräten
function onTouchStart(event) {
    startX = event.touches[0].clientX;
}

function onTouchMove(event) {
    if (!isDragging) return;
    const currentX = event.touches[0].clientX;
    const deltaX = currentX - startX;
    startX = currentX;
    let currentDirection = deltaX > 0 ? 'left' : 'right';
    // Überprüfen, ob die Richtung sich geändert hat oder lastDirection noch nicht gesetzt ist
    if (currentDirection !== lastDirection) {
        rotateCarousel(currentDirection);
        lastDirection = currentDirection; // Aktualisiert die letzte Richtung
    }
}


