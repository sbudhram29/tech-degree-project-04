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
        let letters = this
            .phrase
            .split('')
        letters.forEach((letter) => {
            let letterLi = $(`<li class='hide ${ (letter !== ' ')
                ? 'letter ' + letter
                : 'space'}'></li>`).text((letter !== ' ')
                ? letter
                : '');
            $('#phrase ul').append(letterLi);
        });
    }

    /**
     * check if letter in phrase
     * params {string} letter
     */
    checkLetter(letter) {
        if (this.phrase.indexOf(letter) !== -1) {
            this.showMatchedLetter(letter);
            return true;
        } else {
            return false;
        }
    }

    /**
     * show letter if matched
     * @param {*} letter
     */
    showMatchedLetter(letter) {
        $(`.letter.${letter}`).removeClass('hide');
        $(`.letter.${letter}`).addClass('show');
    }

}
