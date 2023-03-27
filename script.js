'use strict';


document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value;

const secretNumber = Math.trunc((Math.random() * 20) + 1) // Create a random number, between 1 to 20;
let score = 20;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    // When input value to be empty:
    if(!guess){
        document.querySelector('.message').textContent = 'Not a number';

        //When player wins:
    } else if(guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number!'
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        //When the secret number to be lower:
    } else if(guess > secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = 'Too high!';
            score--;
            document.querySelector('.score').textContent = score;

        // When lost the game:
        } else {
            document.querySelector('.message').textContent = 'You lost the game!';
            document.querySelector('.score').textContent = 0;
        }

        // When the secret number to be higher
    } else if(guess < secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = 'Too low!';
            score--;
            document.querySelector('.score').textContent = score;

        // When lost the game:
        } else {
            document.querySelector('.message').textContent = 'You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    }
})