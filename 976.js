var largestPerimeter = function (nums) {
    nums.sort((a, b) => b - a);

    for (let i = 0; i < nums.length - 2; i++) {
        const [a, b, c] = [nums[i], nums[i + 1], nums[i + 2]];
        if (a < b + c) {
            return a + b + c;
        }
    }
    return 0;
};

function isValid(a, b, c) {
    return a + b > c && b + c > a && a + c > b;
}
