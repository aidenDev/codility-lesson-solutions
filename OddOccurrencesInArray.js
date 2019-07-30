// solution uses XOR trick where even occurrences cancel out e.g.
// A ^= B -> C
// C ^= A -> B

// A ^= B ^= B ^= C ^= D ^= A ^= C -> D

function solution(A) { // O(N)
    let unpairedElement = 0;
    
    for (i = 0; i < A.length; i++) {
        unpairedElement ^= A[i]; // XOR trick
    }
    
    return unpairedElement;
}
