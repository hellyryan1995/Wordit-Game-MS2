
let commands = ["Red", "Yellow", "Blue", "Green"];
let displayTime = document.querySelector("#timer");
let score = 0;
let command = randomCommand();

// Removes Start button when the game begins
function removeButton(){
    $( "#startButton" ).slice( 0 ).css( "display", "none" );
}

// Will create one of the 4 word randomly
function randomCommand(){
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
    score = 0;
    displayCommand(command);

}

function playGame(){
    
}
