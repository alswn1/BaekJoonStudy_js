function gcd(x, y) {
    while (y != 0)  {
        const temp = y;
        y = x % y;
        x = temp;
    }
    return x;
}

function solution(a, b) {
    const div = gcd(a, b);
    b /= div;
    
    while (b % 2 === 0) b /= 2;
    while (b % 5 === 0) b /= 5;
    
    return b === 1 ? 1 : 2;    
}