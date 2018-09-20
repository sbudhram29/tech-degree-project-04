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
/*
eventlistener for start game needed
*/

$('#btn__reset').on('click', () => resetDisplay());

function resetDisplay() {
    $('#overlay').hide();
    phrase = game.startGame();
    phrase.addPhraseToDisplay();
};

const markButton = (letter) => {
    game.handleInteraction(phrase, letter);
    $(`button .key:contains("${letter}")`).attr("disabled", "disabled");
};
// eventlistener for keyboard button so that clicking a button calls the
// markbutton()

$(".key").on("click", function () {
    let letter = $(this).text();
    markButton(letter);
});

$("body").keydown(function (e) {
    let charNum = e.which;
    let letter = String.fromCharCode(charNum);
    if (charNum >= 65 && charNum <= 90) {
        markButton(letter.toLowerCase());
    }
});