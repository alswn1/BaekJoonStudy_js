function solution(numbers, k) {
    return ((k-1)*2 + 1) % numbers.length || numbers[numbers.length-1];
}