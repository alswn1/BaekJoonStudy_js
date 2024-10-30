function solution(num_list) {
    return num_list.reduce((total, num) => {
        let steps = 0;
        
        while (num != 1) {
            num = num % 2 == 0 ? num / 2 : (num - 1) / 2;
            steps++;
        }
        return total + steps;
    }, 0);
}