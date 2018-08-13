var wordDisplay = document.getElementById("word-display");
var guessDisplay = document.getElementById("guess-display");
var letterDisplay = document.getElementById("letter-display");
var livesDisplay = document.getElementById("lives-display");
var winDisplay = document.getElementById("win-display");
var newGameBtn = document.getElementById("new-game-btn")
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];
var wordSelection = ["panda","red panda","owl"];
var currentChoiceIndex;
var wordChoice;
var currentWord;
var guessWord = [];
var guessedLetters = [];
var livesLeft = 7;
var win = 0;

newGameBtn.onclick = function() {
    startGame();
} 

document.onkeydown = function(event) {
    makeGuess(event.key);
}

function makeGuess(key) {
    for(var i = 0; i < alphabet.length; i++) {
        if (key === alphabet[i]) {
            if (guessedLetters.indexOf(key) === -1) {
                guessedLetters.push(key);
                checkGuess(key);
            }   
        }
    }
};

function updateWinDisplay() {
    winDisplay.textContent = ("Wins: " + win);
}

function updateLivesDisplay() {
    livesDisplay.textContent = ("Lives Remaining: " + livesLeft);
}

function updateGuessDisplay () {
    guessDisplay.textContent = guessedLetters;
}

function pickWord() {
    currentChoiceIndex = Math.floor(Math.random()*wordSelection.length);
    wordChoice = wordSelection[currentChoiceIndex];
    currentWord = Array.from(wordChoice);;
    guessWordLength();
    setWordDisplay();
}
function guessWordLength() {
    for (i = 0; i < currentWord.length; i++) {
        if (currentWord[i] != " "){
            guessWord.push("_ ,");
        } else {
            guessWord.push(" ")
        }
     };
}

function setWordDisplay() {
    for (var i = 0; i < guessWord.length; i++) {
        var newBlank = document.createElement("a");
        newBlank.setAttribute("class", "px-1")
        if (guessWord[i] === " ") {
            newBlank.setAttribute("id", "blank-space")
            newBlank.textContent = " ";
            wordDisplay.appendChild(newBlank);
        } else {
            newBlank.setAttribute("id", "blank-" + i);
            newBlank.textContent = guessWord[i];
            wordDisplay.appendChild(newBlank);
        }
    };
}

function startGame() {
    wordDisplay.innerHTML = "";
    guessWord = [];
    livesLeft = 7;
    guessedLetters = [];
    pickWord();
    updateDisplay();
}

function checkGuess(letter) {
    var rightGuess = false;
    for (var i = 0; i < currentWord.length; i++) {
        if (letter === currentWord[i]) {
            document.getElementById("blank-" + i).textContent = currentWord[i];
            guessWord[i] = currentWord[i];
            rightGuess = true;
        }
    }
    if (rightGuess === false){
        livesLeft --;
        updateDisplay();
        checkLose();
    } else {
        updateDisplay();
        checkWin();
    }
}

function checkWin() {
    var winner = true;
    for (var i = 0; i < currentWord.length; i++) {
        if (currentWord[i] != guessWord[i]) {
            winner = false;
        }
    }
    if (winner === true) {
        alert(" you win!")
    }
}

function checkLose() {
    if (livesLeft <= 0) {
        alert("You lose. The right word was " + wordChoice)
    }

}

function updateDisplay() {
    updateGuessDisplay();
    updateLivesDisplay();
    updateWinDisplay();
}