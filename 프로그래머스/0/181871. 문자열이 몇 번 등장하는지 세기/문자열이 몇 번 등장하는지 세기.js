function solution(myString, pat) {
    let len = myString.length;
    let patlen = pat.length;
    let cnt = 0;
    
    for (let i=0; i<=len-patlen; i++) {
        cnt = myString.slice(i, i+patlen) == pat ? cnt+1 : cnt;
    }
    
    return cnt;
}