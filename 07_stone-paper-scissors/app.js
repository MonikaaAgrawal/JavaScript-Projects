const choices = document.querySelector('.choices')

let options = ['rock', 'paper', 'scissors'];
let userChoice;
let computerChoice;

let userScoreSpan = document.getElementById('user-score')
let computerScoreSpan = document.getElementById('computer-score')

let userScore = 0;
let computerScore = 0;

document.querySelectorAll('.choices div').forEach(function(choice){
    choice.addEventListener('click', function(){
        play(choice.className);
    });
});

function play(choice){
    userChoice = choice;
    computerChoice = options[Math.floor(Math.random() * options.length)];
    console.log("userChoice", userChoice)
    console.log("computerChoice", computerChoice)
    winner(userChoice, computerChoice);
    
}

function updateScore(){
    userScoreSpan.textContent = userScore;
    computerScoreSpan.textContent = computerScore
}

function winner(userChoice, computerChoice){
    let result = document.querySelector('.result');
    if(userChoice === 'rock' && computerChoice === 'scissors' || userChoice === 'paper' && computerChoice === 'rock' || userChoice === 'scissors' && computerChoice === 'paper'){
        result.innerText = "You win"
        userScore+=1;
    }
    else if(userChoice === 'rock' && computerChoice === 'paper' || userChoice === 'paper' && computerChoice === 'scissors' || userChoice === 'scissors' && computerChoice === 'rock'){
        result.innerText = "Computer wins"
        computerScore+=1;
    }
    else{
        result.innerText = "Draw"
    }
    updateScore();
}
