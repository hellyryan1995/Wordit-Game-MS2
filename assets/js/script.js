let displayTime = document.querySelector("#timer");
let command = randomCommand();

// Removes Start button when the game begins
function removeButton(){
    $( "#startButton" ).hide();
}

// Will create one of the 4 words randomly
function randomCommand(){
    let commands = ["Red", "Yellow", "Blue", "Green"];
    return commands[Math.floor(Math.random() * commands.length)];

}

// display random command word
function displayCommand(command) {
    if (command === "Red"){
        $("h2").removeClass("red-command");
    }
    if (command === "Yellow") {
        $("h2").removeClass("yellow-command");
    }
    if (command === "Blue") {
        $("h2").removeClass("blue-command");
    }
    if (command === "Green") {
        $("h2").removeClass("green-command");
    }
}

function startGame() {
    removeButton();
    resetScore();
    playGame();
    displayTimer();

    endGame.called = false;

}

function playGame() {

    // enables the game buttons
    document.getElementById("red-button").disabled = false;
    document.getElementById("yellow-button").disabled = false;
    document.getElementById("blue-button").disabled = false;
    document.getElementById("green-button").disabled = false;

    //Help From w3school // This is used to insure the correct button is selected.
    let redBtn = document.getElementById("red-button").getAttribute("data-type");
    let yellowBtn = document.getElementById("yellow-button").getAttribute("data-type");
    let greenBtn = document.getElementById("green-button").getAttribute("data-type");
    let blueBtn = document.getElementById("blue-button").getAttribute("data-type");
    
    // Once game has started this will display the commands
    displayCommand(command);
    randomCommand();
    
    // Once the buttons are clicked and correct the game will continue if not then the game will end
    $("#red-button").click(function() {
        if (command === redBtn) {
            updateScore();
            playGame();
        } else {
            endGame();
        }   
    });

    $("#yellow-button").click(function(){
        if (command === yellowBtn) {
            updateScore();
            playGame();
        } else {
            endGame();
        }   
    });

    $("#green-button").click(function(){
        if (command === greenBtn) {
            updateScore();
            playGame();
        } else {
            endGame();
        }   
    });

    $("#blue-button").click(function(){
        if (command === blueBtn) {
            updateScore();
            playGame();
        } else {
            endGame();
        }   
    });

}

function endGame() {

    //alert("Game over! You Lost!");
    $("#startButton").show();
    //disables the game buttons
    endGame.called = true;
    document.getElementById("red-command-styling").classList.add("red-command");
    document.getElementById("yellow-command-styling").classList.add("yellow-command");
    document.getElementById("blue-command-styling").classList.add("blue-command");
    document.getElementById("green-command-styling").classList.add("green-command");

    document.getElementById("red-button").disabled = true;
    document.getElementById("yellow-button").disabled = true;
    document.getElementById("blue-button").disabled = true;
    document.getElementById("green-button").disabled = true;

}

function displayTimer() {
}

// this will update the score once you click the correct answer
function updateScore() {
    score += 1;
  $("#score")[0].innerHTML = score;

}

// This will reset the score back to 0 once the game starts again
function resetScore(){
    score = 0;
    $('#score').text(score);
} // help from stackoverflow

function updateHighscore(){

}
