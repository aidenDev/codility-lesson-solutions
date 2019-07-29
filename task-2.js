function solution(A) {
    sortedArr = A.sort();
    
    for (i = 0; i < sortedArr.length; i = i+2) {

        if (sortedArr[i] != sortedArr[i+1]) {
            return sortedArr[i]
        }
        
        if (i+1 >= sortedArr.length) { // at last element
            return sortedArr[i]
        }
    }
}
