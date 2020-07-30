'use strict';

var score = 0;




var initialResponse = confirm('Are you ready to enter');


// prompt to the user as they enter the page

if (initialResponse === true) {
  console.log('I hope you enjoy your time on my page!');
} else {
  console.log('Another time perhaps.');
}
//asking the user their name
var username = prompt('What is your name?');
alert(`Hello ${username} nice to meet you! `);

function answer1() {
  var question1 = prompt('I am Marine?').toLowerCase();
  if (question1 === 'yes' || question1 === 'y'); {
    //console.log("Correct, yes I am.")
    alert('Correct, yes I am.');
    score++;
  } if (question1 === 'no' || question1 === 'n') {
    //console.log("Sorry that\'s wrong.")
    alert('Sorry that\'s wrong!');
  }
}

function answer2() {
  var question2 = prompt('Do I enjoy Brazilian jiu jitsu?').toLowerCase();
  if (question2 === 'yes' || question2 === 'y') {
    //console.log("Correct, yes I do.")
    alert('Correct, yes I love bjj!');
    score++;
  } else if (question2 === 'no' || question2 === 'n') {
    //console.log("Sorry that\'s wrong.")
    alert('Sorry that\'s wrong!');
  }
}

function answer3() {
  var question3 = prompt('Do I have a dog?').toLowerCase();
  if (question3 === 'yes' || question3 === 'y') {
    //console.log("Correct, her name is Eisa! .")
    alert('Correct, her name is Eisa!');
    score++;
  } else if (question3 === 'no' || question3 === 'n') {
    //console.log("Sorry that\'s wrong.")
    alert('Sorry that\'s wrong!');
  }
}

function answer4() {
  var question4 = prompt('Do I enjoying trail running?').toLowerCase();
  if (question4 === 'yes' || question4 === 'y') {
    //console.log("Correct, yes, I love to get out on the trails with Eisa!.")
    alert('Correct, yes, I love to get out on the trails with Eisa!');
    score++;
  } else if (question4 === 'no' || question4 === 'n') {
    //console.log("Sorry that\'s wrong.")
    alert('Sorry that\'s wrong!');
  }
}

function answer5() {
  var question5 = prompt('Is my favorite video game Skyrim?').toLowerCase();
  if (question5 === 'yes' || question5 === 'y') {
    //console.log("Correct, Of course it would be Skyrim, what else can compare!.")
    alert('Correct, of course it would be Skyrim, what else can compare!');
    score++;
  } else if (question5 === 'no' || question5 === 'n') {
    //console.log("Sorry that\'s wrong.")
    alert('Sorry that\'s wrong!');
  }
}

function answer6() {
  //Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number
  var correctAnswer = 6;
  //It should give the user exactly 4 opportunities to get the correct answer
  var turns = 4;
  var hint = 'How many countries have I been too, 1-10!';
  var answeredSixCorrect = false;
  while (turns > 0) {
    var guess = Number(prompt(`${hint} guesses left, keep at!`));
    turns--;
    if (guess === correctAnswer) {
      alert(`${correctAnswer} is the correct number! Thanks for playing, ${username}`);
      score++;
      turns = 0;
      answeredSixCorrect = true;
    } else {
      hint = 'Let\'s try again!';
      //Indicates through an alert if the guess is “too high” or “too low"
      if (guess < correctAnswer) {
        hint += ` Too low! ${turns}`;
      }
      if (guess > correctAnswer) {
        hint += ` Too high! ${turns}`;
      }
    }
  }

  //After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.
  if (answeredSixCorrect === false) {
    alert(`${correctAnswer} is the correct number you are out of guesses. Thanks for playing, ${username}`);
  }
}

function answer7() {
  //Add a 7th question that has multiple possible correct answers that are stored in an array.
  var remainingTurns = 6;
  var question7 = 'Which countries have I been too?';
  var answerArray = ['spain', 'canada', 'oman', 'yemen', 'bahrain', 'israel'];
  var answerCorrect = false;

  while (remainingTurns > 0) {
    var guess7 = prompt(`${question7} You have ${remainingTurns} guesses left.`).toLowerCase();
    remainingTurns--;

    for (var i = 0; i < answerArray.length; i++) {
      if (guess7 === answerArray[i]) {
        alert(`${answerArray[i]} is a correct answer! Thanks for playing, ${username}`);
        remainingTurns = 0;
        answerCorrect = true;
        score++;
      }
    }
  }
}

// //After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.
// if (answerCorrect === false) {
//   alert(`The correct answers are spain, canada, oman, yemen, bahrain, israel you are out of guesses. Thanks for playing, ${username}`);
// }// Display all the possible correct answers to the user.

answer1();
answer2();
answer3();
answer4();
answer5();
answer6();
answer7();

alert(`Here's your score ${score}`);
// // The guesses will end once the user guesses a correct answer or they run out of attempts.

// // function greeting() {
// //   var today = new Date();
// //   var hourNow = today.getHours();
// //   var greeting;
// //   if (hourNow > 18) {
// //     greeting = 'Good Evening!';
// //   } else if (hourNow > 12) {
// //     greeting = 'Good Afternoon!';
// //   } else if (hourNow > 0) {
// //     greeting = 'Good Morning!';
// //   } else {
// //     greeting = 'Welcome traveler!';
// //   }
// //   return document.write('<h3>' + greeting + '</h3>');










