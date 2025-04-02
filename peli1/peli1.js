let questions = ['The capital of Finland is Helsinki', 'The Sun is a planet', 'Water boils at 100°C at sea level', 'Elephants are the largest land animals', 'The Great Wall of China is visible from space with the naked eye', 'A triangle has four sides', 'The Pacific Ocean is the largest ocean on Earth', 'Penguins can fly'];
let answers = ['yes', 'no', 'yes','yes','no', 'no', 'yes', 'no' ];
let index = 0;
let points = 0;

//Haetaan kysymyselementti ja asetetaan ensimmäinen kysymys
let questionElement = document.querySelector('#question');
nextQuestion();

let form = document.querySelector('#questionform');
form.addEventListener('submit', answer);

//Kysymykseen vastaaminen
function answer(event){
    event.preventDefault();

    //Käyttäjä ei voi painaa nappia ennen seuraavaa kysymystä.
    document.querySelector('#answer').disabled = true;

    let formData = new FormData(form);
    let selection = formData.get('selection');

    //Tarkistetaan onko käyttäjän antama vastaus oikea
    if(selection == answers[index]){
        points++;
        questionElement.classList.add('correct');
    }else{
        questionElement.classList.add('incorrect');
    }

    document.querySelector('#result').textContent = 
        'Sinulla on nyt ' + points + '/' + questions.length + ' pistettä';

    //Siirrytään seuraavaan kysymykseen
    index++;

    //4 sek viive ennen seuraavaa kysymystä
    //Voitaisiin toteuttaa myös erillisellä "next question" -painikkeella
    setTimeout(nextQuestion, 4000);
}

//Asetetaan uusi kysymys näkyviin
function nextQuestion(){
    if(index >= questions.length){
        document.querySelector('#result').textContent = 
            'Peli loppui ja sait yhteensä ' + points + '/' + questions.length + ' pistettä';
        form.classList.add('hidden');
    }else{
        questionElement.textContent = questions[index];
        questionElement.classList.remove('correct', 'incorrect');
        document.querySelector('#answer').disabled = false;
    }
    
} 