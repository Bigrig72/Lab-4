'use strict';

//Intro to my page welcome prompts
alert('Hello and welcome to my site!!')

var userName = prompt('What is your name?');
console.log('userName after prompt ' + userName);

alert('We are going to play a guessing game!!!')

// set up tally for correct answers
var totalCorrect = 0;



//-----------------FUNCTIONS----------------------
function askQuestion(question, answer) {
  var response = prompt(question).toLowerCase();
  console.log('responseOne after prompt ' + response);

  if (response === answer) {
    alert('You are correct! ' + userName + '.');

    totalCorrect++; // iterate tally since response is correct
    console.log('totalCorrect', totalCorrect);

  } else {
    alert('Sorry that is incorrect, ' + userName + '.');
  }
}
//-----------------END FUNCTIONS----------------------



// ------------------QUESTIONS 1-5----------------------

askQuestion('Is my name Regan and am 28 years old?', 'yes');

askQuestion('Was I born in Malone, New York?', 'yes');

askQuestion('Did I move to Pennsylvania and develop sports as a passion?', 'yes');

askQuestion('Was I 10 years old when I moved away from PA?', 'yes');

askQuestion('Did I play football for Arkansas State?', 'no');

// ------------------END QUESTIONS 1-5----------------------

// Reset user instructions
alert('Man! You\'re doing great!! The next questions are a bit tougher because they aren\'t yes or no. I\'ll give you a few chances for each to be fair. Ready?');

// ------------------QUESTION 6----------------------

var favorite = 6;
var userGuess = parseInt(prompt('Guess a number?'));

var counter = 0;
var maxGuesses = 4;

while (userGuess !== favorite && counter < maxGuesses) {

  if (userGuess < favorite) {

    userGuess = parseInt(prompt('Too low Guess again!'));

  } else if (userGuess > favorite) {

    userGuess = parseInt(prompt('Too high Guess again!'));
  }

  counter++;
}
if (userGuess === favorite) {
  alert('You are correct!');
  totalCorrect++;
}
// ------------------END QUESTION 6----------------------

// ------------------QUESTION 7----------------------

var answerRight = false;
var guessCounter = 0;
console.log('guesscounter', guessCounter);

var answers = ['malone', 'selinsgrove', 'fredericksburg', 'seattle'];

while (guessCounter < 6 && answerRight == false) {
  console.log('guesscounter', guessCounter);

  var responseSeven = prompt('Guess one of the four cities I have live in?').toLowerCase();

  for (var answer = 0; answer < answers.length; answer++) {
    if (responseSeven === answers[answer]) {
      answerRight = true;
      totalCorrect++;
      alert('correct');
      console.log('answer: ', answer);
      break;
    }
  }

  if (answerRight == false) {
    guessCounter++;
    alert('incorrect');
    console.log('Q 7 guess counter: ', guessCounter);
  }
}
  // ------------------END QUESTION 7----------------------