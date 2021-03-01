'use strict';


let highScore = 0;

let againBtn = document.querySelector('.again');
let message = document.querySelector('.message');

let currentNum = null;
let score = 20;
let limit = 0;
let gameStatus = true;


let getRandomNumber = () => {
    document.querySelector('.again').textContent = 'Playing...'

    if(currentNum === null) {
        let randomNum = Math.floor(Math.random() * 21);
        currentNum = randomNum;
    } else {
        return;
    }
}


let resetGame = () => {
    document.querySelector('.number').textContent = "?";
    document.querySelector('.number').style.width = '15rem';
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector('.guess').value = 0;
    currentNum = null;
    score = 20;
    message.textContent = "Start guessing...";
    againBtn.addEventListener('click', compareNumbers);

}

let changeDisplays = (color, message) => {
    gameStatus = false;
    document.querySelector("body").style.backgroundColor = color;
    message.textContent = message;
    againBtn.textContent = "Play Again?";
    againBtn.addEventListener('click', resetGame)

}

let gameWon = () => {
    document.querySelector('.number').textContent = currentNum;
    document.querySelector('.number').style.width = '30rem';
    message.textContent = "Correct Number!"
    document.querySelector("body").style.backgroundColor = "green";
    againBtn.textContent = "Play Again?";


    if(score > highScore) {
        highScore = score
        document.querySelector('.highscore').textContent = highScore;
    }

    againBtn.addEventListener('click', resetGame)
}



againBtn.addEventListener("click", getRandomNumber);



let compareNumbers = () => {

    if(gameStatus) {
        let guess = document.querySelector('.guess').value;
        if(currentNum < guess) {
            score--;
            document.querySelector('.score').textContent = score; 
            message.textContent = "Too high!"
            if(score === limit) {
                changeDisplays('red', 'You Lose')
            } 
        } else if(currentNum > guess) {
                score--;
                message.textContent = "Too low!"
                document.querySelector('.score').textContent = score; 
                if(score === limit) {
                    changeDisplays('red', 'You Lose')
                } 
         } else {
            gameWon();
        }
    }
  
}

let checkBtn = document.querySelector('.check'); 

checkBtn.addEventListener("click", compareNumbers )