function solution(my_string, index_list) {
    let answer = '';
    let len = index_list.length;
    
    for (let i=0; i<len; i++) {
        answer += my_string.charAt(index_list[i]);
    }
    
    return answer;
}