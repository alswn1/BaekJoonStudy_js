function solution(a, d, included) {
    return included.reduce((sum, c, i) => c ? sum += a + i*d : sum, 0);
}