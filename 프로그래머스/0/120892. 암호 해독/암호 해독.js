function solution(cipher, code) {
    return [...cipher].filter((e, i) => i % code == code-1).join('');
}