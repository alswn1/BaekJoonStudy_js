function solution(score) {
    const average = score.map(([eng, math]) => (eng + math) / 2);
    const sortAv = [...average].sort((a, b) => b - a);
    
    return average.map(e => sortAv.indexOf(e) + 1);
}