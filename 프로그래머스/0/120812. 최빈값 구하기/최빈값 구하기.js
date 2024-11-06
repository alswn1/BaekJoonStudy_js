function solution(array) {
    const frequency = new Map();
    
    for (const num of array) {
        frequency.set(num, (frequency.get(num) || 0) + 1);
    }
    
    let maxFrequency = 0;
    let mode = -1;
    let isUnique = true;
    
    for (const [num, freq] of frequency) {
        if (freq > maxFrequency) {
            maxFrequency = freq;
            mode = num;
            isUnique = true;
        }else if (freq === maxFrequency) {
            isUnique = false;
        }
    }
    return isUnique ? mode : -1;
}