var findXSum = function (nums, k, x) {
    const n = nums.length,
        freq = new Map(),
        ans = [];

    let low = 0;

    for (let high = 0; high < n; high++) {
        const num = nums[high];
        freq.set(num, (freq.get(num) ?? 0) + 1);

        while (high - low + 1 > k) {
            freq.set(nums[low], freq.get(nums[low]) - 1);
            low++;
        }

        if (high - low + 1 === k) {
            const values = [...freq.entries()];
            values.sort((a, b) => b[1] - a[1] || b[0] - a[0]);

            ans.push(
                values
                    .slice(0, x)
                    .reduce((acc, [val, count]) => acc + val * count, 0)
            );
        }
    }

    return ans;
};
