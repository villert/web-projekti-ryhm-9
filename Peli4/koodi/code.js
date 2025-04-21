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
let points = parseInt(localStorage.getItem('points')) || 0;

let form = document.querySelector("#questionform");
let answer1Radio = document.querySelector("#answer1");
let answer2Radio = document.querySelector("#answer2");
let label1 = document.querySelector("#label1");
let label2 = document.querySelector("#label2");

let currentCorrect = "";

form.addEventListener("submit", answer);

function answer(event) {
    event.preventDefault();

    let selected;
    if (answer1Radio.checked) {
        selected = answer1Radio.value;
    } else {
        selected = answer2Radio.value;
    }

    if (selected === currentCorrect) {
        points++;
    }

    localStorage.setItem('points', points);
    index++;
    nextQuestion();
}



function nextQuestion() {
    if (index >= answers.length) {
        alert("Peli loppui! Pisteesi: " + points + " / " + answers.length);
        localStorage.removeItem('points');

        answer1Radio.disabled = true;
        answer2Radio.disabled = true;
        form.querySelector("button").disabled = true;

        
        return;
    }

    let question = answers[index];
    let options = [question.correct, question.incorrect];

    if (Math.random() < 0.5) {
        options.reverse();
    }

    answer1Radio.value = options[0];
    answer2Radio.value = options[1];
    label1.textContent = options[0];
    label2.textContent = options[1];

    currentCorrect = question.correct;

    answer1Radio.checked = false;
    answer2Radio.checked = false;
}



nextQuestion();