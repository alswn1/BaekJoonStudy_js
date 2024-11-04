function solution(my_string, queries) {
    let strArr = [...my_string];
    
    for (const [s, e] of queries) {
        const rev = strArr.slice(s, e + 1).reverse();
        
        strArr.splice(s, e-s+1, ...rev);
    }
    
    return strArr.join('');    
}