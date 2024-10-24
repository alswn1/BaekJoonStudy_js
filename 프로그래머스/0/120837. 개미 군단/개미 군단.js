function solution(hp) {
    let gan = 0;
    let bun = 0;
    let ill = 0;
    
    gan = Math.floor(hp/5);
    bun = Math.floor((hp%5)/3);
    ill = (hp%5)%3;
    
    return gan+bun+ill;
}