function solution(arr) {
    const first = arr.indexOf(2);
    const last = arr.lastIndexOf(2);
    
    return first !== -1 ? arr.slice(first, last+1) : [-1];
}