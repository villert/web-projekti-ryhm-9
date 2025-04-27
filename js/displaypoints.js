document.addEventListener("DOMContentLoaded", function () {
    // Haetaan tallennettu pistemäärä localStoragesta
    // Jos pistemäärää ei löydy, käytetään oletusarvoa 0
    let game1 = localStorage.getItem("game1Score") || "0"; // Default to 0 if not found
    let game2 = localStorage.getItem("game2Score") || "0"; // Default to 0 if not found
    let game3 = localStorage.getItem("game3Score") || "0"; // Default to 0 if not found
    let game4 = localStorage.getItem("game4Score") || "0"; // Default to 0 if not found

    // Etsitään score elementti pisteet.html:stä ja laitetaan siihen pisteet
    document.getElementById("game1-score").textContent = `Pisteet: ${game1}`;
    document.getElementById("game2-score").textContent = `Pisteet: ${game2}`;
    document.getElementById("game3-score").textContent = `Pisteet: ${game3}`;
    document.getElementById("game4-score").textContent = `Pisteet: ${game4}`;
});