//Määritellään kysymykset
let answers = [
    {correct: "science", incorrect: "sciense"},
    {correct: "achieve", incorrect: "acheive"},
    {correct: "acknowledge", incorrect: "aknowledge"},
    {correct: "existence", incorrect: "existance"},
    {correct: "equipment", incorrect: "equiptment"},
    {correct: "receipt", incorrect: "reciept"},
    {correct: "vacuum", incorrect: "vaccuum"},
    {correct: "repetition", incorrect: "repitition"},
    {correct: "marshmallow", incorrect: "marshmellow"},
    {correct: "immediately", incorrect: "imediately"}
];

let index = 0;
let points = parseInt(localStorage.getItem('game4Score')) || 0;

//Haetaan HTML elementit 
let form = document.querySelector("#questionform");
let answer1Radio = document.querySelector("#answer1");
let answer2Radio = document.querySelector("#answer2");
let label1 = document.querySelector("#label1");
let label2 = document.querySelector("#label2");

let currentCorrect = "";

//Vastauksen käsittely
form.addEventListener("submit", answer);

//Käsittelee käyttäjän vastauksen, päivittää pisteet ja siirtyy seuraavaan kysymykseen
function answer(event) {
    // Estetään sivun uudelleenlataus
    event.preventDefault();  

     // Pakotetaan käyttäjän valinta
    if (!answer1Radio.checked && !answer2Radio.checked) {
        alert("Valitse jompikumpi vastaus.");
        return;
    }

    // Selvitetään käyttäjän valinta
    let selected;
    if (answer1Radio.checked) {
        selected = answer1Radio.value;
    } else {
        selected = answer2Radio.value;
    }
    
    // Tarkistetaan, oliko vastaus oikein
    if (selected === currentCorrect) {
    // Jos vastaus on oikein, lisätään pisteitä
        localStorage.setItem('game4Score', points++);
    }
    // Tallennetaan pisteet localstorageen
    localStorage.setItem('game4Score', points);

    //Seuraava kysymys
    index++;
    nextQuestion();
}


//Lataa uuden kysymyksen tai päättää pelin, jos kaikki kysymykset on käyty läpi.
function nextQuestion() {
    if (index >= answers.length) {
        alert("Peli loppui! Pisteesi: " + points + " / " + answers.length);

    //Estää pelaajan toiminnan  loputtua 
        answer1Radio.disabled = true;
        answer2Radio.disabled = true;
        form.querySelector("button").disabled = true;

        
        return;
    }

    let question = answers[index];
    let options = [question.correct, question.incorrect];
    
    //Arpoo vaihtoehtojen järjestyksen
    if (Math.random() < 0.5) {
        options.reverse();
    }
    // Asetetaan vaihtoehdot radiopainikkeisiin ja label-teksteihin
    answer1Radio.value = options[0];
    answer2Radio.value = options[1];
    label1.textContent = options[0];
    label2.textContent = options[1];
     
    // Tallennetaan oikea vastaus
    currentCorrect = question.correct;

    // Nollaa radiopainikkeet
    answer1Radio.checked = false;
    answer2Radio.checked = false;
}


//Pelin aloitus
nextQuestion();