function solution(my_string) {
    return my_string.match(/\d/g).sort().map(Number);
}