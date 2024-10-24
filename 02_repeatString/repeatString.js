const repeatString = function( val, count ) {
    if (count < 0) {
        return "ERROR";
    }
    let ret_val = ""
    for (let i = 0; i < count; i++) {
        ret_val += val;
    }
    return ret_val;
};

console.log(repeatString('hey',3));

// Do not edit below this line
module.exports = repeatString;
