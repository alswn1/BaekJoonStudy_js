function solution(arr) {
    return arr.some((rows, i) => rows.some((v, j) => v != arr[j][i])) ? 0 : 1;
}