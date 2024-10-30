function solution(i, j, k) {
    let cnt = 0;
    let stk = String(k);
    
    for (let s=i; s<=j; s++) {
        cnt += [...s.toString()].filter(c => c === stk).length;
    };
    
    return cnt;
}