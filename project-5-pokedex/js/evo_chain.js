// Funktion zum Abrufen der Evolutionskette
async function fetchEvolutionChain(id) {
    const speciesResponse = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);
    const speciesData = await speciesResponse.json();
    const evolutionResponse = await fetch(speciesData.evolution_chain.url);
    const evolutionData = await evolutionResponse.json();
    return evolutionData.chain;
}

// Funktion zum Erstellen der Evolutionskette
async function createEvolutionChain(id) {

    const evolutionChain = document.getElementById('evo_chain');
    evolutionChain.innerHTML = "";
    const evolutionData = await fetchEvolutionChain(id);
    let currentEvolution = evolutionData;
    let i = 0;
    while (currentEvolution) {
        const pokemonData = await fetchPokemon(currentEvolution.species.name);
        i++;
        evolutionChain.innerHTML += getEvoChain(pokemonData, i);
        currentEvolution = currentEvolution.evolves_to[0];
    }
    checkForDrawArrows(i);
}

function checkForDrawArrows(i) {

    if (i == 3) {
        document.getElementById('arrow_div1').innerHTML = drawArrows(1);
        document.getElementById('arrow_div2').innerHTML = drawArrows(2);
        document.getElementById('arrow_div1').classList.remove('display-none');
        document.getElementById('arrow_div2').classList.remove('display-none');
    }
    if (i == 2) {
        document.getElementById('arrow_div1').innerHTML = drawArrows(1);
        document.getElementById('arrow_div1').classList.remove('display-none');
        document.getElementById('arrow_div2').classList.add('display-none');
    }
    if (i == 1) {
        document.getElementById('arrow_div1').classList.add('display-none');
    }
}




