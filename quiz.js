const fragor = [
    {
        fraga: "1. Vilket år grundades Malmö FF?",
        alternativ: ["1910", "1904", "1920"],
        rattIndex: 0
    },
    {
        fraga: "2. Vilket lag mötte MFF i Europacupfinalen 1979?",
        alternativ: ["Real Madrid", "Nottingham Forest", "Liverpool"],
        rattIndex: 1
    },
    {
        fraga: "3. Hur många allsvenska matcher i rad spelade MFF utan förlust?",
        alternativ: ["34 matcher", "62 matcher", "49 matcher"],
        rattIndex: 2
    }
];

let nuvarandeFragaIndex = 0;
let antalRatt = 0;
let antalFel = 0;

// Starta quizet automatiskt när sidan laddas
visaFraga();

function visaFraga() {
    document.getElementById("nasta-knapp").style.display = "none";
    
    let aktuellFraga = fragor[nuvarandeFragaIndex];
    document.getElementById("fraga-text").innerText = aktuellFraga.fraga;
    
    let alternativBox = document.getElementById("alternativ-box");
    alternativBox.innerHTML = "";
    
    aktuellFraga.alternativ.forEach((text, index) => {
        let knapp = document.createElement("button");
        knapp.className = "svar-knapp";
        knapp.innerText = text;
        knapp.onclick = function() { valjSvar(index); };
        alternativBox.appendChild(knapp);
    });
}

function valjSvar(valtIndex) {
    let aktuellFraga = fragor[nuvarandeFragaIndex];
    let alternativBox = document.getElementById("alternativ-box");
    let knappar = alternativBox.getElementsByClassName("svar-knapp");
    
    for (let knapp of knappar) {
        knapp.disabled = true;
    }
    
    if (valtIndex === aktuellFraga.rattIndex) {
        knappar[valtIndex].style.backgroundColor = "#28a745";
        knappar[valtIndex].style.color = "white";
        antalRatt++;
    } else {
        knappar[valtIndex].style.backgroundColor = "#dc3545";
        knappar[valtIndex].style.color = "white";
        
        knappar[aktuellFraga.rattIndex].style.backgroundColor = "#28a745";
        knappar[aktuellFraga.rattIndex].style.color = "white";
        antalFel++;
    }
    
    document.getElementById("nasta-knapp").style.display = "inline-block";
}

function nastaFraga() {
    nuvarandeFragaIndex++;
    
    if (nuvarandeFragaIndex < fragor.length) {
        visaFraga();
    } else {
        visaResultat();
    }
}

function visaResultat() {
    // Göm frågan och "Nästa"-knappen
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("nasta-knapp").style.display = "none";
    
    // Skriv ut poängen i textfälten
    document.getElementById("text-ratt").innerText = antalRatt;
    document.getElementById("text-fel").innerText = antalFel;
    
    // Visa resultatboxen (där även "Gör om"-knappen ligger)
    document.getElementById("resultat-box").style.display = "block";
}

// Denna funktion återställer allt så man kan spela igen
function nollstallQuiz() {
    nuvarandeFragaIndex = 0;
    antalRatt = 0;
    antalFel = 0;
    
    // Göm resultatboxen och visa frågelådan igen
    document.getElementById("resultat-box").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    
    // Kör igång första frågan
    visaFraga();
}