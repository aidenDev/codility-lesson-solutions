function solution(A) {
    let maxInt = A.length + 1;
    let expectedSum = (maxInt * (maxInt + 1)) / 2;
    let actualSum = addUpArray(A);
    
    return expectedSum - actualSum;
}

function addUpArray(A) {
    var result = 0;
    
    for (i = 0; i < A.length; i++) {
        result += A[i];
    }
    
    return result;
}
