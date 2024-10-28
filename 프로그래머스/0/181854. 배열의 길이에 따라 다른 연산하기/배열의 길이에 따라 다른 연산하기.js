function solution(arr, n) {
    let len = arr.length;
    let i = len % 2 == 0 ? 1 : 0;
    
    for (i=i; i<len; i += 2) {
        arr[i] = arr[i] + n;
    }
    
    return arr;
}