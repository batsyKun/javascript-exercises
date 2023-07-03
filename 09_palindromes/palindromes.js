const palindromes = function (texts) {
    const myArray = texts.toLowerCase().split("").filter(text => text != " " && text!= "." && text!= "!" && text!= ",");
    const revArray = myArray.slice().reverse();
    return  revArray.join("") == myArray.join("");
};



// Do not edit below this line
module.exports = palindromes;
