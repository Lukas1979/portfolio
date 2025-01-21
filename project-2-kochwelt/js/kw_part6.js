function getPart6() {
    return `

    <div class="hR">

    <main class="main-container">
        <h1>Rezept des Tages: &nbsp; Entenbraten mit Gelinggarantie</h1>
        <img class="main-image-recipe" src="img/duck2.png" alt="">
    </main>

    <div class="icons-container">

        <div class="icons">
            <img class="icons-img" src="./img/icons/clock-regular.svg" alt="">
            <p class="icons-p">20 Min.</p>
        </div>
           
        <div class="icons">
            <img class="icons-img" src="./img/icons/brain-solid.svg" alt="">
            <p class="icons-p">Anfänger</p>
        </div>

        <div class="icons">
            <img class="icons-img" src="./img/icons/calendar-alt-regular.svg" alt="">
            <p class="icons-p">08.08.2024</p>
        </div>

    </div>

    <div class="seperator"></div>

    <div class="portions-quantity">
        <span>Zutaten für</span>
        <input id="input6" class="input" type="number" min="1" max="10" value="1">
        <button onclick="button6()" class="button2" id="button6">Portionen</button>
    </div>


    <div class="table-container">
        <table id="table6">
            <tbody>
                <tr>
                    <td class="td_width">0.25</td>
                    <td>Ente(n) &nbsp; (ca. 3 kg)</td>
                </tr>
                <tr>
                    <td>0.25 Bund</td>
                    <td>Beifuß</td>
                </tr>
                <tr>
                    <td>0.5 EL</td>
                    <td>Salz</td>
                </tr>
                <tr>
                    <td>0.25 Liter</td>
                    <td>Wasser, kochendes</td>
                </tr>
                <tr>
                    <td>evtl.</td>
                    <td>Äpfel</td>
                </tr>                            
            </tbody>
        </table>
    </div>

    <div class="preparation-time">
        <h1>Zubereitung</h1>
        <div class="preparation">
            <div class="icons">
                <img class="icons-img" src="./img/icons/clock-regular.svg" alt="">
                <p class="icons-p">Vorbereitungszeit ca. 20 Minuten</p>
            </div>
            <div class="icons">
                <img class="icons-img" src="./img/icons/clock-regular.svg" alt="">
                <p class="icons-p">Gesamtzeit ca. 3 Stunden 20 Minuten</p>
            </div>
        </div>
        <h2>Schritt 1</h2>
        <p>Die küchenfertige Ente gründlich waschen und abtupfen. Mit reichlich Salz innen und außen einreiben. Den Beifuß in die Ente stecken, bei Bedarf auch Äpfel dazugeben.</p>

        <h2>Schritt 2</h2>
        <p>Die Ente in die Pfanne geben und mit dem kochenden Wasser übergießen. Mit dem Deckel die Pfanne verschließen und ca. 1 Stunde auf dem Herd köcheln lassen. Danach den Deckel abnehmen und die Pfanne oder den Bräter bei ca. 150 °C (Umluft) in den Backofen schieben. Die Ente ab und zu beschöpfen und wenden.</p>

         <h2>Schritt 3</h2>
         <p>Ca. 2 Stunden im Ofen lassen, die letzte halbe Stunde die Ente nur auf dem Rost goldbraun braten. Inzwischen die Soße mit Stärkemehl andicken.</p>

    </div>

    <section class="section2">
        <h1>Rezept erstellt von</h1>
        <div class="section2-div">
           <img class="section2-img" src="./img/profile.png" alt="">
           <p>Lukas</p>
        </div>

    </section>


    </div>

    `;
}