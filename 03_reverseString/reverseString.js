const reverseString = function( val ) {
    // SPLIT STRING INTO ARRAY
    let valRev = val.split("");
    // REVERSE ARRAY
    valRev = valRev.reverse();
    // REJOIN ARRAY
    valRev = valRev.join("");

    return valRev;
};

// Do not edit below this line
module.exports = reverseString;
