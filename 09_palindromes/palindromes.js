const palindromes = function ( val ) {
    // STRIP PUNCTUALTION
    let a = val.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    // STRIP SPACES
    let b = a.replace(/\s{1,}/g,"");
    // CLEAN CAPITALS
    b = b.toLowerCase()

    for (let i=0; i<Math.floor(b.length/2); i++) {
        if ( b[i] != b[ b.length-(1+i) ] ) {
            return false
        }
    }
    return true;
};


// Do not edit below this line
module.exports = palindromes;
