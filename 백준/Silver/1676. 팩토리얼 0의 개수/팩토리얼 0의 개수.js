let path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(path).toString().trim().split(/r?\n/);

let N = parseInt(input);
let count = 0;

for (let i = 5; i <= N; i *= 5) {
    count += Math.floor(N / i);
}

console.log(count);