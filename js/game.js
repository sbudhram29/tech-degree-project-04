class Game {
    constructor(phrases, missed)
    {
        this.phrases = phrases;
        this.missed = missed;
    }

    getRandomPhrase() {}

    handleInteraction() {
        $( ".key" ).on( "click", function() {
            alert( $( this ).text() );
          });
    }

    removeLife() {}

    checkForWin() {}

    gameOver() {}

    startGame() {}
}
