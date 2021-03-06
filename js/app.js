const phrases = [
    "welcome to the jungle",
    "winner winner",
    "chicken dinner",
    "go for gold",
    "keep trying",
    "practice makes perfect",
    "treehouse"
];

const game = new Game(phrases, 5);
let phrase = null;
let gameStarted = false;
let keyboardKeys = [];
/*
eventlistener for start game needed
*/

$('#btn__reset').on('click', () => resetDisplay());

function resetDisplay() {
    keyboardKeys = [];
    $('#overlay').hide();
    gameStarted = true;
    game.startGame();
};

const markButton = (letter) => {
    game.letter = letter;
    game.handleInteraction();
    $(`button.key:contains("${letter}")`).attr("disabled", "disabled");
};
// eventlistener for keyboard button so that clicking a button calls the
// markbutton()

$("button.key").on("click", function () {
    let letter = $(this).text();
    console.log(letter.charCodeAt(0));
    if (letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122) {
        markButton(letter);
    }
});

$("body").keydown(function (e) {
    let charNum = e.which;
    let letter = String.fromCharCode(charNum);
    if (charNum >= 65 && charNum <= 90 && gameStarted) {
        if (!keyboardKeys.includes(letter.toLowerCase())) {
            keyboardKeys.push(letter.toLowerCase());
            markButton(letter.toLowerCase());
        }
    }
});