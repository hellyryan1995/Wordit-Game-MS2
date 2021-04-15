
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
    endGame.called = false;

    removeButton();
    resetScore();
    playGame();
    displayTimer();
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
    $( "#red-command-styling" ).addClass("red-command");
    $( "#yellow-command-styling" ).addClass("yellow-command");
    $( "#green-command-styling" ).addClass("green-command");
    $( "#blue-command-styling" ).addClass("blue-command");
    
    // Once game has started this will display the commands
    let command = randomCommand();
    displayCommand(command);
    
    // Once the buttons are clicked and correct the game will continue if not then the game will end
    $("#red-button").click(function() {
        if (command === redBtn) {
            updateScore();
            $( "#red-command-styling" ).addClass("red-command");
            playGame();
        } else {
            endGame();
        }   
    });

    $("#yellow-button").click(function(){
        if (command === yellowBtn) {
            updateScore();
            $( "#yellow-command-styling" ).addClass("yellow-command");
            playGame();
        } else {
            endGame();
        }   
    });

    $("#green-button").click(function(){
        if (command === greenBtn) {
            updateScore();
            $( "#green-command-styling" ).addClass("green-command");
            playGame();
        } else {
            endGame();
        }   
    });

    $("#blue-button").click(function(){
        if (command === blueBtn) {
            updateScore();
            $( "#blue-command-styling" ).addClass("blue-command");
            playGame();
        } else {
            endGame();
        }   
    });

}

function endGame() {

    endGame.called = true;

    //alert("Game over! You Lost!");
    $("#startButton").show();
    //disables the game buttons

    // Hide Timer
    $("#timer").hide();

    $( "#red-command-styling" ).addClass("red-command");
    $( "#yellow-command-styling" ).addClass("yellow-command");
    $( "#green-command-styling" ).addClass("green-command");
    $( "#blue-command-styling" ).addClass("blue-command");

    document.getElementById("red-button").disabled = true;
    document.getElementById("yellow-button").disabled = true;
    document.getElementById("blue-button").disabled = true;
    document.getElementById("green-button").disabled = true;

}

const timeleftDisplay = document.querySelector("#timer");
const startBtn = document.querySelector("#startButton");
let timeLeft = 3;

function displayTimer() {
    // Help From Code with Ania Kubów yon youtube
    setInterval(function(){
        if(timeLeft <= 0 ) {
            endGame();
            clearInterval(timeLeft = 0);
        }

        timeleftDisplay.innerHTML = timeLeft;
        timeLeft -=1;
        }, 1000)

    startBtn.addEventListener("click", displayTimer);
    }

// this will update the score once you click the correct answer
function updateScore() {
    score++;
  $("#score")[0].innerHTML = score;

}

// This will reset the score back to 0 once the game starts again
function resetScore(){
    score = 0;
    $('#score').text(score);
} // help from stackoverflow

function updateHighscore(){

}

