var wordDisplay = document.getElementById("word-display");
var guessDisplay = document.getElementById("guess-display");
var letterDisplay = document.getElementById("letter-display");
var livesDisplay = document.getElementById("lives-display");
var winDisplay = document.getElementById("win-display");
var newGameBtn = document.getElementById("new-game-btn");
var gameImg = document.getElementById("game-img");
var winMessage = document.getElementById("win-message");
                  

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];

var wordSelection = [
    {word: "Panda", src:"assets/images/panda.jpg"},
    {word: "Snow Owl", src:"assets/images/snow_owl.jpg"},
    {word: "Red Panda", src:"assets/images/red_panda.jpg"},
    {word: "Owl", src:"assets/images/owl.jpg"},
    {word: "Beaver", src:"assets/images/beaver.jpg"},
    {word: "Barn Owl", src:"assets/images/barn_owl.jpg"},
    {word: "Blue Whale", src:"assets/images/blue_whale.jpg"},
    {word: "Elephant", src:"assets/images/elephant.jpg"},
    {word: "Grizzly Bear", src:"assets/images/grizzly_bear.jpg"},
    {word: "Hummingbird", src:"assets/images/hummingbird.jpg"},
    {word: "Fox", src:"assets/images/fox.jpg"},
    {word: "Jaguar", src:"assets/images/jaguar.jpg"},
    {word: "Komodo Dragon", src:"assets/images/komodo_dragon.jpg"},
    {word: "Macaw", src:"assets/images/macaw.jpg"},
    {word: "Salamander", src:"assets/images/salamander.jpg"},
    {word: "Squirrel", src:"assets/images/squirrel.jpg"},
    {word: "Swan", src:"assets/images/swan.jpg"},
    {word: "Grey Wolf", src:"assets/images/grey_wolf.jpg"},
    {word: "Wolverine", src:"assets/images/wolverine.jpeg"},
    {word: "Zebra", src:"assets/images/zebra.jpg"},
    {word: "Yak", src:"assets/images/yak.jpeg"},
    {word: "Buffalo", src:"assets/images/buffalo.jpg"},
    {word: "Orca", src:"assets/images/orca.jpg"},
    {word: "Python", src:"assets/images/python.jpeg"},
    {word: "Ocelot", src:"assets/images/ocelot.jpg"},
    {word: "Sea Otter", src:"assets/images/sea_otter.jpg"},
    {word: "Octopus", src:"assets/images/octopus.jpg"},
    {word: "Armadillo", src:"assets/images/armadillo.jpg"},
    {word: "Aye Aye", src:"assets/images/aye_aye.jpg"},
    {word: "Capybara", src:"assets/images/capybara.JPG"},
    {word: "Chinchilla", src:"assets/images/chinchilla.jpg"},
    {word: "Impala", src:"assets/images/impala.jpg"},
    {word: "Gorilla", src:"assets/images/gorilla.jpg"}
];

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
    wordChoice = wordSelection[currentChoiceIndex].word;
    currentWord = Array.from(wordChoice.toLowerCase());
    guessWordLength();
    setWordDisplay();
}
function guessWordLength() {
    for (i = 0; i < currentWord.length; i++) {
        if (currentWord[i] != " "){
            guessWord.push("_,");
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
    winMessage.textContent = "";
    wordDisplay.innerHTML = "";
    guessWord = [];
    livesLeft = 7;
    guessedLetters = [];
    pickWord();
    gameImg.src = "assets/images/question-mark.jpg"
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
        gameWin(wordChoice)
    }
}

function checkLose() {
    if (livesLeft <= 0) {
        winMessage.textContent = "You lose. The right word was " + wordChoice;
    }

}

function updateDisplay() {
    updateGuessDisplay();
    updateLivesDisplay();
    updateWinDisplay();
}

function gameWin(x) {
    gameImg.src = wordSelection[currentChoiceIndex].src;
    win ++;
    winMessage.textContent = "You Win!!! The word was " + x;
    updateDisplay();
}