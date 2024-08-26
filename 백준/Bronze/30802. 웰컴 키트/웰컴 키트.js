let path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(path).toString().trim().split(/r?\n/);

let stu = parseInt(input[0]);
let shirts = input[1].split(" ").map(Number);
let t = input[2].split(" ")[0];
let p = input[2].split(" ")[1];

let tshirtsBundles = 0;
shirts.map((e) => {
    tshirtsBundles += Math.ceil(e / t);
})

let penBundles = Math.floor(stu / p);
let extraPens = stu % p;

console.log(tshirtsBundles);
console.log(`${penBundles} ${extraPens}`);