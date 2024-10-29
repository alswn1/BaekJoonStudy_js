function solution(s1, s2) {
    let count = 0;
    s1.map((e) => s2.includes(e) ? count++ : count);
    return count;
}