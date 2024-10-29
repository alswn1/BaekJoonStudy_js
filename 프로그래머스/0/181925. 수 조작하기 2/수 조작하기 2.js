function solution(numLog) {
    let len = numLog.length;
    let answer = "";
    
    for (let i=0; i<len-1; i++) {
        if (numLog[i] + 1 == numLog[i+1]) answer += "w";
        else if (numLog[i] - 1 == numLog[i+1]) answer += "s";
        else if (numLog[i] + 10 == numLog[i+1]) answer += "d";
        else if (numLog[i] - 10 == numLog[i+1]) answer += "a";
    }
    
    return answer;
}