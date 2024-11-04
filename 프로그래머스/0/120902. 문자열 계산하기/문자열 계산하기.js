function solution(my_string) {
    const strArr = my_string.split(' ');
    let result = +strArr[0];
    
    for (let i=1; i<strArr.length; i+=2) {
        const oper = strArr[i];
        const num = +strArr[i+1];
        
        oper === "+" ? result += num : result -= num;
    }
    
    return result;
}