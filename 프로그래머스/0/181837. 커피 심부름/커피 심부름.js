function solution(order) {
    return order.reduce((a, c) => {
        return c.includes('latte') ? a + 5000 : a + 4500
    }, 0);
}