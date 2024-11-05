function solution(chicken) {
    let service = Math.floor(chicken / 10);
    let coupon = chicken % 10 + service;
    
    while (coupon >= 10) {
        service += Math.floor(coupon / 10);
        coupon = coupon % 10 + Math.floor(coupon / 10);
    }
    
    return service;
}