function solution(arr) {
    const row = arr.length;
    const col = arr[0].length;
    
    if (row > col) {
        for (let i = 0; i < row; i++) {
            while (arr[i].length < row) {
                arr[i].push(0);
            }
        }
    } else if (row < col) {
        for (let i = 0; i < col - row; i++) {
            arr.push(Array(col).fill(0));
        }        
    }
    
    return arr;
}