function solution(my_strings, parts) {
    let len = my_strings.length;
    let answer = "";
    
    for (let i=0; i<len; i++) {
        answer += my_strings[i].slice(+parts[i][0], +parts[i][1]+1);
    };
    
    return answer;
}