function solution(arr) {
    const stk = [];
    const len = arr.length;
    let i = 0;
    
    while (i < len) {
        let stkLen = stk.length;
        
        if (stkLen === 0) {
            stk.push(arr[i]);
            i++;
        }else if (stk[stkLen-1] < arr[i]) {
            stk.push(arr[i]);
            i++;
        }else {
            stk.pop();
        }
    }
    
    return stk;
}