let path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(path).toString().replace(/\r/g, '').trim().split('\n');

let count = parseInt(input[0]);
let arr = [];

for (let i=1; i<count+1; i++) {
    arr.push(input[i]);
}

arr.sort().sort((a, b) => a.length - b.length);
arr = [...new Set(arr)];

arr.map((e) => {
    console.log(e);
})
