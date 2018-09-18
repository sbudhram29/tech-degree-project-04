const game = new Game(new Phrase("hello world"), 0);
/*
eventlistener for start game needed
*/

$('#btn__reset').on('click', () => resetDisplay());

function resetDisplay() {
    $('#overlay').hide();
};
function markButton() {};
// evernt listener for keyboard button so that clicking a button calls the
// markbutton()