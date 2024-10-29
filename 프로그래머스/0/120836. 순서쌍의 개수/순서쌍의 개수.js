function solution(n) {
    let sqrt = Math.sqrt(n);
    let count = 0;
    
    for (let i=1; i < sqrt; i++) {
        if (n % i == 0) count ++;
    }
    
    return Number.isInteger(sqrt) ? count * 2 + 1 : count * 2;
}