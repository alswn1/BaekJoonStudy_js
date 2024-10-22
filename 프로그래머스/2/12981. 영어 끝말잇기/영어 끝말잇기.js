function solution(n, words) {
    var answer = [];
    var answer1 = [];
    var peo = Array.from(Array(n), () => Array(0).fill());
    
    var num = 0;
    for (let i=0; i<words.length; i++) {
        num = i % n;
        peo[num].push(words[i]);
    
        if (i > 0 && words[i].charAt(0) != words[i-1].charAt(words[i-1].length-1)) {
            answer1[0] = num+1;
            answer1[1] = peo[num].length;
            break;
        }
    }
    
    for (let i=0; i<peo[0].length; i++) {
        var cc = 0;
        for (let j=0; j<n; j++) {
            cc = n * i + j;
            if (cc > words.length-1) {
                break;
            }else {
                var chk = words.indexOf(peo[j][i]);
                if (chk !== n * i + j) {
                    answer[0] = j + 1;
                    answer[1] = i + 1;
                    break;
                }
            }
        }
        if (answer.length != 0 || cc > words.length-1) {
            break;
        }
    }
    
    if (answer.length == 0 && answer1.length == 0) {
        return [0, 0];
    }else if (answer.length == 0 && answer1.length != 0) {
        return answer1;
    }else if (answer1.length == 0) {
        return answer;
    }else {
        var a = n * (answer[1]-1) + answer[0];
        var b = n * (answer1[1]-1) + answer1[0];

        if (a < b) return answer;
        else return answer1;
    }
}