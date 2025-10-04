import test from './test.js';

var triangularSum = function (nums) {
    let dp = nums;

    while (dp.length > 1) {
        let newNums = new Array(dp.length - 1).fill(0);

        for (let i = 0; i < newNums.length; i++) {
            newNums[i] = (dp[i] + dp[i + 1]) % 10;
        }

        dp = newNums;
    }

    return dp[0];
};

test('case 1', triangularSum([1, 2, 3, 4, 5]), 8);
test('case 2', triangularSum([5]), 5);
