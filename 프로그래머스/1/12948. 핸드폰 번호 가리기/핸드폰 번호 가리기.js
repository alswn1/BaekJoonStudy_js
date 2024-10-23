function solution(ph) {
    var answer = '';
    for (var i=0; i<ph.length-4; i++){
answer += "*";};
    answer += ph.substr(ph.length-4,4);
    return answer;
}