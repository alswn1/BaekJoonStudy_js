function solution(a, b) {
    let str = +(a + "" + b);
    let mul = 2 * a * b;
    
    return str > mul ? str : mul;
}