var fourSum = function (nums, target) {
    const n = nums.length;

    nums.sort((a, b) => a - b);
    const res = [],
        quad = [];

    const kSum = (k, start, trg) => {
        if (k === 2) {
            let l = start,
                r = n - 1;

            while (l < r) {
                const sum = nums[l] + nums[r];
                if (sum < trg) {
                    l++;
                } else if (sum > trg) {
                    r--;
                } else {
                    res.push([...quad, nums[l], nums[r]]);
                    r--;
                    l++;
                    while (l < r && nums[l] === nums[l - 1]) l++;
                    while (l < r && nums[r] === nums[r + 1]) r--;
                }
            }
            return;
        }

        for (let i = start; i < n - k + 1; i++) {
            if (i > start && nums[i] === nums[i - 1]) continue;
            quad.push(nums[i]);
            kSum(k - 1, i + 1, trg - nums[i]);
            quad.pop();
        }
    };

    kSum(4, 0, target);

    return res;
};
