var wordDisplay = document.getElementById("word-display");
var guessDisplay = document.getElementById("guess-display");
var letterDisplay = document.getElementById("letter-display");
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];
var wordSelection = ["panda","red panda","owl"];
var currentChoiceIndex = Math.floor(Math.random()*wordSelection.length);
var wordChoice = wordSelection[currentChoiceIndex];
var currentWord = Array.from(wordChoice);
var guessedLetters = [];
var guessWord = [];

startGame();

document.onkeydown = function(event) {
    makeGuess(event.key);
}

function makeGuess(key) {
    for(var i = 0; i < alphabet.length; i++) {
        if (key === alphabet[i]) {
            if (guessedLetters.indexOf(key) === -1) {
                guessedLetters.push(key);
                updateGuess(key);
                checkGuess(key);
            }   
        }
    }
};

function updateGuess() {
    guessDisplay.textContent = guessedLetters;
}

function pickWord() {
    currentChoiceIndex;
    guessWordLength();
    setWordDisplay();
}
function guessWordLength() {
    for (i = 0; i < currentWord.length; i++) {
        guessWord.push("_ ,");
     };
}

function setWordDisplay() {
    for (var i = 0; i < guessWord.length; i++) {
        var newBlank = document.createElement("a");wordDisplay.appendChild(newBlank);
        newBlank.setAttribute("id", "blank" + i);
        newBlank.innerHTML = guessWord[i];
    };
}

function startGame() {
    guessedLetters = [];
    updateGuess();
    pickWord();
}

function checkGuess(letter) {
    for (var i = 0; i < currentWord.length; i++) {
        if (letter === currentWord[i])
            document.getElementById("blank" + i).textContent = currentWord[i];
    }
}