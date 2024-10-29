function solution(n) {
    let start = n % 2 == 0 ? 0 : 1;
    let sum = 0;
    
    for (let i = start; i <= n; i += 2) {
        start == 0 ? sum += i ** 2 : sum += i;
    }
    
    return sum;
}