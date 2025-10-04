import test from './test.js';

var minimumTotal = function (triangle) {
    const n = triangle.length;
    let dp = triangle[n - 1];

    for (let i = n - 2; i >= 0; i--) {
        let nextDp = triangle[i];

        for (let j = 0; j < nextDp.length; j++) {
            nextDp[j] += Math.min(dp[j], dp[j + 1]);
        }

        dp = nextDp;
    }

    return dp[0];
};


test('case 1', minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]), 11);
test('case 2', minimumTotal([[-10]]), -10);
