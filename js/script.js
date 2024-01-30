function buttonClicked(argButtonName) {
    console.log(argButtonName)
    clearMessages();
    var randomNumber;
    randomNumber = Math.floor(Math.random() * 3 + 1);
    var computerMove;

    
    var playerMove, playerInput;
    playerMove = argButtonName

    playerMove=getMoveName(argButtonName)

    computerMove=getMoveName(randomNumber)
    printMessage('komputer wylosował: '+computerMove)

    displayResult(playerMove,computerMove)
    console.log(argButtonName + ' został kliknięty');
}

const buttonRock = document.getElementById('button-rock');
buttonRock.addEventListener('click', function(){ buttonClicked(1); });

const buttonPaper = document.getElementById('button-paper');
buttonPaper.addEventListener('click', function(){ buttonClicked(2); });

const buttonScissors = document.getElementById('button-scissors');
buttonScissors.addEventListener('click', function(){ buttonClicked(3); });


