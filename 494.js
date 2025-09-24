import test from './test.js';

var findTargetSumWays = function (nums, target) {
    let dp = new Map();
    dp.set(0, 1);

    for (const num of nums) {
        let nextDP = new Map();

        for (let [total, count] of dp) {
            nextDP.set(total - num, (nextDP.get(total - num) || 0) + count);
            nextDP.set(total + num, (nextDP.get(total + num) || 0) + count);
        }

        dp = nextDP;
    }

    return dp.get(target) || 0;
};

test('case 1', findTargetSumWays([1, 1, 1, 1, 1], 3), 5);
test('case 2', findTargetSumWays([1], 1), 1);
