//DOM References
var buttonDiv = document.querySelector('.buttons');
var resultText = document.querySelector('.result h2');

//Global Variables
var pChoice;
var cChoice;
var playerWin = '';
var playOptions =["rock", "paper", "scissors"]
var cChoiceText = document.getElementById('cChoice');
//Functions
var displayResults = function(){
    cChoiceText.textContent = playOptions[cChoice];
    resultText.textContent = playerWin;
}
var computerTurn = function(){
    //Computer will choose RPorS via Math.random()
    // correlate "rock, "paper", "scissors to numeric values"
    cChoice = Math.floor(Math.random() * 3);
    checkForWin();
}

var checkForWin = function(){
    if (pChoice !== cChoice)
    switch(pChoice) {
        case 0: //player chose rock
            playerWin = cChoice === 1 ? 'You Lose' : 'You Win!';
            break;
        case 1: //player chose paper
            playerWin = cChoice === 2 ? 'You Lose' : 'You Win!';
            break;
        case 2: //player chose scissors
            playerWin = cChoice === 0 ? 'You Lose' : 'You Win!';
            break;
    }   
    if (pChoice === cChoice){
    playerWin = 'Yall Tied';
    }
    displayResults();
}   


//Event Handlers
buttonDiv.addEventListener('click', function(e) {
    e.stopPropagation();
    pChoice = parseInt(e.target.id);
    console.log(pChoice);

    computerTurn();
})




//compare choices
//make a function checkPlayerWin(playerChoice, computerChoice) => true/false

//Display results
//color the button chosen by the player
//disable the other two buttons
//display the computer choice
// add the relevant image 
//display message of who won