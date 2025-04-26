var points = 0; //pisteet
var index = 0; //Nykyinen kysymys
var questions = [ //Kysymyslista
    {
        question: "I went swimming in a _____ earlier today.",
        options: ["Lake", "Puddle", "Snowbank"],
        answer: "a"
    },
    {
        question: "I _____ a bike to school.",
        options: ["Ride", "Rode", "Rided"],
        answer: "b"
    },
    {
        question: "The cat is sleeping _____ the sofa.",
        options: ["Right", "On", "Over"],
        answer: "b"
    },
    {
        question: "She _____ to the store once a week.",
        options: ["Going", "Arrived", "Goes"],
        answer: "c"
    },
    {
        question: "I have never _____ to paris before.",
        options: ["Thought", "Travelled", "Existed"],
        answer: "b"
    },
    {
        question: "They _____ playing football when it started to rain.",
        options: ["Were", "Are", "Is"],
        answer: "a"
    },
    {
        question: "We need to buy some _____ for the birthday cake.",
        options: ["Wax", "Wheat", "Candles"],
        answer: "c"
    },
    {
        question: "She _____ her homework before dinner.",
        options: ["Did", "Do", "Done"],
        answer: "a"
    },
];

//Kysymysten ja vastaus painikkeiden näyttö
function showQuestion() { 
    var quizDiv = document.getElementById("quiz");
    if (index < questions.length) {
        var q = questions[index];
        var html = `
            <h5>${q.question}</h5>
            <div>
                <button class="quiz-button" onclick="checkanswer('a')">A) ${q.options[0]}</button>
                <button class="quiz-button" onclick="checkanswer('b')">B) ${q.options[1]}</button>
                <button class="quiz-button" onclick="checkanswer('c')">C) ${q.options[2]}</button>
            </div>
        `;
        quizDiv.innerHTML = html;
    } else {
        document.getElementById("quiz").innerHTML = "";
        document.getElementById("result").innerHTML = `<h3>You scored ${points} out of ${questions.length}!</h3>`;
        localStorage.setItem("quizPoints", points);
    }
}

//Vastauksen tarkistus ja vastauksen jälkeinen viive ja painikkeiden sammuttaminen
function checkanswer(choice) {
    var resultDiv = document.getElementById("result");

    if (choice == questions[index].answer){
        points++;
        resultDiv.innerHTML = "<p class='text-success'>Correct!</p>";
    } else {
        resultDiv.innerHTML = "<p class='text-danger'>Incorrect!</p>";
    }

    var buttons = document.querySelectorAll(".quiz-button");
    buttons.forEach(button => button.disabled = true);

    setTimeout(() => {
        index++;
        resultDiv.innerHTML = "";
        showQuestion();
    }, 3000)

}

//Kysymysten aloitus
showQuestion();