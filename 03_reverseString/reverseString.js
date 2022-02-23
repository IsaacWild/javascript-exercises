const reverseString = function(string) {
    //put input word into string
    let word = string;
    //get length of word
    let wordLength = string.length;
    //need negative number to count down from word
    let position = -1;
    //make array for revered word characters
    let reversed = [];
    //make string for selected character
    let char = "";


    //loop for string length to push each letter from word into reveresed
    for (let i = 0; i < wordLength; i++)
    {
        char = word.substr(position,1)
        reversed.push(char);
        position--
    }

    return reversed.join("");
    
};

// Do not edit below this line
module.exports = reverseString;
