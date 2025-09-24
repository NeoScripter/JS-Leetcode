import test from './test.js';

var change = function (amount, coins) {
    let prevRow = new Array(amount + 1).fill(0);
    prevRow[0] = 1;

    for (let i = coins.length - 1; i >= 0; i--) {
        let currRow = new Array(amount + 1).fill(0);
        currRow[0] = 1;

        for (let a = 1; a <= amount; a++) {
            currRow[a] = prevRow[a];
            if (a - coins[i] >= 0) {
                currRow[a] += currRow[a - coins[i]];
            }
        }

        prevRow = currRow;
    }

    return prevRow[amount];
};

test('case 1', change(5, [1, 2, 5]), 4);
test('case 2', change(3, [2]), 0);
test('case 3', change(10, [10]), 1);
