function solution(X, A) {  // O(N)
    let leavesRequired = constructLeavesRequiredSet(X);
    
    for (i = 0; i < A.length; i++) { 
        leavesRequired.delete(A[i]);

        if (leavesRequired.size === 0) {
            return i; 
        }
    }
    
    return -1;
}

function constructLeavesRequiredSet(X) {
    let leavesRequired = new Set();
    
    for (i = 1; i <= X; i++) {
        leavesRequired.add(i);
    }
    
    return leavesRequired;
}
