import test from './test.js';

var triangleNumber = function (nums) {
    nums.sort((a, b) => a - b);

    let count = 0;
    const n = nums.length;

    for (let k = n - 1; k >= 2; k--) {
        let i = 0,
            j = k - 1;
        while (i < j) {
            if (nums[i] + nums[j] > nums[k]) {
                count += j - i;
                j--;
            } else {
                i++;
            }
        }
    }

    return count;
};

test('case 1', triangleNumber([2, 2, 3, 4]), 3);
test('case 2', triangleNumber([4, 2, 3, 4]), 4);
