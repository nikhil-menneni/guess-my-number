'use strict';
const message1 = document.querySelector('.message').textContent;
const score1 = document.querySelector('.score').textContent;
const highscore1 = document.querySelector('.highscore').textContent;
let score = 20;
let highscore = 0;
let number1 = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = number1;

document.querySelector('.check').addEventListener('click', function () {
  const guess1 = Number(document.querySelector('.guess').value);

  if (!guess1) {
    document.querySelector('.message').textContent = 'No Number';
  } else if (guess1 === number1) {
    document.querySelector('.message').textContent = 'Correct Number🎉';
    document.querySelector('body').style.backgroundColor = '#60b347';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess1 > number1) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High📈';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost The Game😭';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess1 < number1) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low📉';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost The Game😭';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start Guessing';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.highscore').textContent = 0;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.highscore').textContent = 0;
});
