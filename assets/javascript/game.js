var guessedLetters = [];
var gameStarted = true;
var turnGuess = 0;
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z'];

// turnsLeft = makeGuess - turnGuess;

// function checkGuess(letter) {
//     var 
// };


function makeGuess(key) {
    for(var i = 0; i < alphabet.length; i++) {
        if (key === alphabet[i]) {
            if (guessedLetters.indexOf(key) === -1) {
                guessedLetters.push(key);
                updateChoices();
            }
        }   
    }
}

function updateChoices() {
    var letterDisplay = document.getElementById("letter-display");
    letterDisplay.innerHTML = "";
    for(var i = 0; i <guessedLetters.length; i++) {
        var newLetter = document.createElement('div');
        newLetter.textContent = guessedLetters[i];
        letterDisplay.appendChild(newLetter);
    }
}

document.onkeydown = function(event) {
    if (gameStarted = true) {
        makeGuess(event.key);
        console.log(guessedLetters);
        // checkwin();
        // checklose(); 
    }
};