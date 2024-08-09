// * import random so that we can -> for the computer to be able to choose rock
//     paper or scissor

//     * get user input are -> rock, paper, scissor
//     * have the computer choose
// * to be able to compare

var prompt = require("prompt-sync")();
var user_input = prompt("Rock(r), paper(p), or scissors(s)");

console.log(user_input);

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

var computer_input = getRandomInt(3);
console.log(computer_input);

var computer_decision;

if (computer_input == 0) {
  computer_decision = "r";
} else if (computer_input == 1) {
  computer_decision = "p";
} else {
  computer_decision = "s";
}

function same_decision() {
  if (user_input == computer_decision) {
    user_input = prompt(
      "you guys chsoe the same, choose Rock(r), paper(p), or scissors(s)"
    );
    computer_input = getRandomInt(3);
    gameloop(); 
  }
}

function gameloop() {
  same_decision();
  if (user_input == "r" && computer_decision == "p") {
    console.log("you lose, comp chose paper");
  } else if (user_input == "r" && computer_decision == "s") {
    console.log("you win, comp chose scissor");
  }

  if (user_input == "s" && computer_decision == "r") {
    console.log("you lose, comp chose rock");
  } else if (user_input == "s" && computer_decision == "p") {
    console.log("you win, comp chose paper");
  }

  if (user_input == "p" && computer_decision == "s") {
    console.log("you lose, comp chose scissor");
  } else if (user_input == "p" && computer_decision == "r") {
    console.log("you win, comp chose rock");
  }
}

gameloop();
