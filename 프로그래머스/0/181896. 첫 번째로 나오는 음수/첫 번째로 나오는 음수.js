function solution(num_list) {
    let len = num_list.length;
    for (let i=0; i<len; i++) {
        if (num_list[i] < 0) {
            return i;
        }
    }
    return -1;
}