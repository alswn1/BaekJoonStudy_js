function solution(arr1, arr2) {
    let sum1 = arr1.reduce((acc, cur) => acc + cur);
    let sum2 = arr2.reduce((acc, cur) => acc + cur);
    
    if (arr1.length > arr2.length) return 1;
    else if (arr1.length < arr2.length) return -1;
    else if (sum1 > sum2) return 1;
    else if (sum1 < sum2) return -1;
    else return 0;
}