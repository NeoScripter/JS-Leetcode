var solveNQueens = function (n) {
    const ans = [];
    const board = Array.from({ length: n }, () => Array(n).fill('.'));

    function dfs(col) {
        if (col === n) {
            ans.push(board.map((row) => row.join('')));
            return;
        }

        for (let r = 0; r < n; r++) {
            if (!canPlace(board, col, r)) continue;

            board[r][col] = 'Q';
            dfs(col + 1);
            board[r][col] = '.';
        }
    }

    dfs(0);

    return ans;
};

function canPlace(board, c, r) {
    // left
    for (let i = c - 1; i >= 0; i--) {
        if (board[r][i] === 'Q') return false;
    }

    // top-left
    for (let i = c - 1, j = r - 1; i >= 0 && j >= 0; i--, j--) {
        if (board[j][i] === 'Q') return false;
    }

    // bottom-left
    for (let i = c - 1, j = r + 1; i >= 0 && j < board.length; i--, j++) {
        if (board[j][i] === 'Q') return false;
    }

    return true;
}

const n = 4;
// [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
