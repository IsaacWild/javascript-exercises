const removeFromArray = function() {
    const array = arguments[0];
    const arraylength = array.length;
    //make an aray of items to be removed
    let toRemove = [];
    for (let i = 1; i < arguments.length; i++){
        toRemove.push(arguments[i])
    }
    for (let i = 0; i < arraylength; i++){
        for(let j = 0; j < toRemove.length; j++){
            if (toRemove[j] == array[i]){
                array.splice(i, 1)
                //after splice the array is shorter so need to set i back as to not miss the next array item that is now the current index value e.g. array[1,2,3,4] after '2' is removed '3' is now set to index [1] not index [2]
                i--
            }
        }
    }
    // console.log("After splice array: " + array)
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
