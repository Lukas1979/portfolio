
const searchInput = document.getElementById('pokemonSearch');

let searchView = false;

async function fetchPokemonByUrl(url) {

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Netzwerkfehler');
        return response.json();
    } catch (error) {
        console.error(error);
        return { sprites: { other: { 'official-artwork': { front_default: 'default-image-url' } } }, name: 'Unbekannt' };
    }
}

searchInput.addEventListener('input', async function () {

    const query = searchInput.value.trim().toLowerCase();
    if (query.length < 3) return;     // Abbrechen, wenn die Eingabe weniger als 3 Zeichen hat

    try {
        loadOn();
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1024');
        if (!response.ok) throw new Error('Netzwerkfehler');
        const data = await response.json();
        const pokemonList = data.results;
        // Filtere Pokémon, die mit dem Suchbegriff übereinstimmen
        const filteredPokemon = pokemonList.filter(pokemon => pokemon.name.includes(query));
        if (filteredPokemon < 1) { loadOff(); return };
       inputSearchPart2(filteredPokemon);

    } catch (error) { console.error('Fehler bei der Suche:', error) }
});

function inputSearchPart2(filteredPokemon) {

    // Begrenze die Ergebnisse auf die ersten 10 Einträge
    const limitedPokemon = filteredPokemon.slice(0, 10);
    const angleIncrement = 36;  // 0 / limitedPokemon.length;
    let currentAngle = 0;
    resetToCard1View();
    createCarouselCards(limitedPokemon, currentAngle, angleIncrement);
    inputMatch();
    loadOff();
}

function resetToCard1View() {

    angle = 0;
    carouselInner.style.transform = `translateZ(-400px) rotateY(${angle}deg)`;
}

async function createCarouselCards(limitedPokemon, currentAngle, angleIncrement) {

    let cardsHtml = '';
    current10 = [];
    for (let i = 0; i < limitedPokemon.length; i++) {
        const pokemonData = await fetchPokemonByUrl(limitedPokemon[i].url);
        current10.push(pokemonData.id);
        cardsHtml += getCardsHtml(currentAngle, pokemonData);
        currentAngle += angleIncrement;
    }
    for (let i = limitedPokemon.length; i < 10; i++) {
        current10.push(0);
        cardsHtml += getEmptyCardsHtml(currentAngle);
        currentAngle += angleIncrement;
    }
    carouselInner.innerHTML = cardsHtml;
}

function inputMatch() {

    getStyle = document.getElementById('pokemonSearch').style;
    document.getElementById('pokemonSearch').style = 'border: 1px solid #f25546ff; border-radius: 6px';
    setTimeout(() => { document.getElementById('pokemonSearch').style = getStyle }, 180);
    refreshButtons(calculateCarouselIndex() + 1);
    if (currentPage == 1) {
        page1.style.display = 'none';
        page2.style.display = 'block';
        document.getElementById('pageArrow').src = "img/arrow2.png";
        currentPage = 2;
    }
    searchView = true;
}



