let path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(path).toString().trim().split(/r?\n/);

var len = input[0]; // testcase length
var sum = 0;
for (let i=1; i<parseInt(len)+1; i++) {
    var score = 0;
    var arr = input[i].split('');
    for (let j=0; j<arr.length; j++) {
        if (arr[j] == 'O') {
            score++;
            sum += score;
        }else score = 0;
    }
    console.log(sum);
    sum = 0;
}