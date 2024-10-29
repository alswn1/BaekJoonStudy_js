const controls = {
    '1' : 'w',
    '-1' : 's',
    '10' : 'd',
    '-10' : 'a'
};

function solution(numLog) {
    return numLog.reduce((a, c, i) => (
        i === 0 ? a : a + controls[c - numLog[i-1]]
    ),'')
}