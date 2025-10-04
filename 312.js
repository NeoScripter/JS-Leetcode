import test from './test.js';

var maxCoins = function (nums) {
    nums = [1, ...nums, 1];
    const n = nums.length;

    const memo = Array.from({ length: n }, () => Array(n).fill(-1));

    function dfs(left, right) {
        if (left + 1 === right) return 0;
        if (memo[left][right] !== -1) return memo[left][right];

        let best = 0;
        for (let k = left + 1; k < right; k++) {
            const coins =
                nums[left] * nums[k] * nums[right] +
                dfs(left, k) +
                dfs(k, right);
            best = Math.max(best, coins);
        }

        memo[left][right] = best;
        return best;
    }

    return dfs(0, n - 1);
};

test('case 1', maxCoins([3, 1, 5, 8]), 167);
test('case 2', maxCoins([1, 5]), 10);
