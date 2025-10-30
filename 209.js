var minSubArrayLen = function (target, nums) {
    const n = nums.length;
    let min = Infinity,
        sum = 0,
        l = 0;

    for (let r = 0; r < n; r++) {
        while (sum >= target) {
            min = Math.min(min, r - l + 1);
            sum -= nums[l];
            l++;
        }

        sum += nums[r];
    }

    if (min === Infinity) return 0;

    return min;
};
