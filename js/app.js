'use strict';

// // prompt to the user as they enter the page 
// var answer1 = confirm('Are you ready to enter');
// if (answer1 === true) {
//   console.log('I hope you enjoy your time on my page!');
// } else {
//   console.log('Another time perhaps.');
// }
// asking the user their name
var username = prompt("What is your name?");
//alert('Hello ' + username +', nice to meet you! ')

// var question1 = prompt("I am Marine?").toLowerCase();
// if (question1 ==="yes"|| question1=== "y") {
//  //console.log("Correct, yes I am.")
//   alert("Correct, yes I am.")
// }else if(question1 === "no"){
//   //console.log("Sorry that\'s wrong.")
//   alert("Sorry that\'s wrong!")
// }

// var question2 = prompt("Do I enjoy Brazilian jiu jitsu?").toLowerCase();
// if (question2 ==="yes"|| question2=== "y") {
//  //console.log("Correct, yes I do.")
//   alert("Correct, yes I love bjj!")
// }else if(question2 === "no"){
//   //console.log("Sorry that\'s wrong.")
//   alert("Sorry that\'s wrong!")
// }

// var question3 = prompt("Do I have a dog?").toLowerCase();
// if (question3 ==="yes"|| question3=== "y") {
//  //console.log("Correct, her name is Eisa! .")
//   alert("Correct, her name is Eisa!")
// }else if(question3 === "no"){
//   //console.log("Sorry that\'s wrong.")
//   alert("Sorry that\'s wrong!")
// }

// var question4 = prompt("Do I enjoying trail running?").toLowerCase();
// if (question4 ==="yes"|| question4=== "y") {
//  //console.log("Correct, yes, I love to get out on the trails with Eisa!.")
//   alert("Correct, yes, I love to get out on the trails with Eisa!")
// }else if(question4 === "no"){
//   //console.log("Sorry that\'s wrong.")
//   alert("Sorry that\'s wrong!")
// }
// var question5 = prompt("Is my favorite video game Skyrim?").toLowerCase();
// if (question5 ==="yes"|| question5=== "y") {
//  //console.log("Correct, Of course it would be Skyrim, what else can compare!.")
//   alert("Correct, of course it would be Skyrim, what else can compare!")
// }else if(question5 === "no"){
//   //console.log("Sorry that\'s wrong.")
//   alert("Sorry that\'s wrong!")
// }

//Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number
var x = 6;
//It should give the user exactly 4 opportunities to get the correct answer
var turns = 4;
var hint = 'How many countries have I been too, 1-10!';
var answerSixCorrect = false;
while (turns > 0) {
  var guess = prompt(hint +
    ' You have ' + turns + ' guesses left.');
  if (!!guess) break;
  guess = Number(guess);
  if (guess === x) {
    alert(`${x} is the correct number! Thanks for playing, ${username}`);
    turns = 0;
    answerSixCorrect = true;
  } else {
    hint = 'Let\'s try again!';
    //Indicates through an alert if the guess is “too high” or “too low"
    if (guess < x) {
      hint += ' Too low!';
    }
    if (guess > x) {
      hint += ' Too high!';
    }
    turns--;
  }
}//After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.
if (answerSixCorrect === false) {
  alert(`${x} is the correct number you are out of guesses. Thanks for playing, ${username}`);
}


//Add a 7th question that has multiple possible correct answers that are stored in an array.
var remainingTurns = 6;
var question7 = 'Which countries have I been too?';
var answer7 = 'spain';
var answerArray = ['spain', 'canada', 'oman', 'yemen','bahrain','israel'];
for (var i = 0; i < answerArray.length; i++) {
  console.log(answerArray[i])
}
var answerCorrect = false;

while (remainingTurns > 0) {
  var guess7 = prompt(question7 +
    ' You have ' + remainingTurns + ' guesses left.').toLowerCase();
  for (var i = 0; i < answerArray.length; i++) {
    if (guess7 === answerArray[i]) {
      alert(`${answerArray[i]} is a correct answer! Thanks for playing, ${username}`);
      remainingTurns = 0;
      answerCorrect = true;
    }
  }
  question7 = 'Let\'s try again!';
  //Indicates through an alert if the guess7 is “too high” or “too low"
  question7 += 'Guess again!';
  remainingTurns--;

}//After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.
if (answerCorrect === false) {
  alert(`The correct answers are spain, canada, oman, yemen, bahrain, israel you are out of guesses. Thanks for playing, ${username}`);
}

// The guesses will end once the user guesses a correct answer or they run out of attempts.

// Display all the possible correct answers to the user.



















// function greeting() {
//   var today = new Date();
//   var hourNow = today.getHours();
//   var greeting;
//   if (hourNow > 18) {
//     greeting = 'Good Evening!';
//   } else if (hourNow > 12) {
//     greeting = 'Good Afternoon!';
//   } else if (hourNow > 0) {
//     greeting = 'Good Morning!';
//   } else {
//     greeting = 'Welcome traveler!';
//   }
//   return document.write('<h3>' + greeting + '</h3>');










