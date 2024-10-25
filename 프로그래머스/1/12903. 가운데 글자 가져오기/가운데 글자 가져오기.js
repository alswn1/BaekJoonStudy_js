function solution(s) {
    var len = s.length;

    if (len % 2 == 0) {
        return s.substr(len/2-1, 2);
    }else {
        return s.substr(Math.floor(len/2), 1);
    }
}