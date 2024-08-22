let path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(path).toString().trim().split(/r?\n/);

for (let i=0; i<input.length-1; i++) {
    var answer = "yes";
    var num = input[i];
    var length = num.length;
    var len = length % 2 == 0 ? length / 2 : (length-1) / 2;

    for (let j=0; j<len; j++) {
        if (num.charAt(j) != num.charAt(length-1-j)) {
            answer = "no";
            break;
        }
    }
    console.log(answer);
}