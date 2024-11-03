const repeatString = function(word, times) {
    let repeatedWord = "";
    if (times < 0) {
        return "ERROR";
    }else {
        for (i = 0; i < times; i++) {
            repeatedWord += word; 
        }
    }
    return repeatedWord;
};
repeatString('hey', 3)

// Do not edit below this line
module.exports = repeatString;
