import test from './test.js';

var maximumTotalDamage = function (power) {
    const map = new Map();
    power.forEach((n) => map.set(n, (map.get(n) ?? 0) + 1));
    const sorted = power.sort((a, b) => a - b);
    const n = sorted.length;

    const dp = new Array(n).fill(0);
    dp[0] = map.get(sorted[0]) * sorted[0];

    for (let i = 1; i < n; i++) {
        const totalDamage = map.get(sorted[i]) * sorted[i];

        let low = 0,
            high = i;

        while (low <= high) {
            const mid = (low + high) >> 1;
            if (sorted[mid] <= sorted[i] - 3) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        dp[i] = Math.max(dp[i - 1], totalDamage + (high >= 0 ? dp[high] : 0));
    }

    return dp.at(-1);
};

test('case 1', maximumTotalDamage([1, 1, 3, 4]), 6);
test('case 2', maximumTotalDamage([7, 1, 6, 6]), 13);
