function solution(n, numlist) {
    let arr = [];
    numlist.map((e) => {
        if (e % n == 0) {
            arr.push(e);
        }
    });

    return arr;
}