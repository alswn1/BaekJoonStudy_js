function solution(d, budget) {
    var answer = 0;
    var i = 0;

    d.sort((a, b) => a - b);
    while (budget >= 0 || i < d.length) {
        budget -= d[i];
        i++;
        budget >= 0 ? answer++ : answer;
    }

    return answer;
}