function solution(n) {
    var arr = [];
    for (let i = 1; i <= n; i++) {
        if (i % 2 != 0) {
            arr.push(i);
        }
    }
    return arr;
}