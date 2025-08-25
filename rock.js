let userScore = 0;
let compScore = 0;

let choice = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const uScore = document.querySelector("#user-score");
const cScore = document.querySelector("#comp-score");


const gencompChoice = () => {
    // computer choice rock,paper,scissor 

    const option = ["rock", "paper", "scissor"];
    const ranIdx = Math.floor(Math.random() * 3);
    return option[ranIdx];
}
// draw 
const draw = () => {
    console.log("Game Draw");
    msg.innerText = "Game Draw,Play again";
    msg.style.backgroundColor = "grey";
    console.log(msg)
}
// showing winnenr 

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin === true) {
        console.log("You Won");
        msg.innerText = `You win!, ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        uScore.innerText = userScore;
        console.log(msg)
        console.log(userScore)
    }
    else {
        console.log("You loose");
        msg.innerText = `You Loose , ${compChoice} beats ${userChoice}`;
        compScore++;
        cScore.innerText = compScore;
        msg.style.backgroundColor = "red";
        console.log(msg)
        console.log(compScore)
    }
}

const playGame = (userChoice) => {

    const compChoice = gencompChoice();
    console.log("user = ", userChoice);
    console.log("computer = ", compChoice);
    if (userChoice === compChoice) {
        draw();

    }
    // for user Win / lose 
    else {
        let userWin = true;
        if (userChoice === "rock") {
            // user = rock then comp = paper , scissor ;
            userWin = compChoice == "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            // user = paper then comp =scissor,rock ;
            userWin = compChoice == "scissor" ? false : true;
        }
        else {
            // user =scissor then comp = paper , rock ;
            userWin = compChoice == "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choice.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});