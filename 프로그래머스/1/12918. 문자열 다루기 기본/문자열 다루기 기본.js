function solution(s) {
    if ((s.length == 4 || s.length == 6) && /^\d+$/.test(s)) return true;
    else return false;
}