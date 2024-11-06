function solution(l, r) {
    const answer = [];
    
    for (let i=l; i<r+1; i++) {
        if (/^[05]+$/.test(i.toString())) {
            answer.push(i);
        }
    }
    
    return answer.length > 0 ? answer : [-1];
}