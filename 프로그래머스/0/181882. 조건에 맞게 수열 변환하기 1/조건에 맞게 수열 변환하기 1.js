function solution(arr) {
    var answer = [];
    arr.map((e) => {
        if (e >= 50 && e % 2 == 0) answer.push(e/2);
        else if (e < 50 && e % 2 != 0) answer.push(e*2);
        else answer.push(e);
    })
    
    return answer;
}