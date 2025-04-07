let questions = ['Whats your name?', 'How are you?', "Who's dog is that?", 'Your a great person!', 'Who am i?', 'To who it may concern', "I can't wait to learn more!"];
let answers = ['incorrect', 'correct','correct','incorrect','incorrect','incorrect','correct'];
let index = 0;
let points = 0;


//etsitään kysymys elementti ja ensimmäisen kysymyksen asetus

let questionE = document.querySelector('#question');
nextQuestion();
let form = document.querySelector('#questionform');
form.addEventListener('submit',answer);


//funktio kysymyksiin vastaamista varten

function answer(event){
    event.preventDefault();
    document.querySelector('#answer').disabled = true;
    
    let formData = new FormData(form);
    let selection = formData.get('selection');


    if (selection == answers[index]){
        points++;
        questionE.classList.add('correct');
    }else{
        questionE.classList.add('incorrect');
    }

    index++;
    //sekunnin viive kysymyksien väliin
    setTimeout(nextQuestion,1000);

}

//Uuden kysymyksen asettaminen
function nextQuestion(){
    if(index >=questions.length){
        document.querySelector('#result').textContent = 
        'Game complete and you got ' + points + '/'+questions.length + ' points';
        form.classList.add('hidden');
    }else{
        questionE.textContent = questions[index];
        questionE.classList.remove('correct','incorrect');
        document.querySelector('#answer').disabled = false;
    }


}