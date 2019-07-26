// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    let maxSecondPartSum = getMaxSecondPartSum(A);
    let minDiff = Number.MAX_VALUE;
    
    var firstPartSum = 0
    
    if (A.length == 2) {
        return Math.abs(A[0] - A[1]); 
    }
    
    for (i = 0; i < A.length; i++) {
        firstPartSum += A[i];
        
        let secondPartSum = maxSecondPartSum - firstPartSum + A[0];
        let diff = Math.abs(firstPartSum - secondPartSum);
        
        //console.log("diff:" + diff);
        //console.log("min diff" + minDiff);
        if (diff < minDiff) {
            minDiff = diff;
        }
    }
    
    return minDiff;
}

function getMaxSecondPartSum(A) {
    var result = 0;
    
    for (i = 1; i < A.length; i++) {
        result += A[i];
    }
    
    return result;
}
