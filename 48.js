import test from './test.js';

var rotate = function (matrix) {
    const n = matrix.length;

    let start = 0,
        end = n - 1;

    while (start < end) {
        [matrix[start], matrix[end]] = [matrix[end], matrix[start]];
        start++;
        end--;
    }

    for (let r = 0; r < n; r++) {
        for (let c = r; c < n; c++) {
            [matrix[r][c], matrix[c][r]] = [matrix[c][r], matrix[r][c]];
        }
    }

    return matrix;
};

test(
    'case 1',
    rotate([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ]),
    [
        [7, 4, 1],
        [8, 5, 2],
        [9, 6, 3],
    ]
);
test(
    'case 2',
    rotate([
        [5, 1, 9, 11],
        [2, 4, 8, 10],
        [13, 3, 6, 7],
        [15, 14, 12, 16],
    ]),
    [
        [15, 13, 2, 5],
        [14, 3, 4, 1],
        [12, 6, 8, 9],
        [16, 7, 10, 11],
    ]
);
