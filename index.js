var readlineSync = require('readline-sync');

//welcome
var name = readlineSync.question("Whats your name? ");
console.log("Welcome! " + name + "\n" +"Lets see how much you know about Hiphop.");
console.log("But before that, here are the rules: " + "\n" + "1. +1 for correct answer" + "\n" + "2. -1 for wrong answer");

console.log("************************");

var score = 0;

//main function
function quiz(quesOptions, ques , ans) {
  var userAns = readlineSync.keyInSelect(quesOptions, ques);

  if (userAns === ans) {
    console.log("correct");
    score++;
  }
  else {
    console.log("wrong");
    score--;
  }
}


var q1 = ["Roy","Saha", "Das"];
var q2 = ["Kolkata", "Pune", "Agartala"];
var q3 = ["Hiphop", "Pop", "Classical"];
var q4 = ["RKMV", "SKM", "DBS"];

//questions array
var mainq = ["Whats my sir name? ", "Where do I live? ", "Whats my fav music genre? ", "From which school I did my 12th? "];

//array of optins
var qArray = [q1, q2, q3, q4];

//answers array
var answersArray = [1, 2, 0, 0];


//main loop which calls the function quiz
for (i=0; i<4; i++) {
  quiz(qArray[i], mainq[i], answersArray[i]);
}

//display score
console.log("Your score is: " + score);


