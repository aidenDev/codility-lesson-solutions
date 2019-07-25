// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    let bin = N.toString(2)
    
    var maxSeq = 0
    var currentSeq = 0
    var seqStarted = false
    
    for (i=0; i<bin.length; i++) {
        
        if (seqStarted) { // currently counting an exisiting sequence
            
            if (bin[i] == 1) { // end 1 detected
                maxSeq = determineMaxSeq(currentSeq, maxSeq)
                seqStarted = false
            } else {
                currentSeq+=1 // increment sequence count
            }
            
        } else { // not currently counting a sequence
            
            if (bin[i] == 1) { // start 1 detected
                currentSeq = 0
                seqStarted = true
            }
            
        }
    }
    
    return maxSeq
}

function determineMaxSeq(currentSeq, maxSeq) {
    if (currentSeq > maxSeq) {
        return currentSeq
    }
    return maxSeq
}


