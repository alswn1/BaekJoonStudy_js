function solution(num_list, n) {
    let result = [];
    let len = num_list.length;
    
    for (let i=0; i<len; i++) {
        if (i % n == 0) result.push([]);
        
        result[Math.floor(i/n)].push(num_list[i]);
    }
    return result;
}