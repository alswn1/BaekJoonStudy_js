function solution(price, money, count) {
    var sum = count / 2 * (2*price + (count-1) * price);
    if (sum - money > 0) return sum-money;
    else return 0;
}