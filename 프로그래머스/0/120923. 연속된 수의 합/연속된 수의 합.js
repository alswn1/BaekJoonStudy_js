function solution(num, total) {
//     let sum = 0;
//     for (let i=0; i<num; i++) {
//         sum += i;
//     }
    
//     let first = (total - sum) / num;
    
//     return Array.from({length: num}, (_, i) => first + i);
    
    const start = (total - (num * (num - 1)) / 2) / num;
    return Array.from({length : num}, (_, i) => start + i);
}