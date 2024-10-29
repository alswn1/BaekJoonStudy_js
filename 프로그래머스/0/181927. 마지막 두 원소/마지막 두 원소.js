function solution(num_list) {
    let len = num_list.length - 1;
    
    if (num_list[len] > num_list[len-1]) {
        num_list.push(num_list[len] - num_list[len-1]);
    }else if (num_list[len] <= num_list[len-1]) {
        num_list.push(2*num_list[len]);
    }
    
    return num_list;
}