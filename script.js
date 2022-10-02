'use strict';
'use strict';
let number=Math.trunc((Math.random()*20)+1);
let score=20;
let highscore=0;

function displayMessage(message){
    document.querySelector('.message').textContent=message;
}