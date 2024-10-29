function solution(a, b, c) {
    let sum = a + b + c;
    
    if (a == b || b == c || a == c) sum *= (a ** 2 + b ** 2 + c ** 2);
    if (a == b && b == c) sum *= (a ** 3 + b ** 3 + c ** 3);
    
    return sum;
}