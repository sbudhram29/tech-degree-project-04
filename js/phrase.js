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
        var letter = $("<li class='hide letter h'></li>").text("h"); 
        $('#phrase ul').append(letter);
    }

    /**
     * check if letter in pharse
     * params {string} letter
     */
    checkLetter(letter) {
        console.log(this.phrase);
        // if(letter in this.phrase){
        //     this.showMatchedLetter(letter)
        //     return true;
        // }else{
        //     return false;
        // }
    }

    showMatchedLetter() {
        $(`.letter.${letter}`).removeClass('hide');
        $(`.letter.${letter}`).addClass('show');
    }

}
