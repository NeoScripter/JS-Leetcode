import test from './test.js';

var isInterleave = function (s1, s2, s3) {
    let m = s1.length,
        n = s2.length;

    if (m + n !== s3.length) return false;

    if (n < m) {
        [s1, s2] = [s2, s1];
        [n, m] = [m, n];
    }

    let dp = Array.from(n + 1).fill(false);
    dp[n] = true;

    for (let i = m; i >= 0; i--) {
        let nextDP = i === m ? true : false;

        for (let j = n; j >= 0; j--) {
            let res = j < n ? false : nextDP;

            if (i < m && s1[i] === s3[j + i] && dp[j]) {
                res = true;
            }
            if (j < n && s2[j] === s3[j + i] && nextDP) {
                res = true;
            }
            dp[j] = res;
            nextDP = dp[j];
        }
    }

    return dp[0];
};

test('case 1', isInterleave('aabcc', 'dbbca', 'aadbbcbcac'), true);
test('case 2', isInterleave('aabcc', 'dbbca', 'aadbbbaccc'), false);
test('case 3', isInterleave('', '', ''), true);
