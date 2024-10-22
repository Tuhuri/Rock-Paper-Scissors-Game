let userScore = 0;
let computerScore = 0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score")
const computerScorePara = document.querySelector("#computer-score")

const genComputerChoice = () =>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
    //rock paper scissors
};


const drawGame =  () =>{
    console.log("Game was draw.");
    msg.innerText = "Game was draw.Play again";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin,userChoice,ComputerChoice)  =>{
   if(userWin){
    userScore++;
    userScorePara.innerText = userScore;
    console.log("You win!");
    msg.innerText = `You win! Your ${userChoice} beats ${ComputerChoice}`;
    msg.style.backgroundColor = "Green";
   }else{
    computerScore++;
    computerScorePara.innerHTML = computerScore;
    msg.innerText = `You lose! ${userChoice} beats Your ${ComputerChoice}`;
    msg.style.backgroundColor = "red";
   }
}


const playGame = (userChoice) =>{
    console.log("User choice =",userChoice);
    ///Generate computer choice
    const ComputerChoice = genComputerChoice();
    console.log("computer choice=",ComputerChoice);


    if(userChoice === ComputerChoice){
        //draw game 
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = ComputerChoice === "paper" ? false: true;
        }else if(userChoice === "paper"){
            userWin = ComputerChoice === "scissors" ? false:true;
        }else{
            ComputerChoice === "rock" ? false:true;
        }
        showWinner(userWin,userChoice,ComputerChoice);
    }
}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
    //    console.log("Choice was clicked",userChoice);
    playGame(userChoice);
    });
});