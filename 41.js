var firstMissingPositive = function (nums) {
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        if (nums[i] < 0) {
            nums[i] = 0;
        }
    }

    for (let i = 0; i < n; i++) {
        const val = Math.abs(nums[i]);
        if (val > 0 && val <= n) {
            if (nums[val - 1] > 0) {
                nums[val - 1] *= -1;
            } else if (nums[val - 1] === 0) {
                nums[val - 1] = -1 * (n + 1);
            }
        }
    }

    for (let i = 1; i <= n; i++) {
        if (nums[i - 1] >= 0) {
            return i;
        }
    }

    return n + 1;
};
