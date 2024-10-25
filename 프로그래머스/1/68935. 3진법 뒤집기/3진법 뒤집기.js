function solution(n) {
    var answer = 0;

    var three = n.toString(3);
    answer = parseInt(three.split('').reverse().join(''), 3);

    return answer;
}