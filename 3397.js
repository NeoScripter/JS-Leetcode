import test from './test.js';

var maxDistinctElements = function (nums, k) {
    nums.sort((a, b) => a - b);
    const unique = new Set();
    let nextFree = nums[0] - k;

    for (const num of nums) {
        nextFree = Math.max(nextFree, num - k);

        while (unique.has(nextFree)) {
            nextFree++;
        }

        if (nextFree <= num + k) {
            unique.add(nextFree);
        }
    }

    return unique.size;
};

test('case 1', maxDistinctElements([1, 2, 2, 3, 3, 4], 2), 6);
test('case 2', maxDistinctElements([4, 4, 4, 4], 1), 3);
