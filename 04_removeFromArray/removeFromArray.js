const removeFromArray = function(array, toRemove) {
    const arraylength = array.length;
    for (let i = 0; i < arraylength; i++){
        if (toRemove == array[i]){
            array.splice(i, 1)
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
