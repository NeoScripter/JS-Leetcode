import test from './test.js';

var setZeroes = function (matrix) {
    const rows = matrix.length,
        cols = matrix[0].length;

    const zeroRows = new Set(),
        zeroCols = new Set();

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (matrix[r][c] === 0) {
                zeroRows.add(r);
                zeroCols.add(c);
            }
        }
    }
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (zeroCols.has(c) || zeroRows.has(r * cols)) {
                matrix[r][c] = 0;
            }
        }
    }

    return matrix;
};

test(
    'case 1',
    setZeroes([
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
    ]),
    [
        [1, 0, 1],
        [0, 0, 0],
        [1, 0, 1],
    ]
);
test(
    'case 2',
    setZeroes([
        [0, 1, 2, 0],
        [3, 4, 5, 2],
        [1, 3, 1, 5],
    ]),
    [
        [0, 0, 0, 0],
        [0, 4, 5, 0],
        [0, 3, 1, 0],
    ]
);
