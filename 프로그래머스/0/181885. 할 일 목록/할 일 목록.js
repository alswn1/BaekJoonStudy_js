function solution(todo_list, finished) {
    let len = todo_list.length;
    let answer = [];
    
    for (let i=0; i<len; i++) {
        if (finished[i] == false) answer.push(todo_list[i]);
    }
    
    return answer;
}