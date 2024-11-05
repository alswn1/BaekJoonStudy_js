function solution(rank, attendance) {
    const att_arr = rank
        .map((r, i) => ({rank : r, index : i}))
        .filter((_, i) => attendance[i])
        .sort((a, b) => a.rank - b.rank);
    
    const [a, b, c] = [att_arr[0].index, att_arr[1].index, att_arr[2].index];
    
    return 10000 * a + 100 * b + c;
}