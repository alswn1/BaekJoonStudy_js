function solution(my_string) {
    var arr = [];
    var answer = 0;
    
    arr = my_string.split('');
    
    arr.map((e) => {
        if (/[0-9]/.test(e)) answer += parseInt(e);
    })
    return answer;
}