function solution(array, n) {
    const len = array.length;
    let close = array[0];
    
    for (let i=1; i<len; i++) {
        const curDiff = Math.abs(close - n);
        const newDiff = Math.abs(array[i] - n);
        
        if (curDiff > newDiff || (curDiff == newDiff && close > array[i])) close = array[i];
    }
    return close;
}