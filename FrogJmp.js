function solution(X, Y, D) {
    let distance = Y - X;
    let jumpsRequired = Math.floor(distance / D);
    
    if (distance % D == 0) {
        return jumpsRequired;
    }
    
    return ++jumpsRequired;
}
