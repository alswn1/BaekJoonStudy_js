function solution(arr, queries) {
    const result = [];
    
    for (const [s, e, k] of queries) {
        let sliceArr = arr.slice(s, e+1).filter(e => e > k).sort((a, b) => a - b);
        result.push(sliceArr[0] ? sliceArr[0] : -1);
    }
    return result;
}