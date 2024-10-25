function solution(left, right) {
    var answer = 0;

    for (let i = left; i <= right; i++) {
        var sq = Math.sqrt(i);
        if (Number.isInteger(sq)) answer -= i;
        else answer += i;
    }

    return answer;
}