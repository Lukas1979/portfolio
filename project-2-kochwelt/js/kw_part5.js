function getPart5() {

    return `

        <div class="hR">


       <main class="main-container">
        <h1>Cheesecake</h1>
        <img class="main-image-recipe" src="./img/cheesecake.jpg" alt="">
    </main>

    <div class="icons-container">

        <div class="icons">
            <img class="icons-img" src="./img/icons/clock-regular.svg" alt="">
            <p class="icons-p">30min</p>
        </div>
           
        <div class="icons">
            <img class="icons-img" src="./img/icons/brain-solid.svg" alt="">
            <p class="icons-p">normal</p>
        </div>

        <div class="icons">
            <img class="icons-img" src="./img/icons/calendar-alt-regular.svg" alt="">
            <p class="icons-p">27.07.2024</p>
        </div>

    </div>

    <div class="seperator"></div>

    <div class="portions-quantity">
        <span>Zutaten für</span>
        <input id="input5" class="input" type="number" min="1" max="10" value="1">
        <button onclick="button5()" class="button2" id="button5">Portionen</button>
    </div>


    <div class="table-container">
        <table id="table5">
            <tbody>
                <tr>
                    <td class="td_width">6</td>
                    <td>Eier</td>
                </tr>
                <tr>
                    <td>300 g</td>
                    <td>Zucker</td>
                </tr>
                <tr>
                    <td>900 g</td>
                    <td>Frischkäse</td>
                </tr>
                <tr>
                    <td>250 ml</td>
                    <td>Schlagsahne</td>
                </tr>
                 <tr>
                    <td>2 EL</td>
                    <td>Mehl</td>
                </tr>
                <tr>
                    <td>1 EL</td>
                    <td>Vanilleextrakt</td>
                </tr>
                
            </tbody>
        </table>
    </div>

    <div class="preparation-time">
        <h1>Zubereitung</h1>
        <div class="preparation">
            <div class="icons">
                <img class="icons-img" src="./img/icons/clock-regular.svg" alt="">
                <p class="icons-p">Vorbereitungszeit ca.10min</p>
            </div>
            <div class="icons">
                <img class="icons-img" src="./img/icons/clock-regular.svg" alt="">
                <p class="icons-p">Gesamtzeit ca.30min</p>
            </div>
        </div>
        <h2>Schritt 1</h2>
        <p>In einer großen Schüssel Eier, Zucker, Frischkäse, Sour Cream, Schlagsahne, Zitronensaft, Vanilleextrakt und Mehl mit einem Mixer bei mittlerer Geschwindigkeit zu einer glatten Masse verrühren. Die Mischung wirklich nur bei mittlerer Geschwindigkeit, und auch nicht zu lange vermischen, da sonst die Füllung zu fluffig wird und beim Backen aus der Form läuft.</p>

        <h2>Schritt 2</h2>
        <p>Den Ofen auf 220 °C (Ober-/Unterhitze) vorheizen.</p>

         <h2>Schritt 3</h2>
         <p>Die Springform aus dem Kühlschrank nehmen und die Frischkäsemischung über einen Löffelrücken in die Form gießen, damit die Füllung keine Löcher in den Keksboden reißt. Nun alles 5 oder auch 10 Minuten ruhen lassen.</p>

         <h2>Schritt 4</h2>
         <p>Danach die Springform in den Ofen stellen und den Kuchen 15 Minuten bei 220 °C backen. Danach die Temperatur auf 135 °C runterstellen und den Kuchen noch 1 Stunde backen.</p>
    </div>

    <section class="section2">
        <h1>Rezept erstellt von</h1>
        <div class="section2-div">
           <img class="section2-img" src="./img/profile.png" alt="">
           <p>Anja</p>
        </div>


    </section>


    </div>


    `;
}