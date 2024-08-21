let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

var arr = [];
arr.push(input[0]%42);
for (let i = 1; i < 10 ; i++) {
    var left = input[i]%42;
    if (!arr.includes(left)) arr.push(left);
}

console.log(arr.length);