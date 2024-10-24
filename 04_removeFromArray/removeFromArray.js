const removeFromArray = function( arr, ...args) {
    let cleanArray = [];
    
    // REBUILDS THE ENTIRE ARRAY IN cleanArray
    // OMMITING ELEMENTS FOUND IN  args 
    for (let i =0; i < arr.length; i++ ) {
        if (!args.includes( arr[i]) ) {
            cleanArray.push(arr[i]);
        }
    }
    
    return cleanArray;
};

// console.log( removeFromArray([0,1,2], 2,3 ));
// Do not edit below this line
module.exports = removeFromArray;
