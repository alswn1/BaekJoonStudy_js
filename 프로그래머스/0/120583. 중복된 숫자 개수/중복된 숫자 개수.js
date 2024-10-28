function solution(array, n) {
    array.sort((a, b) => a - b);
    let index = array.indexOf(n);
    let count = 0;
    
    if (index != -1){
        let len = array.length;
        
        for (let i=index; i<len; i++) {
            if (array[i] == n) count++;
            else break;
        }
    }
    
    return count;
}