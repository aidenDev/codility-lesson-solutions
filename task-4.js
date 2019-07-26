// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, Y, D) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    let distance = Y-X
    let jumpsRequired = Math.floor(distance / D)
    
    if (distance % D == 0) {
        return jumpsRequired
    } 
    return jumpsRequired + 1
}
