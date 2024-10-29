function solution(order) {
    return [...order.toString()].reduce((a, c) => /[369]/g.test(c) ? a + 1 : a, 0);
}