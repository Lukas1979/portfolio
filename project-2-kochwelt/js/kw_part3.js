function getPart3() {

    return `

    <div class="body3">
      <div class="container3">
         <div class="contact-form3">
            <h2>Send us a message</h2>
            <form action="submit_form.php" method="POST" onsubmit="sendMail(event)">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>

                <label for="subject">Betreff:</label>
                <input type="text" id="subject" name="subject" required>

                <label for="message">Nachricht:</label>
                <textarea id="message" name="message" rows="10" required></textarea>
                <div class="body3-button"><button type="submit">Absenden</button></div>

            </form>

         </div>
         <div class="contact-info3">
            <h2>Contact us</h2> 
            <p>Bei Rückfragen oder Rezeptvorschlägen stehen wir Ihnen gerne zur Verfügung!</p>
            <p><span class="icon">📍</span> Addresse: <br> 8349 Muster, Musterstrasse 23</p>
            <p><span class="icon">📞</span> Telefon: <br> + 12942075404</p>
            <p><span class="icon">✉️</span> Email: <br> info@kochwelt.com</p>
            <p><span class="icon">🌐</span> Website: <br> www.kochwelt.com</p>
         </div>
      </div> 

      <div class="popup" id="popup">
        <p>Ihre Anfrage wird bearbeitet.</p>
        <button onclick="closePopup()">OK</button>
      </div>

      <div class="overlay" id="overlay"></div>

    </div>
    `;

}