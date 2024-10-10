function solution(k, m, score) {
    var answer = 0;
    var subarr = score.sort((a, b) => a - b).slice(score.length%m);

    for (let i = 0; i < subarr.length; i+=m) {
        answer += subarr[i] * m;
    };
    
    return answer;
};