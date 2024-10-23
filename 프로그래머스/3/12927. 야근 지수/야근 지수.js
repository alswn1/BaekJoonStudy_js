function solution(n, works) {
    var answer = 0;
    works.sort((a, b) => b-a);

    while (n > 0) {
        if (works[0] == 0) break;
        works[0]--;
        n--;

        let i = 0;
        while (i < works.length - 1 && works[i] < works[i + 1]) {
            [works[i], works[i + 1]] = [works[i + 1], works[i]]
            i++;
        }
    }

    works.forEach((e) => {
        if (e > 0) answer += Math.pow(e, 2);
    });

    return answer;
}