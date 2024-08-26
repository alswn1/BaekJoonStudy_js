let path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(path).toString().replace(/\r/g, '').trim().split('\n');

let count = parseInt(input[0]);
let arr = [];

for (let i=1; i<=count; i++) {
    arr.push({"age":parseInt(input[i].split(" ")[0]), "name":input[i].split(" ")[1]});
}

arr.sort((a, b) => a.age - b.age);

arr.forEach((e) => {
    console.log(`${e.age} ${e.name}`);
})