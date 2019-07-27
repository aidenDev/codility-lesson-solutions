// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    let maxSecondPartSum = getMaxSecondPartSum(A);
    let minDiff = Number.MAX_VALUE;
    
    var firstPartSum = 0
    
    for (i = 0; i < A.length-1; i++) {
        firstPartSum += A[i];
        
        let secondPartSum = maxSecondPartSum - firstPartSum + A[0];
        let diff = Math.abs(firstPartSum - secondPartSum);

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
