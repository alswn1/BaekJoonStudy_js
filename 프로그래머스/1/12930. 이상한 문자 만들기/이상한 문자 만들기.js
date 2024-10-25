function solution(s) {
    var arr = s.split(' ');
    var newArr = [];
    arr.map((e) => {
        var len = e.length;
        var str = "";
        for (let i=0; i<len; i++) {
            str += i % 2 == 0 ? e.charAt(i).toString().toUpperCase() : e.charAt(i).toString().toLowerCase();
        }
        newArr.push(str);
    })

    return newArr.join(' ');
}