function solution(numbers, n) {
    return numbers.reduce((a, c) => a <= n ? a + c : a);
}