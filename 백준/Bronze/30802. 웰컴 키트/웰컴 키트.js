let path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(path).toString().trim().split(/r?\n/);

let stu = parseInt(input[0]);
let shirts = input[1].split(" ").map((e)=> parseInt(e));
let shirtsLength = shirts.length;
let t = input[2].split(" ")[0];
let p = input[2].split(" ")[1];

let answer1 = 0;
let answer2 = "";

for (let i=0; i<shirtsLength; i++) {
    if (shirts[i] % t != 0) {
        answer1 += Math.floor(shirts[i] / t) + 1;
    }else {
        answer1 += Math.floor(shirts[i] / t);
    }
}

answer2 = Math.floor(stu/p) + " " + (stu%p);

console.log(answer1);
console.log(answer2);