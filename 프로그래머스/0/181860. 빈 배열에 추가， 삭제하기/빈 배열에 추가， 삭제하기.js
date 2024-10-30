function solution(arr, flag) {
    let X = [];
    
    flag.forEach((e, i) => {
        if (e) {
            for (let j=0; j<arr[i]*2; j++) X.push(arr[i]);
        }else {
            X.splice(-arr[i], arr[i]);
        }
    })
    return X;
}