const repeatString = function(string,number) {

    let repeated = "";
    if(number < 0){
        return "ERROR";
    }else
    for (let i = 0; i<number; i++){
            repeated = repeated + string;
        }
    
    return repeated
     
};

// Do not edit below this line
module.exports = repeatString;
