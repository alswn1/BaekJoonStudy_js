function solution(my_string) {
    var answer = "";
    
    for (let i=0; i < my_string.length; i++) {
        var charCode = my_string.charAt(i).charCodeAt();
        if (charCode <= 90) answer += String.fromCharCode(charCode + 32);
        else answer += String.fromCharCode(charCode - 32);
    }
    
    return answer;
}