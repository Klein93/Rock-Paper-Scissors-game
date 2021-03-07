let playersChoice = "";
let computersChoice = "";


const pickRockPaperOrScissors = function () {
    let randomNumber = Math.floor(Math.random() * 90);

    if (randomNumber <= 30) {
        console.log("the computer picked rock");
        computersChoice == "Rock";
    } else if (randomNumber <= 60 && randomNumber > 30) {
        console.log("the computer picked paper");
        computersChoice == "Paper";
    } else if (randomNumber <= 90 && randomNumber > 60) {
        console.log("the computer picked scissors");
        computersChoice == "Scissors";
    };
};

const checkIfPlayerWon = function (chosenOption, computersOption) {

    if (chosenOption == "Rock" && computersOption == "Scissors") {
        console.log("You Won");
    } else if (chosenOption == "Paper" && computersOption == "Rock") {
        console.log("You Won");
    } else if (chosenOption == "Scissors" && computersOption == "Paper") {
        console.log("You Won");
    } else if (chosenOption == "Rock" && computersOption == "Paper") {
        console.log("You Lost");
    } else if (chosenOption == "Paper" && computersOption == "Scissors") {
        console.log("You Lost");
    } else if (chosenOption == "Scissors" && computersOption == "Rock") {
        console.log("You Lost");
    } else {
        console.log("No winning match");
    }

};


