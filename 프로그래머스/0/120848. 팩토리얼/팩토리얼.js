function solution(n) {
    let p = 1;
    let i = 1;
    while (p <= n) {
        i++;
        p *= i;
    }
    return i - 1;
}
