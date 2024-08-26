let path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(path).toString().trim().split(/r?\n/);

var title=666;

while(true){
    
    if(title.toString().includes('666')){
        input-=1;
        if(input==0)
            break;
    }
    
    title+=1;
    
}

console.log(title);