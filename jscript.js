
// let content = "content"

let options = ["rock", "paper", "scissor"];
               
console.log(options);

let userInput = prompt("Choose rock, paper or scissor")
console.log(userInput)

// computer random answer to player input
let computerInput = options[Math.floor(Math.random() * 3)];

