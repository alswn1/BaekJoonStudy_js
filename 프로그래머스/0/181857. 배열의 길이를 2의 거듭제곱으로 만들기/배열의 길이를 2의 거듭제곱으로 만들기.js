function solution(arr) {
    const len = arr.length;
    const power = 2 ** Math.ceil(Math.log2(len||1));
    
    return arr.concat(new Array(power - len).fill(0));
}