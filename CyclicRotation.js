function solution(A, K) {
    var result = [];
    
    for (i = 0; i < A.length; i++) {
        newIndex = getNewIndex(i, K, A.length);
        result.splice(newIndex, 0, A[i]);
    }

    return result;
}

function getNewIndex(currentIndex, shift, arrLength) {
    let endIndex = arrLength - 1;
    
    if (currentIndex + shift > endIndex) { // wrap around required
        newIndex = (currentIndex + shift) % arrLength; // ignore full rotations
        return newIndex;
    }
    
    return currentIndex + shift;
}
