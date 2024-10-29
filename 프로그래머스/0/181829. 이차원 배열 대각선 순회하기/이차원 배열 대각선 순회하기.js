function solution(board, k) {
    return board.reduce((sum, row, i) => (
        sum + row.reduce((a, c, j) => (
            i + j <= k ? a + c : a
        ), 0)
    ), 0);
}