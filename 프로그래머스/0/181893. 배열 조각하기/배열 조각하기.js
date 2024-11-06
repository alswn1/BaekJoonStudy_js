function solution(arr, query) {
    let start = 0;
    let end = arr.length;
    
    query.forEach((e, i) => {
        if (i % 2 === 0) {
            end = start + e + 1;
        }else {
            start += e;
        }
    });
    
    return arr.slice(start, end);
}