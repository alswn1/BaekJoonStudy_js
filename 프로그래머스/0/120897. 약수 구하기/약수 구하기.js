function solution(n) {
    var answer = [];
    
    for (let i=1; i < Math.sqrt(n)+1; i++) {
        if (n % i == 0)  {
            answer.push(i);
            if (n / i != i) {
                answer.push(n / i);
            }
        }
    }
    
    answer.sort((a, b) => a - b);
    
    return answer;
}