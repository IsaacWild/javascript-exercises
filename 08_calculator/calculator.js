
const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(a) {
  let sum = 0;
  
  a.forEach(Element => sum+=(Element));

  return sum;
};

const multiply = function(a) {
  let sum = a[0];
  let aLenght = a.length;

  for (let i = 1; i < aLenght; i++){
    sum *= a[i]
  }

  return sum;
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
  if(a == 0){
    return 1;
  } else
	return a * factorial(a-1);
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
