const phrase = new Phrase("Hello World", 0);

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
    console.log(letter);
  };
// evernt listener for keyboard button so that clicking a button calls the
// markbutton()

$( ".key" ).on( "click",function() {
    let letter = $(this).text();
    markButton(letter);
    phrase.checkLetter(letter);
});
 