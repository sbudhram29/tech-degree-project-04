class Game {
    constructor(phrases, missed)
    {
        this.phrases = phrases;
        this.missed = missed;
        //keep track of valid letters
        this.validLetter = [];
    }

    getRandomPhrase() {
        const randomNumber = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomNumber];
    }

    handleInteraction(phrase, letter) {
        /*
        * Check to see if letter selected is in phrase
        */
        if (phrase.checkLetter(letter)) {
            this
                .validLetter
                .push(letter);
            $(`button.key:contains("${letter}")`).addClass('chosen');
            this.checkForWin(phrase);
        } else {
            this.removeLife(phrase);
            $(`button.key:contains("${letter}")`).addClass('wrong');
        }
    }

    removeLife(phrase) {
        /*
        * changed image to lostLife on missed letter
        */
        //this.missed starts are 5 to remove from last heart first
        $(`.tries:nth-child(${this.missed})`).replaceWith(`<li class="tries"><img src="images/lostHeart.png" height="35px" widght="30px"></li>`);
        this.missed--;

        //if 0 hearts left game over
        if (this.missed < 1) {
            this.gameOver(phrase);
        }
    }

    refillLife() {
        for (let i = 1; i <= this.missed; i++) {
            $(`.tries:nth-child(${i})`).replaceWith(`<li class="tries"><img src="images/liveHeart.png" height="35px" widght="30px"></li>`);
        }
    }

    checkForWin(phrase) {
        let letterInPhrase = new Set(phrase.phrase.split(""));
        //delet all spaces
        letterInPhrase.delete(" ");
        let letters = Array.from(letterInPhrase);

        for (let i = 0; i < letters.length; i++) {
            if (!this.validLetter.includes(letters[i])) {
                return false;
            }
        }

        //if all the letters in phrase are in valid letter player wins
        this.gameOver(phrase, true);
    }

    gameOver(phrase, winner = false) {

        let msg;

        if (winner) {
            msg = "Correct the phrase was \"" + phrase.phrase + "\"";

            $(".title").text("Winner!");
            $('#overlay').addClass('win');
        } else {
            msg = "Sorry the phrase was \"" + phrase.phrase + "\"";

            $(".title").text("Maybe next time");
            $('#overlay').addClass('lose');
        }

        $("#game-over-message").text(msg);
        $('#overlay').show();
    }

    startGame() {
        //reset hearts
        this.missed = 5;
        //reset vaild letters
        this.validLetter = [];
        //refill hearts
        this.refillLife();
        //remove win lose overlay
        $("#overlay").removeClass("win loss");
        //remove phrase
        $("#phrase ul").text("");
        //remove all key markings
        $('.keyrow')
            .children()
            .removeClass('chosen wrong');

        return new Phrase(game.getRandomPhrase());
    }
}
