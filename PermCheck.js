function solution(A) { // O(N)
    let seenElements = new Set();
    let maxElement = 0;

    for (i = 0; i < A.length; i++) {
        if (seenElements.has(A[i])) { // duplicate elements
            return 0;
        }
        
        seenElements.add(A[i]);
        
        if (A[i] > maxElement) {
            maxElement = A[i];    
        }
    }
    
    if (seenElements.size != maxElement) { // elements missing
        return 0;
    } 
    
    return 1;
}
