function max(a, b) {
    while(b != 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function solution(n) {    
    let gcd = max(n, 6);
    return n / gcd;
}