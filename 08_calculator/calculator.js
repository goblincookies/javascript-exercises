const add = function(a,b) {
	return (a+b);
};

const subtract = function(a,b) {
	return (a-b);
};

const sum = function(a) {
	return (a.reduce( (total, val) => {return total+val}, 0 ));
};

const multiply = function(a) {
  return (a.reduce( (total, val) => {return total*val}, 1 ));

};

const power = function(a,b) {
	return(a**b);
};

const factorial = function(a) {
  let i = 0
  return b = Array(a).fill(0)
    .map( (val) => i+=1 )
    .reduce( (total, val)=> {return total*val},1);

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
