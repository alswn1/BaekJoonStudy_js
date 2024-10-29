function solution(num, k) {
    let index = num.toString().indexOf(k);
    return index >= 0 ? index + 1 : -1;
}