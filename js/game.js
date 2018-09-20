class Game {
    constructor(phrases, missed)
    {
        this.phrases = phrases;
        this.missed = missed;
        this.letter = "";
        this.phrase = null;
        this.winner = false;
        //keep track of valid letters
        this.validLetter = [];
    }

    getRandomPhrase() {
        const randomNumber = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomNumber];
    }

    handleInteraction() {
        /*
        * Check to see if letter selected is in phrase
        */
        if (this.phrase.checkLetter(this.letter)) {
            this
                .validLetter
                .push(this.letter);

            $(`button.key:contains("${this.letter}")`).addClass('chosen');
            this.winner = this.checkForWin(this.phrase);
        } else {
            this.removeLife(phrase);
            $(`button.key:contains("${this.letter}")`).addClass('wrong');
        }

        if (this.winner) {
            this.gameOver();
        }
    }

    removeLife() {
        /*
        * changed image to lostLife on missed letter
        */
        //this.missed starts are 5 to remove from last heart first
        $(`.tries:nth-child(${this.missed})`).replaceWith(`<li class="tries"><img src="images/lostHeart.png" height="35px" widght="30px"></li>`);
        this.missed--;

        //if 0 hearts left game over
        if (this.missed < 1) {
            this.gameOver();
        }
    }

    refillLife() {
        for (let i = 1; i <= this.missed; i++) {
            $(`.tries:nth-child(${i})`).replaceWith(`<li class="tries"><img src="images/liveHeart.png" height="35px" widght="30px"></li>`);
        }
    }

    checkForWin() {
        let letterInPhrase = new Set(this.phrase.phrase.split(""));
        //delet all spaces
        letterInPhrase.delete(" ");
        let letters = Array.from(letterInPhrase);

        for (let i = 0; i < letters.length; i++) {
            if (!this.validLetter.includes(letters[i])) {
                return false;
            }
        }

        //if all the letters in phrase are in valid letter player wins
        return true;
    }

    gameOver() {

        let msg;

        if (this.winner) {
            msg = "Correct the phrase was \"" + this.phrase.phrase + "\"";

            $(".title").text("Winner!");
            $('#overlay').addClass('win');
        } else {
            msg = "Sorry the phrase was \"" + this.phrase.phrase + "\"";

            $(".title").text("Maybe next time");
            $('#overlay').addClass('lose');
        }

        $("#game-over-message").text(msg);
        $('#overlay').show();
    }

    startGame() {
        //reset winner
        this.winner = false;
        //reset hearts
        this.missed = 5;
        //reset vaild letters
        this.validLetter = [];
        //refill hearts
        this.refillLife();
        //remove win lose overlay
        $("#overlay").removeClass("win lose");
        //remove phrase
        $("#phrase ul").text("");
        //remove all key markings
        $('.keyrow')
            .children()
            .removeClass('chosen wrong');

        this.phrase = new Phrase(game.getRandomPhrase());
        this
            .phrase
            .addPhraseToDisplay();
    }
}
