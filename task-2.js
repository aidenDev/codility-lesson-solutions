// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    if (A.length == 1) {
        return A[0]
    }
    
    sortedArr = A.sort()
    
    for (i=0; i<sortedArr.length; i=i+2) {

        // at last element
        if (i+1 >= sortedArr.length) {
            return sortedArr[i]
        }

        
        if (sortedArr[i] != sortedArr[i+1]) {
            return sortedArr[i]
        }
    }
}
