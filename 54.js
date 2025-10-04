import test from './test.js';

var spiralOrder = function (matrix) {
    const rows = matrix.length,
        cols = matrix[0].length;

    const dirs = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
    ];
    let dir = 0;
    const seen = new Set([0]);
    const res = [[0, 0]];

    const getDelta = (row, col) => {
        const nr = row + dirs[dir][0],
            nc = col + dirs[dir][1];

        const hash = nr * cols + nc;

        return [nr, nc, hash];
    };

    while (res.length < rows * cols) {
        const [r, c] = res.pop();

        let [nr, nc, hash] = getDelta(r, c);
        const invalid =
            Math.min(nr, nc) < 0 || nr >= rows || nc >= cols || seen.has(hash);

        if (invalid) {
            dir = (dir + 1) % 4;
            [nr, nc, hash] = getDelta(r, c);
        }
        seen.add(hash);
        res.push(matrix[r][c]);
        res.push([nr, nc]);
    }

    const [r, c] = res.pop();
    res.push(matrix[r][c]);
    return res;
};

test(
    'case 1',
    spiralOrder([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ]),
    [1, 2, 3, 6, 9, 8, 7, 4, 5]
);
test(
    'case 2',
    spiralOrder([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
    ]),
    [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]
);
