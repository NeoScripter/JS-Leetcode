import test from './test.js';

function traceWordPath(word, board) {
    const rows = board.length,
        cols = board[0].length;
    let res = 'Not present';

    const bk = (stack, idx, word) => {
        if (idx === word.length) {
            stack.pop();
            res = [...stack];
            return true;
        }

        const [row, col] = stack[stack.length - 1];

        if (Math.min(row, col) < 0) return false;
        if (row >= rows || col >= cols) return false;
        if (board[row][col] === '*') return false;
        if (board[row][col] !== word[idx]) return false;

        idx++;
        const tmp = board[row][col];
        board[row][col] = '*';
        const ret =
            bk([...stack, [row + 1, col]], idx, word) ||
            bk([...stack, [row - 1, col]], idx, word) ||
            bk([...stack, [row, col + 1]], idx, word) ||
            bk([...stack, [row, col - 1]], idx, word);

        board[row][col] = tmp;
        return ret;
    };

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (bk([[r, c]], 0, word)) {
                return res;
            }
        }
    }

    return res;
}

test(
    'case 1',
    traceWordPath('BISCUIT', [
        ['B', 'I', 'T', 'R'],
        ['I', 'U', 'A', 'S'],
        ['S', 'C', 'V', 'W'],
        ['D', 'O', 'N', 'E'],
    ]),
    [
        [0, 0],
        [1, 0],
        [2, 0],
        [2, 1],
        [1, 1],
        [0, 1],
        [0, 2],
    ]
);

test(
    'case 2',
    traceWordPath('HELPFUL', [
        ['L', 'I', 'T', 'R'],
        ['U', 'U', 'A', 'S'],
        ['L', 'U', 'P', 'O'],
    ]),
    'Not present'
);
