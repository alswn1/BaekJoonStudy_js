function solution(my_string) {
    let arr = [];
    let len = 0-my_string.length;
    
    for (let i=-1; i>=len; i--) {
        arr.push(my_string.substr(i));
    };
    
    return arr.sort();
}