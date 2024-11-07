function solution(a, b, c, d) {
    const countMap = new Map();
    
    [a, b, c, d].forEach(num => {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    });
    
    const uniqueNums = [...countMap.keys()];
    const countNums = [...countMap.values()];
    
    if (countNums.length === 1) {
        return 1111 * uniqueNums[0];
    }else if (countNums.includes(3)) {
        const p = uniqueNums[countNums.indexOf(3)];
        const q = uniqueNums[countNums.indexOf(1)];
        
        return (10 * p + q) ** 2;
    }else if (countNums.length === 2 && countNums.includes(2)) {
        const [p, q] = uniqueNums;
        return (p + q) * Math.abs(p - q);
    }else if (countNums.includes(2)) {
        const q = uniqueNums[countNums.indexOf(1)];
        const r = uniqueNums[countNums.lastIndexOf(1)];
        return q * r;
    }else {
        return Math.min(...uniqueNums);
    }
    
}