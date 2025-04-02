const container = document.querySelector(".mainContainer");
const start = document.querySelector("#gameStart");

start.onclick = () => {
    const gameFunctional = document.createElement("section");
    gameFunctional.classList.add("gameFunctional");

    const gameChoice = document.createElement("section");
    gameChoice.classList.add("gameChoice");

    container.appendChild(gameFunctional);
    container.appendChild(gameChoice);

    const cardPlayrs = document.createElement("div");
    cardPlayrs.classList.add("cardPlayrs");

    const cardComputer = document.createElement("div");
    cardComputer.classList.add("cardComputer");

    gameFunctional.appendChild(cardPlayrs);
    gameFunctional.appendChild(cardComputer);

    const textChoice = document.createElement("h1");
    textChoice.textContent = "Make your choice:";

    gameChoice.appendChild(textChoice);

    const choice = document.createElement("div");
    choice.classList.add("choice");

    gameChoice.appendChild(choice);

    const rock = document.createElement("button");
    rock.textContent = "Rock";

    const paper = document.createElement("button");
    paper.textContent = "Paper";

    const scissors = document.createElement("button");
    scissors.textContent = "Scissors";

    choice.appendChild(rock);
    choice.appendChild(paper);
    choice.appendChild(scissors);

    const scoreGame = document.createElement("section");
    scoreGame.classList.add("scoreGame");

    container.appendChild(scoreGame);

    const textScore = document.createElement("h1");
    textScore.textContent = "Game score:";

    const score = document.createElement("div");
    score.classList.add("choice");

    scoreGame.appendChild(textScore);
    scoreGame.appendChild(score);

    const scoreP = document.createElement("div");
    scoreP.textContent = scorePlayrs;
    scoreP.id = "players";
    scoreP.classList.add("score");

    const scoreC = document.createElement("div");
    scoreC.textContent = scoreComputer;
    scoreC.id = "computer";
    scoreC.classList.add("score");

    score.appendChild(scoreP);
    score.appendChild(scoreC);

    start.onclick = null;

    rock.onclick = () => playRound("rock");
    paper.onclick = () => playRound("paper");
    scissors.onclick = () => playRound("scissors");
};

function playRound(human) {
    const computer = getComputerChoice();
    cardChanges(human, computer);

    if (human === computer) {
        console.log(`Draw both chose: ${human}`)
    }
    
    if (human === "rock" && computer === "scissors") {
        return won();
    }else if (human === "paper" && computer === "rock") {
        return won();
    }else if (human === "scissors" && computer === "paper") {
        return won();
    }

    if (computer === "rock" && human === "scissors") {
        return lose();
    }else if (computer === "paper" && human === "rock") {
        return lose();
    }else if (computer === "scissors" && human === "paper") {
        return lose();
    }
}

let scorePlayrs = 0;
let scoreComputer = 0;

function won() {
    scorePlayrs++;
    const scoreP = document.querySelector("#players");
    scoreP.textContent = scorePlayrs;
}

function lose() {
    scoreComputer++;
    const scoreC = document.querySelector("#computer");
    scoreC.textContent = scoreComputer;
}

function score() {

}

function getComputerChoice() {
    let x = parseInt(Math.random() * 3);1

    switch (x) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function cardChanges(human, computer) {
    const cardPlayrs = document.querySelector(".cardPlayrs");
    const cardComputer = document.querySelector(".cardComputer");

    while (cardPlayrs.firstChild) {
        cardPlayrs.removeChild(cardPlayrs.firstChild);
    }
    while (cardComputer.firstChild) {
        cardComputer.removeChild(cardComputer.firstChild);
    }

    const cardImgPlayers = document.createElement("img");
    switch (human) {
        case "rock":
            cardImgPlayers.setAttribute("src", "./img/Rock.jpg");
            cardPlayrs.appendChild(cardImgPlayers); 
            break;
        case "paper":
            cardImgPlayers.setAttribute("src", "./img/Paper.jpg");
            cardPlayrs.appendChild(cardImgPlayers); 
            break;
        case "scissors":
            cardImgPlayers.setAttribute("src", "./img/Scissors.jpg");
            cardPlayrs.appendChild(cardImgPlayers); 
            break;
    }

    const cardImgComputer = document.createElement("img");
    cardImgComputer.style.transform = "scaleX(-1)";
    switch (computer) {
        case "rock":
            cardImgComputer.setAttribute("src", "./img/Rock.jpg");
            cardComputer.appendChild(cardImgComputer); 
            break;
        case "paper":
            cardImgComputer.setAttribute("src", "./img/Paper.jpg");
            cardComputer.appendChild(cardImgComputer); 
            break;
        case "scissors":
            cardImgComputer.setAttribute("src", "./img/Scissors.jpg");
            cardComputer.appendChild(cardImgComputer); 
            break;
    }
}