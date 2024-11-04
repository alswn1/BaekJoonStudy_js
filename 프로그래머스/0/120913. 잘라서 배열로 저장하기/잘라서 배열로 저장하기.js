function solution(my_str, n) {
//     const answer = [];
//     const len = my_str.length;
//     let i = 0;
    
//     while (i < len) {
//         answer.push(my_str.slice(i, i+n));
//         i += n;
//     }
    
//     return answer;
    
    return my_str.match(new RegExp(`.{1,${n}}`, "g"));
}