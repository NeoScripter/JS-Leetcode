import test from './test.js';

var trap = function (height) {
    const n = height.length;
    if (n === 0) return 0;

    const left = Array(n).fill(0);
    const right = Array(n).fill(0);

    left[0] = height[0];
    for (let i = 1; i < n; i++) {
        left[i] = Math.max(left[i - 1], height[i]);
    }

    right[n - 1] = height[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        right[i] = Math.max(right[i + 1], height[i]);
    }

    const res = Array(n).fill(0);

    for (let i = 1; i < n - 1; i++) {
        res[i] = Math.min(right[i], left[i]) - height[i];
    }

    return res.reduce((sum, item) => sum + item, 0);
};

test('case 1', trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]), 6);
test('case 2', trap([4, 2, 0, 3, 2, 5]), 9);
