document.addEventListener("DOMContentLoaded", function () {
    // Haetaan tallennettu pistemäärä localStoragesta
    // Jos pistemäärää ei löydy, käytetään oletusarvoa 0
    let score = localStorage.getItem("game1Score") || "0"; // Default to 0 if not found

    // Etsitään score elementti pisteet.html:stä ja laitetaan siihen pisteet
    document.getElementById("game1-score").textContent = `Pisteet: ${score}`;
});