const sumAll = function( valA, valB) {

    // VERIFY BOTH ARE INTEGERS
    if ( !Number.isInteger(valA) | !Number.isInteger(valB) ) {
        return "ERROR";
    }
    // VERIFY BOTH ARE GREATER THAN 0
    if (valA < 0 | valB < 0 ) {
        return "ERROR";
    }
    let sum = 0;
    // sum
    for (let i = Math.min(valA, valB); i <= Math.max(valA, valB); i++ ) {
        sum += i;
    }

    // return
    return sum;
};

console.log( sumAll(1,5));

// Do not edit below this line
module.exports = sumAll;
