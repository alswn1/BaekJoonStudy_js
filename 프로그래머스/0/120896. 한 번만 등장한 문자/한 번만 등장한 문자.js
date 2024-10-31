function solution(s) {
    let charCount = {};
    for (let c of s) {
        charCount[c] = (charCount[c] || 0) + 1;
    }
    
    return Object.keys(charCount)
        .filter((e) => charCount[e] === 1)
        .sort()
        .join('');
}