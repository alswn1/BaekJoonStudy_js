function solution(balls, share) {
    let multi = 1;
    let div = 1;
    let j = 1;
    for (let i=balls; i>balls-share; i--) {
        multi *= i;
        div *= j;
        j++;
    }
    
    return Math.round(multi/div);
}