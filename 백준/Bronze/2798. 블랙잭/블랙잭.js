let path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(path).toString().trim().split(/r?\n/);

var [len, sum] = input[0].split(' ').map((e) => parseInt(e));
var arr = input[1].split(' ').map((e) => parseInt(e));
var answer = 0;

for (let i=0; i<len-2; i++) {
    for (let j=i+1; j<len-1; j++) {
        for (let k=j+1; k<len; k++) {
            var a = arr[i] + arr[j] + arr[k];
            if(a <= sum && a > answer) answer = a;
        }
    }
}

console.log(answer);