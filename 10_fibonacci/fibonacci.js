
const fibonacci = function( val ) {
    val = parseInt(val);

    // BASE CASES
    if (val < 0) return "OOPS";
    if (val < 1) return 0;
    if (val == 1 ) return 1;

    // ANYTHING PAST 2
    let a = 0;
    let b = 1;
    let c = 0;
    for (let i = 1; i < val; i++ ) {
        c = a+b;
        a = b;
        b = c;
    }

    return c;
};

// Do not edit below this line
module.exports = fibonacci;
