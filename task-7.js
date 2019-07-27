// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    var tally = new Array(A.length).fill(0);
    
    //console.log(tally.length);

    for (i = 0; i < A.length; i++) {
        const elem = A[i];
        tally[elem] += 1;
        
        if (tally[elem] > 1) {
            return 0;
        }
    }
    
    //console.log(tally);
    for (i = 1; i < tally.length; i++) {
        if (tally[i] < 1) {
            return 0;
        }
    }
    
    return 1;
}

