function solution(price, money, count) {
    var sum = count / 2 * (2*price + (count-1) * price);

    return sum > money ? sum - money : 0;
}