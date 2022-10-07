'use strict';
let number=Math.floor((Math.random()*20)+1);
let score=20;
let highscore=0;

function displayMessage(message){
    document.querySelector('.message').textContent=message;
}
function changeBG(x){
    document.querySelector(`body`).style.backgroundColor=x;
}
document.querySelector(`.check`).addEventListener(`click`, function(){
    let guess=Number(document.querySelector(`.guess`).value);
    console.log(guess);
    //No input
    if(!guess){
        document.querySelector(`.message`).textContent=`No Number!`;
    }
    //Player wins
     if(guess===number){
        document.querySelector(`.number`).textContent=number;

        displayMessage(`Correct Number!🎉`);
        changeBG(`#2BB403`);
        if(score>highscore){
            highscore=score;
        }
        document.querySelector(`.highscore`).textContent=highscore;
    }
    //Guess is too low
    else if(score>1){
    if(guess>number){
        displayMessage(`Guess lower📉`);
        changeBG(`#499fd6`);
    }
    //Guess is too high
    else if(guess<number){
        displayMessage(`Guess higher📈`);
        changeBG(`#ff793c`);
    }
         score--;
         document.querySelector(`.score`).textContent=score;
    }
    //Player lost 
    else{
        displayMessage(`You lost😭`);
        document.querySelector(`.score`).textContent=0;
        changeBG(`red`);   }
});
//Again button:
document.querySelector('.again').addEventListener(`click`,function(){
    score=20;
    number=Math.trunc((Math.random()*20)+1);
    changeBG(`#222`);
    displayMessage(`Start Guessing...`);
    document.querySelector(`.guess`).value=``;
    document.querySelector(`.number`).textContent='?';
    document.querySelector(`.score`).textContent=score;
    mouseOnlyNumberInputField.value = 1;
    });
    //

const mouseOnlyNumberInputField = document.getElementById("mouse-only-number-input");

window.onload = () => {
    //add event listener to prevent the default behavior
    mouseOnlyNumberInputField.addEventListener("keypress", (event) => {
        event.preventDefault();
    });
}

mouseOnlyNumberInputField.addEventListener('select', function() {
    //add event listener to prevent selecting input
    this.selectionStart = this.selectionEnd;
}, false);