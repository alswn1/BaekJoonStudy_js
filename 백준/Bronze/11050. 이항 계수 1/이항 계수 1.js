let path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(path).toString().trim().split(/r?\n/);

var [a, b] = input[0].split(' ').map((e) => parseInt(e));
var answer = 1;
var top = 1;
var bottom = 1;

for (let i=a; i > a-b; i--) {
    top = top * i;
}
for (let j=b; j > 0; j--) {
    bottom = bottom * j;
}
answer = top / bottom;

console.log(answer);