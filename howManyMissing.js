import test from './test.js';

function howManyMissing(nums) {
    if (nums.length === 0) {
        return 0;
    }

    let missing = 0;

    for (let i = 1, n = nums.length; i < n; i++) {
        missing += nums[i] - nums[i - 1] - 1;
    }

    return missing;
}

test('case 1', howManyMissing([1, 2, 3, 8, 9]), 4);
test('case 2', howManyMissing([1, 3]), 1);
test('case 3', howManyMissing([7, 10, 11, 12]), 2);
test('case 4', howManyMissing([1, 3, 5, 7, 9, 11]), 5);
test('case 5', howManyMissing([5, 6, 7, 8]), 0);
