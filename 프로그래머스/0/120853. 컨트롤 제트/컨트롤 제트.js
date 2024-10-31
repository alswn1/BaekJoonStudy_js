function solution(s) {
    const arr = s.split(' ');
    return arr.reduce((a, c, i) => {
        return c !== "Z" ? a + +c : a - +arr[i-1];
    }, 0);
}