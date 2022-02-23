const removeFromArray = function() {
    const array = arguments[0];
    //const toRemove = arguments[1];
    const arraylength = array.length;
    //make an aray of items to be removed?
    let toRemove = [];
    for (let i = 1; i < arguments.length; i++){
        toRemove.push(arguments[i])
    }
    //checking new to remove array
    // console.log("The array: " + array);
    // console.log("Array length: " + arraylength);
    // console.log("To be removed array: " + toRemove);
    // console.log("To be removed array length: " + toRemove.length);
    
    for (let i = 0; i < arraylength; i++){
        console.log("Array item: " + array[i]);
        for(let j = 0; j < toRemove.length; j++){
            // console.log("To be reomved item: " + toRemove[j]);
            if (toRemove[j] == array[i]){
                // console.log("Spliced: " + array[i] + " from array");
                array.splice(i, 1)
                i--
            }
        }
    }
    // console.log("After splice array: " + array)
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
