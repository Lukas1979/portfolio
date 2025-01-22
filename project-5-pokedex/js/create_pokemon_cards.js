
const typeBackground = {
    fire: '#ed4426ff',
    grass: '#76cc54ff',
    bug: '#abba23ff',
    water: '#4f9bffff',
    poison: '#c25ec2',    
    steel: '#B8B8D0',
    steel: '#A8A77A',     
    electric: 'yellow',
    psychic: '#FF00FF',
    dark: "#333333",      
    ghost: "#00008B",
    rock: "#F5DEB3",             
    ground: "#6B8E23",
    normal: "#ADD8E6",
    fighting: "orange",
    flying: "#87CEEB",
    ice: "#E0FFFF",
};

let typeBackgroundColor1 = '';
let typeBackgroundColor2 = '#4f9bffff';

// Funktion zum Abrufen von Pokémon-Daten
async function fetchPokemon(id) {

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return response.json();
    } catch (error) {
        console.log('not loaded');
        return { sprites: { other: { 'official-artwork': { front_default: '../img/pokeball.png' } } }, name: 'not loaded', id: '' };
    }
}

// Funktion zum Erstellen der Pokémon-Karten

function createPokemonCards() {

    loadOn();
    const numPokemons = limit;
    const angleIncrement = 360 / numPokemons;
    let currentAngle = 0;
    let cardsHtml = '';
    current10 = [];
    createPokemonCards2(numPokemons, angleIncrement, currentAngle, cardsHtml, current10);
}

async function createPokemonCards2(numPokemons, angleIncrement, currentAngle, cardsHtml, current10) {

    for (let i = 0; i < numPokemons; i++) {
        randomId = offset + i + 1;
        if (randomId < 1025) {
            const data = await fetchPokemon(randomId);            
            cardsHtml += getCardsHtml(currentAngle, data);
            current10.push(randomId);
        } else {
            cardsHtml += getEmptyCardsHtml(currentAngle);
            current10.push(0);
        }
        currentAngle += angleIncrement;
    }
    carouselInner.innerHTML = cardsHtml;
    loadOff();
}

function addPokemonToView(id) {

    const area1 = document.getElementById('area1_pokemon');
    if (area1 != null) {
        document.getElementById('area1_pokemon').style.opacity = 0;
        document.getElementById('area2_description').style.opacity = 0;
        setTimeout(addPokemonToView2, 500, id);
    } else { addPokemonToView2(id) }
}

async function addPokemonToView2(id) {

    let c1 = true;
    typeBackgroundColor2 = "#4f9bffff";
    const data = await fetchPokemon(id);
    data.types.forEach(typeInfo => {
        const typeName = typeInfo.type.name;
        if (typeBackground[typeName]) {
            if (c1) {
                typeBackgroundColor1 = typeBackground[typeName];
                c1 = false;
            } else { typeBackgroundColor2 = typeBackground[typeName] }
        }
    });
    addedCard.innerHTML = getAddedCardsHtml(data, typeBackgroundColor1, typeBackgroundColor2);
    addPokemonToView3(id);
}

async function addPokemonToView3(id) {

    mainButton();
    setTimeout(() => { document.getElementById('area1_pokemon').style.opacity = 1 }, 50);
    setTimeout(() => { document.getElementById('area2_description').style.opacity = 1 }, 50);
    createEvolutionChain(id);
}


