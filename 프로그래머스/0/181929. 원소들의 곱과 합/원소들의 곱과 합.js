function solution(num_list) {
    let mul = num_list.reduce((a, c) => a * c, 1);
    let sum = Math.pow((num_list.reduce((a, c) => a + c, 0)),2);
    
    return +(mul < sum);
}