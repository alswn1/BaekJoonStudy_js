function solution(t, p) {
    var answer = 0;

    var len = p.length;
    var end = t.length - (len-1);
    for (let i=0; i < end; i++) {
        if (+t.substr(i, len) <= +p) {
            answer++;
        }
    }

    return answer;
}