function solution(A, B) {
    const len = A.length;
    
    if (A === B) return 0;
    
    for (let i=1; i<len; i++) {
        A = A.slice(-1) + A.slice(0, -1);
        if (A === B) return i;
    }
    return -1;
}