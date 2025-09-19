import test from './test.js';

var solve = function (board) {
    const rows = board.length,
        cols = board[0].length;
    const seen = new Set();

    const edgeOs = () =>
        Array.from({ length: rows * cols }, (_, i) => {
            const r = Math.floor(i / cols),
                c = i % cols;
            return board[r][c] === 'O' &&
                (Math.min(r, c) === 0 || r === rows - 1 || c === cols - 1)
                ? [r, c]
                : null;
        }).filter(Boolean);

    const dfs = (row, col) => {
        const hash = row * cols + col;
        if (seen.has(hash)) return;

        seen.add(hash);

        for (const [r, c] of [
            [0, 1],
            [1, 0],
            [0, -1],
            [-1, 0],
        ]) {
            const nr = r + row,
                nc = c + col;

            if (Math.min(nr, nc) < 0) continue;
            if (nr >= rows || nc >= cols) continue;
            if (seen.has(nr * cols + nc)) continue;
            if (board[nr][nc] !== 'O') continue;

            dfs(nr, nc);
        }
    };

    edgeOs().forEach(([r, c]) => dfs(r, c));

    for (let r = 1; r < rows - 1; r++) {
        for (let c = 1; c < cols - 1; c++) {
            const hash = r * cols + c;
            if (!seen.has(hash) && board[r][c] === 'O') {
                board[r][c] = 'X';
            }
        }
    }

    return board;
};

test(
    'case 1',
    solve([
        ['X', 'X', 'X', 'X'],
        ['X', 'O', 'O', 'X'],
        ['X', 'X', 'O', 'X'],
        ['X', 'O', 'X', 'X'],
    ]),
    [
        ['X', 'X', 'X', 'X'],
        ['X', 'X', 'X', 'X'],
        ['X', 'X', 'X', 'X'],
        ['X', 'O', 'X', 'X'],
    ]
);
test('case 2', solve([['X']]), [['X']]);
