var myChoice = "paper";
var compChoice = "paper";
var wins = 0;
var ties = 0;
var loses = 0;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

function hideOrShow(who, hideOrShow, selection){
    if (who == 'user') {
        if (hideOrShow == 'hide') {
            if (selection == 'rock') {
                document.getElementById("userPaper").style.display = "none";
                document.getElementById("userScissor").style.display = "none";
            }
            else if (selection == 'paper') {
                document.getElementById("userRock").style.display = "none";
                document.getElementById("userScissor").style.display = "none";
            }
            else if (selection == 'scissor') {
                document.getElementById("userRock").style.display = "none";
                document.getElementById("userPaper").style.display = "none";
            }   
        }
        else if (hideOrShow == 'show') {
            document.getElementById("userRock").style.display = "initial";
            document.getElementById("userPaper").style.display = "initial";
            document.getElementById("userScissor").style.display = "initial";
        }

    }
    else if(who == 'comp'){
        if (hideOrShow == 'hide') {
            if (selection == 'rock') {
                document.getElementById("compPaper").style.display = "none";
                document.getElementById("compScissor").style.display = "none";
            }
            else if (selection == 'paper') {
                document.getElementById("compRock").style.display = "none";
                document.getElementById("compScissor").style.display = "none";
            }
            else if (selection == 'scissor') {
                document.getElementById("compRock").style.display = "none";
                document.getElementById("compPaper").style.display = "none";
            }  
        }
        else if (hideOrShow == 'show') {
            document.getElementById("compRock").style.display = "initial";
            document.getElementById("compPaper").style.display = "initial";
            document.getElementById("compScissor").style.display = "initial";
        }

    }


}

function comparewinner(){
    if (myChoice == compChoice) {
        weHaveATie()
    }
    //Loses
    else if (myChoice == "paper" && compChoice == "scissor") {
        weHaveALoser()
    }
    else if (myChoice == "scissor" && compChoice == "rock") {
        weHaveALoser()
    }
    else if (myChoice == "rock" && compChoice == "paper") {
        weHaveALoser()
    }
    //Wins
    else if (myChoice == "scissor" && compChoice == "paper") {
        weHaveAWinner()
    }
    else if (myChoice == "rock" && compChoice == "scissor") {
        weHaveAWinner()
    }
    else if (myChoice == "paper" && compChoice == "rock") {
        weHaveAWinner()
    }
}

function weHaveAWinner(){
    wins = wins + 1;
    document.getElementById("score").textContent = "Score: " + wins +"W " + ties + "T " + loses +"L";
    window.alert("You Win");
}

function weHaveALoser(){
    loses = loses + 1;
    document.getElementById("score").textContent = "Score: " + wins +"W " + ties + "T " + loses +"L";
    window.alert("You lose");
}

function weHaveATie(){
    ties = ties + 1;
    document.getElementById("score").textContent = "Score: " + wins +"W " + ties + "T " + loses +"L";
    window.alert("We have a Tie");
}

function reset() {
    var playagain = window.confirm("Wanna play again?")
    if (playagain == true) {
        hideOrShow("comp","show","rock")
        hideOrShow("user","show","rock")
    }
    else{
        document.getElementById("comp").textContent = "Goodbye";
    }
}

function choose(selection) {
    myChoice = selection;

    hideOrShow('user','hide',myChoice)

    compChoice = getRandomInt(1,4)

    if (compChoice == 1) {
        hideOrShow('comp','hide','rock')
        compChoice = "rock"
    }
    if (compChoice == 2) {
        hideOrShow('comp','hide','paper')
        compChoice = "paper"  
    }
    if (compChoice == 3) {
        hideOrShow('comp','hide','scissor') 
        compChoice = "scissor"
    } 

    setTimeout(comparewinner, 200);
 
    setTimeout(reset, 300);
}



