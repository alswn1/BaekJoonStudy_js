function solution(k, tangerine) {
    var answer = 0;
    const countMap = new Map();

    tangerine.forEach(size => {
        countMap.set(size, (countMap.get(size) || 0) + 1);
    });

    const countArr = [...countMap.values()].sort((a, b) => b - a);

    for (let count of countArr) {
        k -= count;
        answer++;
        if (k <= 0) break;
    }

    return answer;
}