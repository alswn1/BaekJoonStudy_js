function solution(arr) {
    let answer = [];
    arr.map((e) => {
        for (let i=0; i<e; i++) {
            answer.push(e);
        }
    });
    return answer;
}