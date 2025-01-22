
function getCardsHtml(currentAngle, data) {

    return `

    <div class="card" style="transform: rotateY(${currentAngle}deg) translateZ(var(--tranZ));">
    <img src="${data.sprites.other['official-artwork'].front_default}" alt="${data.name}" class="card-img">
    <div class="card-name">${data.name.charAt(0).toUpperCase() + data.name.slice(1)}</div>
    <div class="pokemon-id">${data.id}</div>
    </div>
    
    `;
}

function getEmptyCardsHtml(currentAngle) {

    return `

    <div class="card" style="transform: rotateY(${currentAngle}deg) translateZ(var(--tranZ));">
    <div class="card-img-no"><img src="img/bild8.png" class="card-img"></div>
    </div>
     
    `;
}

function getAddedCardsHtml(data, typeBackgroundColor1) {

    return `

    <div onclick="propOff(event)" class="area1" id="area1_pokemon" style="background-color: ${typeBackgroundColor1};
        box-shadow: inset rgba(0, 0, 0, 1) 0px 0px 40px 0px, rgba(0, 0, 0, .3) 0px 30px 100px -24px">

        <img src="${data.sprites.other['official-artwork'].front_default}" alt="${data.name}" class="card-img2">
    </div>


    <div onclick="propOff(event)" class="area2" id="area2_description" style="box-shadow: 0px -36px 36px -28px inset">

        <div class="added-card-name"><span class="id-card-added">#${data.id}</span>${data.name.charAt(0).toUpperCase() + data.name.slice(1)}</div>
    
        <div class="buttons-card2">  
            <div class="btn-card2" id="btn1" onclick="mainButton()">main</div> 
            <div class="btn-card2" id="btn2" onclick="statsButton()">stats</div> 
            <div class="btn-card2" id="btn3" onclick="evoButton()">evo chain</div>  
        </div>

        <div class="main-card2" id="main"> Height: ${data.height / 10} m <br> Weight: ${data.weight / 10} kg <br>
            Base experience: ${data.base_experience} <br>
            Skills: ${data.abilities.map(ability => ability.ability.name).join(', ')} <br>
            Type: ${data.types.map(type => type.type.name).join(', ')} 
        </div>       

        <div class="evo-chain" id="evo_chain"></div>

        <div class="stats" id="stats">

            <div class="stats-div">
                <span class="label">HP</span>

                <div class="bar" id="hp-bar">
                    <div class="progress"></div>
                </div>
            </div>
 
            <div class="stats-div">
                <span class="label">Attack</span>

                <div class="bar" id="attack-bar">
                    <div class="progress"></div>
                </div>
            </div>
        
            <div class="stats-div">
                <span class="label">Defense</span>

                <div class="bar" id="defense-bar">
                    <div class="progress"></div>
                </div>
            </div>

            <div class="stats-div">
                <span class="label">Special Attack</span>

                <div class="bar" id="special-attack-bar">
                    <div class="progress"></div>
                </div>
            </div>
            

            <div class="stats-div">
                <span class="label">Special Defense</span>

                <div class="bar" id="special-defense-bar">
                    <div class="progress"></div>
                </div>
            </div>

            <div class="stats-div">
                <span class="label">Speed</span>

                <div class="bar" id="speed-bar">
                    <div class="progress"></div>
                </div>
            </div>

        </div>
    </div>

    `;
}

function drawArrows(i) {

    return `

    <svg width="38" height="42" xmlns="http://www.w3.org/2000/svg" class="drawnArrows${i}">
    <!-- Erster Pfeil -->
    <path d="M10 10 L20 20 L10 30" stroke="#e1f0faff" stroke-width="2" fill="none" stroke-linecap="round" />
    <path d="M20 10 L30 20 L20 30" stroke="#e1f0faff" stroke-width="2" fill="none" stroke-linecap="round" />
        
    `;
}

function getEvoChain(pokemonData, i) {

    return `
    
        <div class="chain-link">
            <img src = ${pokemonData.sprites.other['official-artwork'].front_default} class="evo-img">
            ${pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)}
        </div>

        <div id="arrow_div${i}" class="arrow-div${i}"></div>    
    
    `;
}

function getCard40Templates(data, id, type) {

    return `
    
        <div class="card40" onclick="cardPage1Click(${id})">

            <div class="card40-1"><div class="card40-1-name">${data.name.charAt(0).toUpperCase() + data.name.slice(1)}</div></div>
            <div class="card40-2 to-center" style="background: ${typeBackgroundColor1}"><img src="${data.sprites.other['official-artwork'].front_default}" alt="${data.name}" class="card-img-page1"></div>
            <div class="card40-3"><div class="id-Pokemon-Page1">${data.id}</div><img src="https://veekun.com/dex/media/types/en/${type}.png" alt="Grass Type Icon"></div>

        </div>        
    `;
}