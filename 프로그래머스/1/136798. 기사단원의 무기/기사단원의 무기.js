function solution(number, limit, power) {
    var answer = 0;

    for(let i=1; i < number+1; i++) {
        var num = 0;

        var sqrt = Math.sqrt(i);
        for (let j = 1; j <= sqrt; j++) {
           if (i % j == 0) {
            num += 1;
            if (j != sqrt) {
                num += 1;
            }
           }

           if (num > limit) {
            break;
           }
        }

        if (num > limit) {
            answer += power;
        }else {
            answer += num;
        }
    }

    return answer;
}