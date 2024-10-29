function solution(n) {
    let count = 0;
    
    for (let i=1; i<=n; i++) {
        let sum = 0;
        let sqrt = Math.sqrt(i);
        
        for (let j=2; j<=sqrt; j++) {
            if (i % j == 0) {
                sum++;
                break;
            }
        }
        if (sum > 0) count++;
    }
    return count;
}