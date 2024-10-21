function solution(n) {
    var answer = 0n;

    var mok = Math.floor(n/2);

    for (let i = 0; i <= mok; i++) {
        var nam = n-(2*i);
        var res = 1n;

        if (nam == 0 || mok == 0) {
            answer += 1n;
        }else {
            let a = BigInt(Math.min(i, nam)); // 작은 수
            let b = BigInt(Math.max(i, nam)); // 큰수

            for (let j = (b+1n); j <= (a+b); j++) {
                res = res * j / (j-b);
            }
            answer += res;
        }
    }

    answer = answer % 1234567n;
    return Number(answer);
}