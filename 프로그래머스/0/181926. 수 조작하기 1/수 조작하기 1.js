const controls = {
    'w' : 1,
    's' : -1,
    'd' : 10,
    'a' : -10
}

function solution(n, control) {
    control.split('').map((e) => {
        n += controls[e];
    });
    
    return n;
}