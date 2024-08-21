let path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(path).toString().trim().split(/r?\n/);

var str = input[0];
var al = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var answer = "";

al.map((e) => {
    answer += str.indexOf(e) + " ";
})

answer = answer.trim();
console.log(answer);
