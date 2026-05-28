// Väntar på att sidan ska laddas helt
document.addEventListener("DOMContentLoaded", function() {
    
    // Hämtar formuläret från HTML-koden
    const kontaktFormular = document.getElementById("kontakt-formular");

    if (kontaktFormular) {
        // Lyssnar efter när användaren klickar på "Skicka meddelande"
        kontaktFormular.addEventListener("submit", function(event) {
            // Hindrar sidan från att laddas om automatiskt
            event.preventDefault();

            // Hämtar ut texten som användaren skrev i fälten
            const namn = document.getElementById("namn").value;
            const epost = document.getElementById("epost").value;
            const amne = document.getElementById("amne").value;
            const meddelande = document.getElementById("meddelande").value;

            // Skapar ett bekräftelsemeddelande
            alert("Tack för ditt meddelande, " + namn + "!\n\nVi har tagit emot ditt ärende gällande '" + amne + "' och kommer att svara dig på " + epost + " så snart vi kan.");

            // Tömmer alla fält i formuläret så det är redo för ett nytt meddelande
            kontaktFormular.reset();
        });
    }
});