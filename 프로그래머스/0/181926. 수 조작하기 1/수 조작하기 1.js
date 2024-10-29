const controls = {
    'w' : (n) => n + 1,
    's' : (n) => n -1,
    'd' : (n) => n + 10,
    'a' : (n) => n - 10
}

function solution(n, control) {
    return [...control].reduce((a, c) => controls[c](a), n);
}