function solution(number) {
    var len = number.length;
    var count = 0;
    
    for (let i=0; i<len-2; i++) {
        for (let j=i+1; j<len-1; j++) {
            for (let z=j+1; z<len; z++) {
                if (number[i] + number[j] + number[z] == 0) count++;
            }
        }
    }
    return count;
}