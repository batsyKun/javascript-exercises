const add = function(a, b) {
  return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(arr) {
  let sum = 0
	arr.forEach(element => {
    sum += element
  });
  return sum;
};

const multiply = function() {
  let sum = arguments[0]
  for (let index = 1; index < arguments.length; index++) {
    sum *= arguments[index];
  }
  return sum;
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(a) {
  let factorial = 1;
	for(let index = 1; index <= a; index++) {
    factorial *= index;    
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
