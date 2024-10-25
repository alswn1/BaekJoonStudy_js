function solution(n, m) {
    var a = n < m ? m : n;
    var b = n < m ? n : m;
    while (b != 0) {
        let tem = b;
        b = a % b;
        a = tem;
    }

    return [a, n*m/a];
}