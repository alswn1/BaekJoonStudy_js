let path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(path).toString().trim().split(/r?\n/);

input.map((s) => {
    var arr = s.split(' ');
    if (arr[0] != "0") {
        var n1 = Math.pow(arr[0], 2);
        var n2 = Math.pow(arr[1], 2);
        var n3 = Math.pow(arr[2], 2);
        
        if (n1 == n2 + n3 || n2 == n1 + n3 || n3 == n1 + n2) {
            console.log("right");
        }else console.log("wrong");
    }
})
