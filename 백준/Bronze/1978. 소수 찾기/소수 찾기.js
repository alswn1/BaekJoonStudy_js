let path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(path).toString().trim().split(/r?\n/);

var arr = input[1].split(' ');
var answer = 0;
var bol = false;

arr.map((e) => {
    if (e != "1" && e != "2") {
        for(let i=2; i<parseInt(e); i++) {
            if (i == parseInt(e)) {
                
            } else {
                if (parseInt(e) % i != 0) {
                    bol = true;
                } else {
                    bol = false;
                    break;
                } 
            }
        }
    }else if (e == "2") answer += 1;
    if (bol) answer += 1;
})

console.log(answer);