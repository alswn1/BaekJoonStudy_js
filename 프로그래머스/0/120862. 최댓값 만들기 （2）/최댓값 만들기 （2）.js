function solution(numbers) {
    var answer = numbers[0] * numbers[1];
    
    for (let i=0; i < numbers.length-1; i++) {
        for (let j = i+1; j < numbers.length; j++) {
            var gop = numbers[i] * numbers[j];
            if (answer < gop) answer = gop;
        }
    }
    
    return answer;
}