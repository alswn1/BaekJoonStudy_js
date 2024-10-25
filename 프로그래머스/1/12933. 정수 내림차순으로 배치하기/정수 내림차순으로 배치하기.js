function solution(n) {
    var arr = n.toString().split('');

    arr.sort((a, b) => b - a);

    var answer = "";
    arr.map((e) => {
        answer += e;
    })

    return parseInt(answer);
}