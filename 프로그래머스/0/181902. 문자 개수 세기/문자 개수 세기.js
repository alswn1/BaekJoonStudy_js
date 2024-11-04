function solution(my_string) {
    const answer = Array(52).fill(0);
    
    for (const c of my_string) {
        const code = c.charCodeAt();
        if (code >= 65 && code <= 90) answer[code - 65]++;
        else if (code >= 97 && code <= 122) answer[code - 71]++;
    };
    
    return answer;
}