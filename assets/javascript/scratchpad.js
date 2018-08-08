var guessedLetters = [];
var gameStarted = true;
var turnGuess = 0;
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wordSelection = ["Panda","Red Panda","Owl"];
var currentChoiceIndex = Math.floor(Math.random()*wordSelection.length)
var wordChoice = wordSelection[currentChoiceIndex];
var letterDisplay = document.getElementById("letter-display");
var wordDisplay = document.getElementById("word-display");
var currentWord 
messages = {
    win: 'You win!',
    lose: 'Game over!',
    guessed: ' already guessed, please try again...',
    validLetter: 'Please enter a letter from A-Z'
};

function setWordDisplay() {
    for (i = 0; i < currentWord.length; i++) {
        var newSpace = document.createElement("div");
        newSpace.textContent = "-";
        wordDisplay.appendChild(newSpace);
    }
};

function startGame(){
    currentWord = Array.from(wordChoice);
    setWordDisplay();           // causes js to load before html


};

// startGame();


function checkGuess(letter) {
    for (var i = 0; i <currentWord.lenght; i++) {
        if (letter === currentWord[i]) {

        }
    }
   
};

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

function updateChoices() {
    var letterDisplay = document.getElementById("letter-display");
    letterDisplay.textContent = "";
    for(var i = 0; i <guessedLetters.length; i++) {
        var newLetter = document.createElement('div');
        newLetter.setAttribute("class", "letter");
        newLetter.textContent = guessedLetters[i];
        letterDisplay.appendChild(newLetter);
    }
};

document.onkeydown = function(event) {
    if (gameStarted = true) {
        makeGuess(event.key);
        console.log(guessedLetters); 
    }
};




// start game function
// 