class Phrase {
    constructor(phrase)
    {
        this.phrase = phrase;
    }

    /**
     * add Phrase to DOM
     * params {string} phrase
     */
    addPhraseToDisplay() {
       let letters = this.phrase.split('')
       letters.forEach((letter) => {
            let letterLi = 
                $(`<li class='hide ${(letter !== ' ') ? 'letter ' + letter : 'space'}'></li>`)
                    .text((letter !== ' ') ? letter : ''); 
            $('#phrase ul').append(letterLi);
        }
        );
    }

    /**
     * check if letter in pharse
     * params {string} letter
     */
    checkLetter(letter) {
        this.showMatchedLetter(letter);
    }

    showMatchedLetter(letter) {
        $(`.letter.${letter}`).removeClass('hide');
        $(`.letter.${letter}`).addClass('show');
    }

}
