let path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(path).toString().trim().split(/r?\n/);

var num = input[0];
var sum = 1;
var start = 1;

while(sum < num) {
    sum += 6*(start++);
}

console.log(start);