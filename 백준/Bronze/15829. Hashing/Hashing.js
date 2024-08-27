let path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(path).toString().replace(/\r/g, '').trim().split('\n');

let loop = parseInt(input[0]);
let str = input[1];
let answer = 0;

for (let i=0; i<loop; i++) {
    answer += (str.charAt(i).charCodeAt()-96) * Math.pow(31, i);
}

console.log(answer);