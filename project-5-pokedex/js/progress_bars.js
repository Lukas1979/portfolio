
const maxStats = {
    hp: 255, // Maximum possible value
    attack: 190, // Maximum possible value
    defense: 250, // Maximum possible value
    'special-attack': 194, // Maximum possible value
    'special-defense': 250, // Maximum possible value
    speed: 180 // Maximum possible value
};

let stats = false;

// Function to fetch Pokémon data and update the progress bars
async function showProgressBars(id) {

    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;
    if (!stats) { resetBars() };
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const stats = data.stats.reduce((acc, stat) => {
            acc[stat.stat.name] = stat.base_stat;
            return acc;
        }, {});
        for (const stat in stats) {              // Update all bars
            updateBar(stat, stats[stat]);
        }
    } catch (error) {
        console.error('Error fetching Pokémon data:', error)
    };
    stats = true;
}

// Function to update the progress bar
function updateBar(statName, value) {
    const bar = document.getElementById(`${statName}-bar`);
    const progress = bar.querySelector('.progress');
    const percentage = (value / maxStats[statName]) * 100;
    progress.style.width = `${percentage}%`;
}

function resetBars() {

    for (const statName in maxStats) {
        const bar = document.getElementById(`${statName}-bar`);
        const progress = bar.querySelector('.progress');
        progress.style.width = 0;
    }
}

