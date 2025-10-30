var countValidSelections = function (nums) {
    const n = nums.length;

    const isValid = (pos, dir, arr) => {
        while (pos >= 0 && pos < n) {
            if (arr[pos] === 0) {
                pos += dir;
            } else if (arr[pos] > 0) {
                arr[pos]--;
                dir = dir === 1 ? -1 : 1;
                pos += dir;
            }
        }

        return arr.every((num) => num === 0) ? 1 : 0;
    };

    let valid = 0;
    for (let i = 0; i < n; i++) {
        if (nums[i] === 0) {
            valid += isValid(i, 1, [...nums]) + isValid(i, -1, [...nums]);
        }
    }

    return valid;
};
