const sumAll = function(start, end) {
    let sum = 0;
    if (start < end){
        for(let i = start; i <= end; i++)
        {
            sum = sum + i;
        }
    }else if (start > end){
        for(let i = end; i <= start; i++)
        {
            sum = sum + i;
        }
    }
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
