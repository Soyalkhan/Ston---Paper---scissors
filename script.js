let paper = document.querySelector(".paper");
let rock = document.querySelector(".stone");
let scissors = document.querySelector(".scissors");
let pop = document.querySelector(".pop");
let userCountpara = document.querySelector("#userCOunt");
let comCountpara = document.querySelector("#compcounter");
let DrawCountpara = document.querySelector("#Drwcounter");


let computerNumber = undefined;
let comChoise = undefined;
let CountDraw = 0;
let userCount = 0;
let comCount = 0;
const computerNumberCheck = () => {
    // 0 === rock , 1 === paper , 2 === scissors
    //generate no 0 to 2
    computerNumber = Math.floor(Math.random() * 3);

    if (computerNumber === 0) {
        comChoise = "rock";
        console.log("ComChoise", comChoise);

    }
    if (computerNumber === 1) {
        comChoise = "paper";
        console.log("ComChoise", comChoise);

    }
    if (computerNumber === 2) {
        comChoise = "scissors";
        console.log("ComChoise", comChoise);
    }
}

rock.addEventListener("click", () => {
    userChoise = "rock";
    console.log("user num:", userChoise);
    computerNumberCheck();
    checkWinner();
});

paper.addEventListener("click", () => {
    userChoise = "paper";
    console.log("user num:", userChoise);
    computerNumberCheck();
    checkWinner();
});

scissors.addEventListener("click", () => {
    userChoise = "scissors";
    console.log("user num:", userChoise);
    computerNumberCheck();
    checkWinner();
});

const checkWinner = () => {
   
    if (userChoise === comChoise) {
        console.log("match draw");
        pop.innerText = `Match Draw! user choise: ${userChoise} & com choise ${comChoise}`;
        CountDraw++;
        DrawCountpara.innerText = CountDraw;
    }else {
        if (userChoise === "rock" && comChoise === "paper") {    
            console.log("computer Wins!");
            pop.innerText = `Computer Wins! user choise: ${userChoise} & com choise ${comChoise}`;
            comCount++;
            comCountpara.innerText = comCount;
        }
        else if (userChoise === "paper" && comChoise === "rock"){
            console.log("User Win");
            pop.innerText = `User Wins! user choise: ${userChoise} & com choise ${comChoise}`;
            userCount++;
            userCountpara.innerText = userCount;
        }
        else if(userChoise === "scissors" && comChoise === "rock"){
            console.log("computer win!");
            pop.innerText = `Computer Wins! user choise: ${userChoise} & com choise ${comChoise}`;
            comCount++;
            comCountpara.innerText = comCount;
            
        }
        else if(userChoise === "scissors" && comChoise === "paper" ){
            console.log("user win");
            pop.innerText = `User Wins! user choise: ${userChoise} & com choise ${comChoise}`;
            userCount++;
            userCountpara.innerText = userCount;
        }
        else if(userChoise === "rock" && comChoise === "scissors"){
            console.log("user win");
            pop.innerText = `User Wins! user choise: ${userChoise} & com choise ${comChoise}`;
            userCount++;
            userCountpara.innerText = userCount;
        }
        else if(userChoise === "paper" && comChoise === "scissors"){
            console.log("computer win");
            pop.innerText = `Computer Wins user choise: ${userChoise} & com choise ${comChoise}`;
            comCount++;
            comCountpara.innerText = comCount;
            
        }else{
            console.log("Something went wrong!");
        }
    }
    console.log("user :",userCount , "computer :",comCount );

}
    

