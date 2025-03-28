function getComputerChoice() {
    let x = parseInt(Math.random() * 3);1

    return numberToMove(x);
}

function getHumanChoice() {
    let x = parseInt(window.prompt("Keep a count: 0 - Stone, 1 - paper, 2 - Scissors"));
    return numberToMove(x);
}
function numberToMove(x) {
    switch (x) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
    }
}

function playRound(human, computer) {
    if (human === undefined) {
        console.log(`Wrong number`);
        console.log(`--------------------------------------------------------`);
    }

    if (human === computer) {
        console.log(`Draw both chose: ${human}`)
        console.log(`--------------------------------------------------------`);
    }
    
    if (human === "Rock" && computer === "Scissors") {
        return won();
    }else if (human === "Paper" && computer === "Rock") {
        return won();
    }else if (human === "Scissors" && computer === "Paper") {
        return won();
    }

    if (computer === "Rock" && human === "Scissors") {
        return lose();
    }else if (computer === "Paper" && human === "Rock") {
        return lose();
    }else if (computer === "Scissors" && human === "Paper") {
        return lose();
    }
}
function won() {
    if (humanScore < 4) {
        console.log(`You won this round`);
        humanScore++;
        console.log(`--------------------------------------------------------`);
        console.log(`Score: you - ${humanScore}, opponent - ${computerScore}.`);
        console.log(`--------------------------------------------------------`);
    } else {
        console.log(`You won, congratulations`);
        humanScore++;
        console.log(`--------------------------------------------------------`);
        console.log(`Final score: you - ${humanScore}, opponent - ${computerScore}.`);
        console.log(`--------------------------------------------------------`);
    }
}
function lose() {
    if (computerScore < 4) {
        console.log(`You lost this round`);
        computerScore++;
        console.log(`--------------------------------------------------------`);
        console.log(`Score: you - ${humanScore}, opponent - ${computerScore}.`);
        console.log(`--------------------------------------------------------`);
    } else {
        console.log(`You lost, maybe you'll get lucky next time`);
        computerScore++;
        console.log(`--------------------------------------------------------`);
        console.log(`Final score: you - ${humanScore}, opponent - ${computerScore}.`);
        console.log(`--------------------------------------------------------`);
    }
}

let humanScore = 0;
let computerScore = 0;

function playGame() {
    while (humanScore < 5 && computerScore < 5) {
        let human = getHumanChoice();
        let computer = getComputerChoice();

        console.log(`Your choice: ${human}`)
        console.log(`Opponent's choice: ${computer}`)

        playRound(human, computer);
    }
}

playGame();