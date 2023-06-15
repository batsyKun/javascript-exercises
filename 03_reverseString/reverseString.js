const reverseString = function(string) {
    let phrase = string;
    let reversed = '';
    for(let i = phrase.length-1; i >= 0; i--){
        reversed += phrase[i];
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
