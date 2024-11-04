function solution(sides) {
    const [a, b] = sides.sort((a, b) => a - b);
    
    return 2*a-1;
}