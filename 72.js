import test from './test.js';

var minDistance = function (word1, word2) {
    let m = word1.length,
        n = word2.length;

    if (m < n) {
        [m, n] = [n, m];
        [word1, word2] = [word2, word1];
    }

    let dp = new Array(n + 1).fill(0);

    for (let j = 0; j <= n; j++) {
        dp[j] = n - j;
    }

    for (let i = m - 1; i >= 0; i--) {
        let nextDp = new Array(n + 1).fill(0);
        nextDp[n] = m - i;

        for (let j = n - 1; j >= 0; j--) {
            if (word1[i] === word2[j]) {
                nextDp[j] = dp[j + 1];
            } else {
                nextDp[j] = 1 + Math.min(dp[j], nextDp[j + 1], dp[j + 1]);
            }
        }
        dp = nextDp;
    }

    return dp[0];
};

test('case 1', minDistance('horse', 'ros'), 3);
test('case 2', minDistance('intention', 'execution'), 5);
