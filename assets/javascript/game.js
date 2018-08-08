var letterDisplay = document.getElementById("letter-display");
var wordDisplay = document.getElementById("word-display");
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];
var wordSelection = ["Panda","Red Panda","Owl"];
var currentChoiceIndex = Math.floor(Math.random()*wordSelection.length);
var wordChoice = wordSelection[currentChoiceIndex];
var currentWord = Array.from(wordChoice);
var guessedLetters = [];
var correctLetter = [];
var gameStarted = true;

// event listener for letters pressed
document.onkeydown = function(event) {
    if (gameStarted === true) {
        makeGuess(event.key);
    } else {
        startGame();
    }
}

// if geuss is valid option. checkGuess() is called
function makeGuess(key) {
    for(var i = 0; i < alphabet.length; i++) {
        if (key === alphabet[i]) {
            if (guessedLetters.indexOf(key) === -1) {
                guessedLetters.push(key);
                checkGuess(alphabet[i]);
                updateChoices();
            }   
        }
    }
};

// will check if letter was correct
function checkGuess(letter) {
    for (var i = 0; i <currentWord.lenght; i++) {
        if (letter === currentWord[i]) {
            console.log("yeah thats right")
        }
    }
};

// should show all guessed letters ... once
function updateChoices() {
    letterDisplay.textContent = "";
    for(var i = 0; i <guessedLetters.length; i++) {
        var newLetter = document.createElement('div');
        newLetter.setAttribute("class", "letter");
        letterDisplay.appendChild(newLetter);
        newLetter.innerHTML = guessedLetters[i];
    }
};

// will set blank for game display
function setWordDisplay() {
    for (i = 0; i < currentWord.length; i++) {
        var newSpace = document.createElement("div");
        newSpace.textContent = "-";
        wordDisplay.appendChild(newSpace);
    }
}