function solution(arr, idx) {
    return arr.findIndex((e, i) => i > idx-1 && e == 1);
}