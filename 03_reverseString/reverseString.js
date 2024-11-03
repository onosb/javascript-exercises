const reverseString = function(word) {
    let reversedWord = "";
    for (i = word.length-1; i >= 0; i--) {
        reversedWord += word[i];
    }
    return reversedWord;

};
reverseString('hello there');

// Do not edit below this line
module.exports = reverseString;
