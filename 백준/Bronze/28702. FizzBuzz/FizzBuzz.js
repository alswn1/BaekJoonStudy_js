let path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(path).toString().trim().split(/r?\n/);

for (let i=0; i<3; i++) {
    if (!isNaN(parseInt(input[i]))) {
        var ind = i;
        var num = parseInt(input[i]);
        break;
    }
}

num = num + 3 - ind;

if (num % 3 != 0 && num % 5 != 0) {
    console.log(num);
} else if (num % 3 != 0) {
    console.log("Buzz");
} else if (num % 5 != 0) {
    console.log("Fizz");
} else {
    console.log("FizzBuzz");
}