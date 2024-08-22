let path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(path).toString().trim().split(/r?\n/);

var len = parseInt(input[0].split(' ')[0]);
var sum = parseInt(input[0].split(' ')[1]);
var numArr = input[1].split(' ');
var answer = 0;

for (let i=0; i<len-2; i++) {
    for (let j=i+1; j<len-1; j++) {
        for (let k=j+1; k<len; k++) {
            var a = parseInt(numArr[i]);
            var b = parseInt(numArr[j]);
            var c = parseInt(numArr[k]);
            if(a+b+c <= sum && a+b+c > answer) {
                answer = a+b+c;
            }
        }
    }
}

console.log(answer);