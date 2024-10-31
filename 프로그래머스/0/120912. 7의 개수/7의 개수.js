function solution(array) {
    return array.reduce((a, c) => {
        return a + (c.toString().split('7').length - 1);
    }, 0);
}