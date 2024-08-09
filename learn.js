// CREATING A SERVER

// var http = require("http");

// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end("Hello World!");
//   })
//   .listen(8080);

// function logger(message) {
//   console.log(message);
// }

// logger("hey");

// console.log("hello world");

// SECOND EXAMPLE: CODING A ROCK PAPER SCISSOR

// var prompt = require("prompt-sync")();

// var n = prompt("rock, paper, or scissors? (r, p, or s)");

// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// }

// var computer_rand = getRandomInt(3);
// // Expected output: 0, 1 or 2

// var computer_decision;

// if (computer_rand == 1) {
//   computer_decision = "r";
// } else if (computer_rand == 2) {
//   computer_decision = "p";
// } else {
//   computer_decision = "s";
// }

// if (n == computer_decision) {
//   console.log("go again, you guys chose the same");
//   n = prompt("rock, paper, or scissors? (r, p, or s)");
//   computer_rand = getRandomInt(3);
//   // Expected output: 0, 1 or 2

//   if (computer_rand == 1) {
//     computer_decision = "r";
//   } else if (computer_rand == 2) {
//     computer_decision = "p";
//   } else {
//     computer_decision = "s";
//   }
// }

// if (n == "s" && computer_decision == "p") {
//   console.log("the computer chose paper, you win");
// } else if (n == "s"){
//   console.log("computer chose " + computer_decision + ", you lose");
// }

// if (n == "p" && computer_decision == "r") {
//   console.log("the computer chose rock, you win");
// } else if (n == "p"){
//   console.log("computer chose " + computer_decision + ", you lose");
// }

// if (n == "r" && computer_decision == "s") {
//   console.log("the computer chose scissor, you win");
// } else if (n == "r"){
//   console.log("computer chose " + computer_decision + ", you lose");
// }





// READING A HTML FILE TO SERVER

var http = require("http");
var fs = require("fs");
http
  .createServer(function (req, res) {
    fs.readFile("example.html", function (err, data) {
      if (err) {
        console.error(err);
        return;
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080);
