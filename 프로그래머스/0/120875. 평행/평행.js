function solution(dots) {
    function getSlope(dot1, dot2) {
        const [x1, y1] = dot1;
        const [x2, y2] = dot2;
        if (x2 - x1 === 0) return Infinity;
        return (y2 - y1) / (x2 - x1);
    }
    
    const [d1, d2, d3, d4] = dots;
    
    if (getSlope(d1, d2) === getSlope(d3, d4)) return 1;
    if (getSlope(d1, d3) === getSlope(d2, d4)) return 1;
    if (getSlope(d1, d4) === getSlope(d2, d3)) return 1;
    return 0;    
}