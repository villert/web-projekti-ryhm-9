var points = 0
var questions = [
    {
        question: "I went swimming in a _____ earlier today.\n(a) Lake\n(b) Puddle\n(c) Snowbank",
        answer: "a"
    },
    {
        question: "I _____ a bike to school.\n(a) Ride\n(b) Rode\n(c) Rided",
        answer: "b"
    },
    {
        question: "The cat is sleeping _____ the sofa.\n(a) Right\n(b) On\n(c) Over",
        answer: "b"
    },
    {
        question: "She _____ to the store once a week.\n(a) Going\n(b) Arrived\n(c) Goes",
        answer: "c"
    },
    {
        question: "I have never _____ to paris before.\n(a) Thought\n(b) Traveled\n(c) Existed",
        answer: "b"
    },
    {
        question: "They _____ playing football when it started to rain.\n(a) Were\n(b) Are\n(c) Is",
        answer: "a"
    },
    {
        question: "We need to buy some _____ for the birthday cake.\n(a) Wax\n(b) Wheat\n(c) Candles",
        answer: "c"
    },
    {
        question: "She _____ her homework before dinner.\n(a) Did\n(b) Do\n(c) Done",
        answer: "a"
    },
]


for(var i=0; i < questions.length; i++){
    var reaction = window.question(questions[i].question);
    if(reaction == questions[i].answer){
        points++;
    }
}