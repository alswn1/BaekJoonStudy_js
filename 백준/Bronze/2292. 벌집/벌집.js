let path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(path).toString().trim().split(/r?\n/);

var num = input[0]; // 13
var a = input[0] / 6;   // 2
var sum = 1;
var answer = 1;

for (let i = 0; i < a + 1; i++) {
    sum += 6 * i;
    if (sum >= num) {
        answer = i+1;
        break;
    }
}

console.log(answer);