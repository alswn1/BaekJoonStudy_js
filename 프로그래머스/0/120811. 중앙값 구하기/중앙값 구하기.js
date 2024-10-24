function solution(array) {
    array.sort((a, b) => a - b);
    let len = array.length;
    let mid = Math.floor(len/2);
    
    return array[mid];
}