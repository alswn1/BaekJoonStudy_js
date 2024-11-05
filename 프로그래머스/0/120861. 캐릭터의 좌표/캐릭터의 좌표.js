function solution(keyinput, board) {
    let x = 0;
    let y = 0;
    const xMax = (board[0]-1)/2;
    const yMax = (board[1]-1)/2;
    
    keyinput.forEach(e => {
        switch(e) {
            case "left":
                x = Math.max(x-1, -xMax);
                break;
            case "right":
                x = Math.min(x+1, xMax);
                break;
            case "down":
                y = Math.max(y-1, -yMax);
                break;
            case "up":
                y = Math.min(y+1, yMax);
                break;
        }
    })
    
    return [x, y];
}