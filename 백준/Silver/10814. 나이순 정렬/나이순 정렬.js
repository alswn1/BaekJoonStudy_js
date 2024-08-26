let path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(path).toString().replace(/\r/g, '').trim().split('\n');

let count = parseInt(input[0]);
let arr = [];

for (let i=1; i<=count; i++) {
    let arrLine = input[i].split(' ');
    arrLine[0] = Number(arrLine[0]);
    arr.push(arrLine);
}

arr.sort((a, b) => a[0] - b[0]);

let answer = arr.map(e => e.join(' ')).join('\n');

console.log(answer);