function solution(arr, k) {
    let newArr = [...new Set(arr)];
    const len = newArr.length;
    
    return len >= k ? newArr.slice(0, k) : [...newArr, ...Array(k-len).fill(-1)];
}