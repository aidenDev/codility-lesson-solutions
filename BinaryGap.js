function solution(N) { // O(N)
    var maxSeq = 0;
    var currentSeq = 0;
        
    let bin = N.toString(2);
    
    for (i = 0; i < bin.length; i++) {
        if (bin[i] == '1') {
            maxSeq = determineMaxSeq(currentSeq, maxSeq);
            currentSeq = 0; // reset sequence counter
        } else { // 0 detected
            currentSeq += 1; 
        }
    }
    
    return maxSeq;
}

function determineMaxSeq(currentSeq, maxSeq) {
    if (currentSeq > maxSeq) {
        return currentSeq
    }
    
    return maxSeq
}
