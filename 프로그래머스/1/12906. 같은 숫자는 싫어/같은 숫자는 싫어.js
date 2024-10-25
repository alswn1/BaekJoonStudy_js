function solution(arr) {
    var answer = [arr[0]];
    var len = arr.length;

    for (let i=1; i<len; i++) {
        if (answer[answer.length-1] != arr[i]) answer.push(arr[i]);
    }

    return answer;
}