function max(a, b) {
    while(b) {
        [a, b] = [b, a % b];
    }
    return a;
}

function solution(n) {
    return n / max(n, 6);
}