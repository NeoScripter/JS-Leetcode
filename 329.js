import test from './test.js';

var longestIncreasingPath = function (matrix) {
    const [rows, cols] = [matrix.length, matrix[0].length];
    const memo = Array.from({ length: rows }, () => Array(cols).fill(-1));
    const ways = [
        [1, 0],
        [0, 1],
        [-1, 0],
        [0, -1],
    ];
    let max = 1;

    function dfs(r, c) {
        if (memo[r][c] !== -1) return memo[r][c];

        let best = 1;
        for (const [dr, dc] of ways) {
            const nr = r + dr,
                nc = c + dc;

            if (nr < 0 || nc < 0 || nr >= rows || nc >= cols) continue;
            if (matrix[nr][nc] <= matrix[r][c]) continue;

            best = Math.max(best, 1 + dfs(nr, nc));
        }

        memo[r][c] = best;
        return best;
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            max = Math.max(max, dfs(r, c));
        }
    }

    return max;
};

test(
    'case 1',
    longestIncreasingPath([
        [9, 9, 4],
        [6, 6, 8],
        [2, 1, 1],
    ]),
    4
);
test(
    'case 2',
    longestIncreasingPath([
        [3, 4, 5],
        [3, 2, 6],
        [2, 2, 1],
    ]),
    4
);
test('case 3', longestIncreasingPath([[1]]), 1);
