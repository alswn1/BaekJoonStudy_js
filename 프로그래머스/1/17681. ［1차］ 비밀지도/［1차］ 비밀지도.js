function solution(n, arr1, arr2) {    
    arr1.map((e, idx) =>  {
        var ch1 = e.toString(2);
        if (ch1.length != n) {
            ch1 = ch1.padStart(n, '0');
        };
        arr1[idx] = ch1;
    });

    arr2.map((e, idx) =>  {
        var ch2 = e.toString(2);
        if (ch2.length != n) {
            ch2 = ch2.padStart(n, '0');
        };
        arr2[idx] = ch2;
    });
    console.log(arr1);
    console.log(arr2);

    var arr3 = [];
    for (let i = 0; i < n; i++) {
        var str = "";
        for (let j = 0; j < n; j++) {
            if (arr1[i].charAt(j) == '0' && arr2[i].charAt(j) == '0') {
                str += " ";
            }else {
                str += "#";
            }
        }
        arr3.push(str);
    }

    return arr3;
}