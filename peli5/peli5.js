let questions = ['Finland has many ___ and endless forests where you can walk for hours without seeing anyone.','During summer, the nights stay bright, and the sun barely ___ at all.','The lakes in Finland are ___ and mirror the sky like giant blue glass.','In ___, the land is covered with deep, soft snow that sparkles in the pale light.','The air in Finnish nature is always ___.','On dark winter nights, the northern lights ___ across the sky in bright green waves.','Wild berries and mushrooms grow freely in the ___, waiting for people to pick them.','The Baltic Sea is cold and strong, with rocky shores and small ___ everywhere.','Mooses and ___ wander through the forests and open fields, moving slowly and silently.','The countryside is peaceful and quiet, where only the ___ and birds break the silence.'];
let answers =['lakes','sets','clear','winter','fresh','dance','forests','islands','reindeers','wind'];
let index = 0;
let points = localStorage.getItem('points') || 0;

// Laitellaan ensimmäinen kysymys näkymään.
let questionElement = document.querySelector('#question');
nextQuestion();

let form = document.querySelector('#questionform');
form.addEventListener('submit',answer);

// Vastaaminen, vastaus napin käyttö pois vastauksen vaihtamiseksi ja tietenkin vastauksen tarkistus ja pisteiden näyttö
function answer (event){
    event.preventDefault();

    document.querySelector('#answer').disabled = true;

    let formdata = new FormData(form);
    let selection = formdata.get('selection');

    if(selection == answers[index]){
        localStorage.setItem('game5Score', ++points);
        questionElement.classList.add('correct');
    }else{
        questionElement.classList.add('incorrect');
    }

    document.querySelector('#result').textContent =
        'You have now ' + points + '/' + questions.length + ' points';

// Seuraavaan kysymyksen vaihto ja pieni viive ettei kaikki nyt liian nopeesti tapahu.
        index++;

        setTimeout(nextQuestion,1000);
}

function nextQuestion(){
    if(index >= questions.length){
        document.querySelector('#result').textContent =
            'Game has ended and you got '+points+'/'+questions.length+' points';
        form.classList.add('hidden');
    }else{
    questionElement.textContent = questions[index];
    questionElement.classList.remove('correct','incorrect');
    document.querySelector('#answer').disabled = false;
    }
}
