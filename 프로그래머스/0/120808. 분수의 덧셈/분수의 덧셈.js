function solution(numer1, denom1, numer2, denom2) {
    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }
    
    let top = numer1 * denom2 + denom1 * numer2;
    let bottom = denom1 * denom2;
    
    const div = gcd(top, bottom);
    
    return [top / div, bottom / div];
}