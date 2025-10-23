import test from './test.js';

var hasIncreasingSubarrays = function (nums, k) {
    if (k === 1) {
        return nums.length > 1;
    }

    let streak = 1;
    const valid = new Set();

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            streak++;
        } else {
            streak = 1;
        }

        if (streak >= k) {
            valid.add(i - k);

            if (valid.has(i - k * 2)) {
                return true;
            }
        }
    }

    return streak >= k * 2;
};

test('case 1', hasIncreasingSubarrays([2, 5, 7, 8, 9, 2, 3, 4, 3, 1], 3), true);
test(
    'case 2',
    hasIncreasingSubarrays([1, 2, 3, 4, 4, 4, 4, 5, 6, 7], 5),
    false
);
