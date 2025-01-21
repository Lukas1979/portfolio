function getPart2() {

    return `

        <div class="hR">


       <main class="main-container">
        <h1>Omelett</h1>
        <img class="main-image-recipe" src="./img/kitchen-775746_1920.jpg" alt="">
    </main>

    <div class="icons-container">

        <div class="icons">
            <img class="icons-img" src="./img/icons/clock-regular.svg" alt="">
            <p class="icons-p">50 min</p>
        </div>
           
        <div class="icons">
            <img class="icons-img" src="./img/icons/brain-solid.svg" alt="">
            <p class="icons-p">Anfenger</p>
        </div>

        <div class="icons">
            <img class="icons-img" src="./img/icons/calendar-alt-regular.svg" alt="">
            <p class="icons-p">27.07.2024</p>
        </div>

    </div>

    <div class="seperator"></div>

    <div class="portions-quantity">
        <span>Zutaten für</span>
        <input id="input2" class="input" type="number" min="1" max="10" value="1">
        <button onclick="button2()" class="button2" id="button2">Portionen</button>
    </div>


    <div class="table-container">
        <table id="table2">
            <tbody>
                <tr>
                    <td class="td_width">3</td>
                    <td>Eier</td>
                </tr>
                <tr>
                    <td>1 Prise</td>
                    <td>Salz</td>
                </tr>
                <tr>
                    <td>1 EL</td>
                    <td>Butter</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Pfeffer</td>
                </tr>
                
            </tbody>
        </table>
    </div>

    <div class="preparation-time">
        <h1>Zubereitung</h1>
        <div class="preparation">
            <div class="icons">
                <img class="icons-img" src="./img/icons/clock-regular.svg" alt="">
                <p class="icons-p">Vorbereitungszeit ca.? Minuten</p>
            </div>
            <div class="icons">
                <img class="icons-img" src="./img/icons/clock-regular.svg" alt="">
                <p class="icons-p">Gesamtzeit ca.? Minuten</p>
            </div>
        </div>
        <h2>Schritt 1</h2>
        <p>Am Anfang die Eier in eine Schüssel schlagen. Ungefähr einen Teelöffel Wasser hinzufügen und mit einer Gabel oder einem Rührbesen vermischen. Es sollte sich alles gut verbinden. Zum Schluss noch mit Salz und Pfeffer würzen.</p>

        <h2>Schritt 2</h2>
        <p>Eine beschichtete Pfanne mit hohen Rändern erhitzen. Die Temperatur sollte hoch sein. Dann den Esslöffel Butter hineingeben und sie in der Pfanne schwenken. Die Butter sollte komplett in der Pfanne verteilt sein (auch an den Rändern).</p>

         <h2>Schritt 3</h2>
         <p>Wenn sich der Schaum gelegt hat und die Butter kurz davor ist, braun zu werden, das Ei hineingeben. Ein paar Sekunden braten lassen, bis Blasen entstehen.</p>

         <h2>Schritt 4</h2>
         <p>Die Pfanne nun in kreisenden Bewegungen für 10-15 Sekunden schwenken und das Ei so in Bewegung halten. Dann, als würde man einen Pfannkuchen wenden wollen, die Pfanne immer wieder ruckartig zu sich ziehen. Jetzt sammelt sich das Ei an der gegenüberliegenden Seite der Pfanne und wird durch die Bewegungen mehrmals übereinander gelegt. Um das Omelett auf einen Teller zu geben, die Pfanne anschließend drehen, mit dem Griff weg vom Teller halten und einmal über den Teller stülpen. Das Omelett sollte nun mit der Unterseite nach oben auf den Teller fallen. Jetzt nur noch abschmecken und direkt genießen!</p>
    </div>

    <section class="section2">
        <h1>Rezept erstellt von</h1>
        <div class="section2-div">
           <img class="section2-img" src="./img/profile.png" alt="">
           <p>Dimitri</p>
        </div>

    </section>

    </div>

    `;
}