
let userInput = prompt("Choose Rock, Paper or Scissors")

let choices = ['Rock', 'Paper', 'Scissors']

let comChoice = Math.floor(Math.random() * choices.length);

//for (int counter=0; counter < 10; counter++)

if (userInput === "Rock" && comChoice === "Rock" ) {
    console.log("It's a tie.")
} else (userInput === "Rock" && comChoice === "Scissors" ) {
    console.log("You win!")
} else (userInput === "Rock" && comChoice === "Paper" ) {
    console.log("You lose, loser.")
} else (userInput === "Paper" && comChoice === "Rock" ) {
    console.log("You win!")
} else (userInput === "Paper" && comChoice === "Scissors" ) {
    console.log("You lose, loser.")
} else (userInput === "Paper" && comChoice === "Paper" ) {
    console.log("It's a tie.")
} else (userInput === "Scissors" && comChoice === "Rock" ) {
    console.log("You lose, loser.")
} else (userInput === "Scissors" && comChoice === "Scissors" ) {
    console.log("It's a tie.")
} else (userInput === "Scissors" && comChoice === "Paper" ) {
    console.log("You win!")
}









- prompt user to choose rock, paper or scissors

- random generator rock, paper or scissors

- switch case for each scenario - console log
user rock com rock - draw
user rock com scissors - you win!
user rock com paper - you lose
user paper com paper - draw
user paper com scissors - you lose
user paper com rock - you win!
user scissors com scissors - draw
user scissors com paper - you win!
user scissors com rock - you lose

- create total score array of wins, losses and draws
- add +1 to their wins, losses or draws variable

for loop whole thing until total score array = 10