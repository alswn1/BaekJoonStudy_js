function solution(my_string) {
    return my_string.split(/[a-zA-Z]/).filter(e => e).reduce((a, c) => a + +c, 0);
}