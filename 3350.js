import test from './test.js';

var maxIncreasingSubarrays = function (nums) {
    let prev = 0,
        curr = 1,
        ans = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            curr++;
        } else {
            prev = curr;
            curr = 1;
        }
        ans = Math.max(ans, Math.min(prev, curr), curr >> 1);
    }

    return ans;
};

test('case 1', maxIncreasingSubarrays([2, 5, 7, 8, 9, 2, 3, 4, 3, 1]), 3);
test('case 2', maxIncreasingSubarrays([1, 2, 3, 4, 4, 4, 4, 5, 6, 7]), 2);
