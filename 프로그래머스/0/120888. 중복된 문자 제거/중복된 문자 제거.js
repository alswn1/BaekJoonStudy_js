function solution(my_string) {
    let arr = new Set();
    for (let c of my_string) {
        arr.add(c);
    }
    
    return [...arr].join('');
}