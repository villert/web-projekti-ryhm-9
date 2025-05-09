const wordDisplay = document.querySelector(".word-display");
const hangmanImage = document.querySelector(".hangman-box img");
const guessesText = document.querySelector(".guesses-text b");
const keyboardDiv = document.querySelector(".keyboard");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = document.querySelector(".play-again");
let points = parseInt(localStorage.getItem('game6Score')) || 0;

let currentWord, correctLetters, wrongGuesscount;
const maxGuesses = 6;



/*Koodi jolla resetetaan peli WOW! */
const resetGame = () => {
    correctLetters = [];
    wrongGuesscount = 0;
    hangmanImage.src = `images/hangman-${wrongGuesscount}.svg`;
    guessesText.innerText = `${wrongGuesscount} / ${maxGuesses}`;
    keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled = false);
    wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter"></li>`).join("");
    gameModal.classList.remove("show");
}

/*randomi sanalista ja hintti siihe mukaa*/

const getRandomWord = () => {
    const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
    currentWord = word;
    console.log(word);
    document.querySelector(".hint-text b").innerText = hint;
    resetGame();

}
/*Voitto scriin ja +1 piste oikeasta sanasta pisteet osioon!*/
const gameOver = (isVictory) => {
    setTimeout(() => {
        const modalText = isVictory ? `You found the word:` : `The correct word was:`;
        gameModal.querySelector("img").src = `images/${isVictory ? 'victory' : 'lost'}.gif`;
        gameModal.querySelector("h4").innerText = `${isVictory ? 'Congrats! +1 piste' : 'Game Over!'}`;
        gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`;
        gameModal.classList.add("show");

        if (isVictory) {
            localStorage.setItem('game6Score', ++points);
        }
    }, 300);
}
/*Letterin clikkaus ja sen confirmointi*/
const initGame  = (button, clickedLetter) => {
    if(currentWord.includes(clickedLetter)) {
        [...currentWord].forEach((letter, index) => {
            if(letter === clickedLetter) {
                correctLetters.push(letter);
                wordDisplay.querySelectorAll("li")[index].innerText = letter;
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
            }
        })
        
    } else {
        wrongGuesscount++;
        hangmanImage.src = `images/hangman-${wrongGuesscount}.svg`;
    }

    button.disabled = true;
    guessesText.innerText = `${wrongGuesscount} / ${maxGuesses}` ;


    if(wrongGuesscount === maxGuesses) return gameOver(false);
    if(correctLetters.length === currentWord.length) return gameOver(true);
}




/*tehää keyboard kirjaimet*/
for (let i = 97; i <= 122; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
    button.addEventListener("click", e => initGame(e.target, String.fromCharCode(i)))
    
}
/*saadaan random sana*/
getRandomWord ();
playAgainBtn.addEventListener("click" , getRandomWord);