function solution(my_string, num1, num2) {
    let st_arr = my_string.split('');
    
    [st_arr[num1], st_arr[num2]] = [st_arr[num2], st_arr[num1]];
    
    return st_arr.join('');
}