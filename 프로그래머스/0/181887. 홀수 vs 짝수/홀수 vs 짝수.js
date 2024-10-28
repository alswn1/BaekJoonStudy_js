function solution(num_list) {
    let odd_sum = num_list.reduce((e, v, i) => i % 2 != 0 ? e + v : e, 0);
    let even_sum = num_list.reduce((e, v, i) => i % 2 == 0 ? e + v : e, 0);
    
    return odd_sum > even_sum ? odd_sum : even_sum;
}