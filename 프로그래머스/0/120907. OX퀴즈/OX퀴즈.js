function solution(quiz) {
    return quiz.map(q => {
        const [left, oper, right, , result] = q.split(' ');
        const cal = oper === '+' ? +left + +right : +left - +right;
        return cal === +result ? "O" : "X";
    })
}