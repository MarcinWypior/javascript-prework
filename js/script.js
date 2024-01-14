var randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
var computerMove;

var playerMove, playerInput;
playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
printMessage('wybrałeś: '+playerMove)

playerMove=getMoveName(playerInput)

computerMove=getMoveName(randomNumber)
printMessage('komputer wylosował: '+computerMove)

displayResult(playerMove,computerMove)

var argButtonName, buttonTest;

/**
 * Describe this function...
 */
function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');
}
buttonTest = document.getElementById('button-test');
buttonTest.addEventListener('click', function(){ buttonClicked('Guzik TEST'); });

buttonRock = document.getElementById('button-rock');
buttonRock.addEventListener('click', function(){ buttonClicked('Guzik kamień'); });

buttonPaper = document.getElementById('button-paper');
buttonPaper.addEventListener('click', function(){ buttonClicked('Guzik papier'); });

buttonPaper = document.getElementById('button-scissors');
buttonPaper.addEventListener('click', function(){ buttonClicked('Guzik nożyce'); });
