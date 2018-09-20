class Game {
    constructor(phrases, missed)
    {
        this.phrases = phrases;
        this.missed = missed;
    }

    getRandomPhrase() {}

    handleInteraction() {
        $(".key")
            .on("click", function () {
                alert($(this).text());
            });
    }

    removeLife() {
        console.log('wronngnng!!1');
    }

    checkForWin() {
        /*
        //check and see if all letter in phrase is
        //selected
        // and ! all life finished
        */

    }

    gameOver() {
        //if win or no life remains

    }

    startGame() {
        //get random phrase reset board
    }
}
