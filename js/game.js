class Game {
    constructor(phrases, missed)
    {
        this.phrases = phrases;
        this.missed = missed;
    }

    getRandomPhrase() {

    }

    handleInteraction() {
        $( ".key" ).on( "click", function() {
            alert( $( this ).text() );
          });
    }

    removeLife() {
        console.log('wronngnng!!1');
    }

    checkForWin() {

    }

    gameOver() {

    }

    startGame() {
    
    }
}
