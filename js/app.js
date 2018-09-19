const phrases = [
    "welcome to the jungle",
    "winner winner",
    "chicken dinner",
    "go for gold",
    "keep trying",
    "practice makes perfect"
];

const randomNumber = Math.floor(Math.random() * phrases.length);

const phrase = new Phrase(phrases[randomNumber]);
const game = new Game(phrase);
/*
eventlistener for start game needed
*/

$('#btn__reset').on('click', () => resetDisplay());

function resetDisplay() {
    $('#overlay').hide();
    phrase.addPhraseToDisplay();
};

const markButton = (letter) => {
    if(phrase.phrase.indexOf(letter.text()) !== -1){
        letter.addClass('chosen');
    } else {
        game.removeLife();
        letter.addClass('wrong');
    }
        letter.attr("disabled", "disabled");
  };
// evernt listener for keyboard button so that clicking a button calls the
// markbutton()

$( ".key" ).on( "click",function() {
    let letter = $(this).text();
    markButton($(this));
    phrase.checkLetter(letter);
});
 