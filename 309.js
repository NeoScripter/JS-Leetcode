import test from './test.js';

var maxProfit = function (prices) {
    const memo = Array.from({ length: prices.length }, () => Array(2).fill(-1));

    const dp = (i, buying) => {
        if (i >= prices.length) return 0;

        const key = Number(buying);
        if (memo[i][key] !== -1) {
            return memo[i][key];
        }
        const cooldown = dp(i + 1, buying);

        if (buying) {
            const buy = dp(i + 1, false) - prices[i];
            memo[i][key] = Math.max(cooldown, buy);
        } else {
            const sell = dp(i + 2, true) + prices[i];
            memo[i][key] = Math.max(cooldown, sell);
        }

        return memo[i][key];
    };

    return dp(0, true);
};

test('case 1', maxProfit([1, 2, 3, 0, 2]), 3);
test('case 2', maxProfit([1]), 0);
