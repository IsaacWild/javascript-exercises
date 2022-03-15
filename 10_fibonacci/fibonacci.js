const fibonacci = function(fibNum) {
    let fibSeq = [1,1];
    if (fibNum < 0){
        return "OOPS";
    }else
    for (i=2; i<fibNum; i++){
        let a = fibSeq[i - 2];
        let b = fibSeq[i - 1];
        fibSeq.push(a+b);
    }
    return fibSeq[fibNum - 1];
};

// Do not edit below this line
module.exports = fibonacci;
