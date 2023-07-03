const fibonacci = function(num) {
    if (num < 0) return "OOPS"
    let a = 0;
    let b = 1;
    let temp = 1;
    arr = []
    for (let index = 1; index < Number(num); index++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return temp;
};

// Do not edit below this line
module.exports = fibonacci;
