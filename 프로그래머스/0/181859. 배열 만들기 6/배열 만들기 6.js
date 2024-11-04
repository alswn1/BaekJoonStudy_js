function solution(arr) {
    const len = arr.length;
    const stk = [];
    
    for (let i=0; i<len; i++) {
        if (stk.length > 0 && stk[stk.length - 1] === arr[i]) {
            stk.pop();
        }else {
            stk.push(arr[i]);
        }
    }
    
    return stk.length === 0 ? [-1] : stk;
}