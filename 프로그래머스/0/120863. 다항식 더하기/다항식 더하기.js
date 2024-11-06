function solution(polynomial) {
    const arr = polynomial.split(' + ');
    let xValue = 0;
    let numValue = 0;
    
    arr.forEach(e => {
        if (e.includes('x')) {
            if (e === 'x') {
                xValue += 1;
            }else if (e === '-x') {
                xValue -= 1;
            }else {
                xValue += +(e.replace('x', ''));
            }
        }else {
            numValue += +e;
        }
    });
    
    let answer = '';
    if (xValue !== 0) {
        answer += (xValue === 1 ? 'x' : (xValue === -1 ? '-x' : `${xValue}x`));
    }
    
    if (numValue !== 0) {
        if (answer) answer += ' + ';
        answer += numValue;
    }
    
    return answer || 0; 
}