let path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(path).toString().trim().split('\n');

let count = parseInt(input[0]);
var arr = [];

for (let i=1; i<count+1; i++) {
    arr.push(parseInt(input[i]));
}

arr.sort((a, b) => a-b);

console.log(arr.join("\n"));