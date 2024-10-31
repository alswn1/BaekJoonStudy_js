function solution(myStr) {
    const splitStr = myStr.split(/[a-c]/).filter(e => e);
    return splitStr.length != 0 ? splitStr : ["EMPTY"];
}