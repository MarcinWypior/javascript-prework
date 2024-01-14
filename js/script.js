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


