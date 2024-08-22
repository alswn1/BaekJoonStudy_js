let path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(path).toString().trim().split(/r?\n/);

var group = input[0];
var score = input[1];
var sum = 0;

var max = +score[0];
score.split(' ').map((e) => {
    if (max < +e) max = +e;
    sum += +e;
})

var newSum = sum / max * 100;

console.log(newSum / group);