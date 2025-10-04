import test from './test.js';

var numDistinct = function (s, t) {
    let m = s.length,
        n = t.length;
    let dp = Array(n + 1).fill(0);
    dp[n] = 1;

    for (let i = m - 1; i >= 0; i--) {
        let nextDp = Array(n + 1).fill(0);
        nextDp[n] = 1;

        for (let j = n - 1; j >= 0; j--) {
            nextDp[j] = dp[j];
            if (s[i] === t[j]) {
                nextDp[j] += dp[j + 1];
            }
        }

        dp = nextDp;
    }

    return dp[0];
};

test('case 1', numDistinct('rabbbit', 'rabbit'), 3);
test('case 2', numDistinct('babgbag', 'bag'), 5);
