let userSc = 0;
let compSc = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const usScP = document.querySelector("#userscore");
const cpScP = document.querySelector("#compscore");


const showWin = (userWin)=>{
    if(userWin){
        userSc++;
        usScP.innerText = userSc;
        console.log("you win");
        msg.innerText = "You win!";
        msg.style.backgroundColor = "pink" ;

    }
    else{
        compSc++;
        console.log("Computer wins");
        msg.innerText = "Computer wins!";
        msg.style.backgroundColor = "yellow";
        cpScP.innerText = compSc;
    }
}


const genCompChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const ind = Math.floor(Math.random()*3 ); 
    return options[ind]; 
}

const drawgame = () =>{
    console.log("Game was draw");
    msg.innerText = "Game draw!";
    msg.style.backgroundColor = "red";
}

const playGm = ((usrChoice , userWin)=>{
console.log("user choice = ", usrChoice);
const compCh = genCompChoice();
console.log("computer choice = ", compCh);
 if(usrChoice===compCh){
         drawgame();
 }
 else{
    let userWin = true;
    if(usrChoice === "rock"){
        userWin = compCh === "paper"? false : true;
    } 
    else if (usrChoice === "paper")
    {
        userWin = compCh === "scissors"? false : true;
    }
    else{
        userWin = compCh === "rock"? false : true;
    }

        showWin(userWin , usrChoice , compCh);
 }

})

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const usrChoice = choice.getAttribute("id");
          
        playGm(usrChoice);
    })
}) 