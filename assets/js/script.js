
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
    console.log("Show random word");
    document.getElementById("command").textContent = command

     if (command === "Red"){
        $("h2").removeClass("command");
    }
     if (command === "Yellow"){
        $("h2").removeClass("command");
    }
     if (command === "Blue"){
        $("h2").removeClass("command");
    }
    if (command === "Green"){
        $("h2").removeClass("command");
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

    // Once game has started this will display the commands
    let command = randomCommand();
    displayCommand(command);

    //Enable Game buttons
    document.getElementById("red-button").disabled = false;
    document.getElementById("yellow-button").disabled = false;
    document.getElementById("blue-button").disabled = false;
    document.getElementById("green-button").disabled = false;

    //Disable Start Button
    document.getElementById("startButton").disabled = true;

    // Once the buttons are clicked and correct the game will continue if not then the game will end
    document.getElementById("red-button").onclick = function() {
        if (command === 'Red') {
            updateScore();
            playGame();
        } else {
            endGame();
            $('#myModalOver').modal('show');
        }   
    };

    document.getElementById("yellow-button").onclick = function(){
        if (command === 'Yellow') {
            updateScore();
            playGame();
        } else {
            endGame();
            $('#myModalOver').modal('show');
        }   
    };

    document.getElementById("green-button").onclick = function(){
        if (command === 'Green') {
            updateScore();
            playGame();
        } else {
            endGame();
            $('#myModalOver').modal('show');
        }   
    };

    document.getElementById("blue-button").onclick = function(){
        if (command === 'Blue') {
            updateScore();
            playGame();
        } else {
            endGame();
            $('#myModalOver').modal('show');
        }   
    };
}

// Hotkey Commands when the key is pressed the button will be clicked.

// Help From Stack Overflow
    window.addEventListener("keydown", redKey, true);
    function redKey(e){
    if(e.keyCode == 87){ // This makes the key W click the red button
        document.getElementById("red-button").click();
    }
}

   window.addEventListener("keydown", yellowKey, true);
    function yellowKey(e){
    if(e.keyCode == 65){ // This makes the key A click the yellow button
        document.getElementById("yellow-button").click();
    }
}

  window.addEventListener("keydown", greenKey, true);
    function greenKey(e){
    if(e.keyCode == 83){ // This makes the key S click the green button
        document.getElementById("green-button").click();
    }
}

  window.addEventListener("keydown", blueKey, true);
    function blueKey(e){
    if(e.keyCode == 68){ // This makes the key D click the blue button
        document.getElementById("blue-button").click();
    }
}

        // Used to start the game
 window.addEventListener("keydown", startKey, true);
    function startKey(e){
    if(e.keyCode == 32){ //Spacebar
        document.getElementById("startButton").click();
    }
}
    
function endGame() {

    endGame.called = true;

    $('#myModalOver').modal('show');

    $("#startButton").show();
 
    // Hide Timer
    $("#timer").hide();

    //Removes Commands
    $( "#command" ).addClass("command");

    //disables the game buttons
    document.getElementById("red-button").disabled = true;
    document.getElementById("yellow-button").disabled = true;
    document.getElementById("blue-button").disabled = true;
    document.getElementById("green-button").disabled = true;

    //Enables Start Button
    document.getElementById("startButton").disabled = false;

}

const timeleftDisplay = document.querySelector("#timer");
const startBtn = document.querySelector("#startButton");
let timeLeft = 3;

function displayTimer() {
    // Help From Code with Ania Kubów on youtube
    /*let timeDown = setInterval(function(){
        if(timeLeft <= 0 ) {
            endGame();
            clearInterval(timeDown);
            console.log("timer");
        }
        if (endGame.called === true) {
            clearInterval(timeDown);
            console.log("timer-end");
        }

        timeleftDisplay.innerHTML = timeLeft;
        timeLeft -=1;
        }, 1000)

    startBtn.addEventListener("click", displayTimer);*/
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

