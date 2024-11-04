function solution(arr) {
  let cnt = 0;
  let hasChanged;

  do {
    hasChanged = false;

    const newArr = arr.map(e => {
      if (e >= 50 && e % 2 == 0) {
        hasChanged = true;
        return e / 2;
      }else if (e < 50 && e % 2 == 1) {
        hasChanged = true;
        return e * 2 + 1;
      }else {
        return e;
      }
    });

    arr = newArr;
    cnt++;
  }while (hasChanged)

  return cnt - 1;
}