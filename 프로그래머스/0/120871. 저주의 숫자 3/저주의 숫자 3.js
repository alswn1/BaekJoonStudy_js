function solution(n) {
    let count = 0;
    let i = 0;
    
    while (count < n) {
        i++;
        
        if (i % 3 !== 0 && !String(i).includes('3')) count++;
    }
    
    return i;
}