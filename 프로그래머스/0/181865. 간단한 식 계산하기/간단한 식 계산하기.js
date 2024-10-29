function solution(binomial) {
    const [a, op, b] = binomial.split(' ');
    
    const operations = {
        '+' : () => +a + +b,
        '-' : () => +a - +b,
        '*' : () => +a * +b
    }
    return operations[op]();
}