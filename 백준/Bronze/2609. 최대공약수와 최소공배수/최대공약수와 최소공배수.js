let path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(path).toString().trim().split(/r?\n/);

var [n2, n1] = input[0].split(' ').sort();  // n1 큰수, n2 작은수
var a3 = 1;
var a1 = n1;
var a2 = n2;

while (a3 != 0) {
    a3 = a1 % a2;
    a1 = a2;
    a2 = a3;
}

var max = a1;
var min = n1 * n2 / a1;

console.log(max);
console.log(min);