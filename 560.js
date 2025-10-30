var subarraySum = function (nums, k) {
    let res = 0,
        sum = 0;
    const prefix = new Map();
    prefix.set(0, 1);

    for (const num of nums) {
        sum += num;
        const diff = sum - k;
        res += prefix.get(diff) ?? 0;
        prefix.set(sum, (prefix.get(sum) ?? 0) + 1);
    }

    return res;
};
