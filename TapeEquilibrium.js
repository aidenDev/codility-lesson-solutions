function solution(A) { // O(N)
    let maxSecondPartSum = getMaxSecondPartSum(A);
    let minDiff = Number.MAX_VALUE;
    let firstPartSum = 0;
    
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
