'use strict';

// prompt to the user as they enter the page 
var answer1 = confirm('Are you ready to enter');
if (answer1 === true) {
  console.log('I hope you enjoy your time on my page!');
} else {
  console.log('Another time perhaps.');
}
// asking the user their name
var username = prompt("What is your name?");
alert('Hello ' + username +', nice to meet you! ')

var question1 = prompt("I am Marine?").toLowerCase();
if (question1 ==="yes"|| question1=== "y") {
 //console.log("Correct, yes I am.")
  alert("Correct, yes I am.")
}else if(question1 === "no"){
  //console.log("Sorry that\'s wrong.")
  alert("Sorry that\'s wrong!")
}

var question2 = prompt("Do I enjoy Brazilian jiu jitsu?").toLowerCase();
if (question2 ==="yes"|| question2=== "y") {
 //console.log("Correct, yes I do.")
  alert("Correct, yes I love bjj!")
}else if(question2 === "no"){
  //console.log("Sorry that\'s wrong.")
  alert("Sorry that\'s wrong!")
}

var question3 = prompt("Do I have a dog?").toLowerCase();
if (question3 ==="yes"|| question3=== "y") {
 //console.log("Correct, her name is Eisa! .")
  alert("Correct, her name is Eisa!")
}else if(question3 === "no"){
  //console.log("Sorry that\'s wrong.")
  alert("Sorry that\'s wrong!")
}

var question4 = prompt("Do I enjoying trail running?").toLowerCase();
if (question4 ==="yes"|| question4=== "y") {
 //console.log("Correct, yes, I love to get out on the trails with Eisa!.")
  alert("Correct, yes, I love to get out on the trails with Eisa!")
}else if(question4 === "no"){
  //console.log("Sorry that\'s wrong.")
  alert("Sorry that\'s wrong!")
}
var question5 = prompt("Is my favorite video game Skyrim?").toLowerCase();
if (question5 ==="yes"|| question5=== "y") {
 //console.log("Correct, Of course it would be Skyrim, what else can compare!.")
  alert("Correct, of course it would be Skyrim, what else can compare!")
}else if(question5 === "no"){
  //console.log("Sorry that\'s wrong.")
  alert("Sorry that\'s wrong!")
}


 
function greeting() {
  var today = new Date();
  var hourNow = today.getHours();
  var greeting;
  if (hourNow > 18) {
    greeting = 'Good Evening!';
  } else if (hourNow > 12) {
    greeting = 'Good Afternoon!';
  } else if (hourNow > 0) {
    greeting = 'Good Morning!';
  } else {
    greeting = 'Welcome traveler!';
  }
  return document.write('<h3>' + greeting + '</h3>');
}








// logical operator example
//var myBool = true;
//var anotherBool = false;
//var thirdBool = true;

// And = both conditions have to be true
/*if (myBool && thirdBool) {
    console.log('myBool and thirdBool were both true')
} // only one of these have to be true
else if (myBool || anotherBool) {
    console.log('My bool or anotherBool was true!');
} // only thirdBool can be true
else if (thirdBool) {
    console.log('myBool and anotherBool were false, but thirdBool was true.');
} // none of the above conditions were true
else {
  console.log('Were any of my variables true?');
}

var color = prompt('what is your favorite color');

// convert the variable of color to lower case and evaluate it
switch (color.toLowerCase()) {
    case 'red':
        console.log('your favorite color was red!');
        break;
    case 'blue':
        console.log('your favorite color was blue!');
        break;
    default:
        console.log('i don\'t know what your favorite color was ¯\_(ツ)_/¯');
}*/