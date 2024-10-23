function solution(arr) {
    var newArr = [];
    arr.map((e) => newArr.push(e));
    newArr.sort((a, b) => a - b);
    var idx = arr.indexOf(newArr[0]);
    arr.splice(idx, 1);

    if (arr.length > 0) {
        return arr;
    }else return [-1];
}