import test from './test.js';

var maxArea = function (height) {
    const n = height.length;
    let l = 0,
        r = n - 1;
    let max = 0;

    while (l < r) {
        const area = Math.min(height[l], height[r]) * (r - l);
        max = Math.max(max, area);

        if (height[l] < height[r]) {
            l++;
        } else {
            r--;
        }
    }

    return max;
};

test('case 1', maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]), 49);
test('case 2', maxArea([1, 1]), 1);
