import test from './test.js';

var majorityElement = function (nums) {
    const n = nums.length;
    if (n === 1) {
        return nums;
    }
    let n1 = -1,
        n2 = -1,
        cnt1 = 0,
        cnt2 = 0;

    for (const num of nums) {
        if (num === n1) {
            cnt1++;
        } else if (num === n2) {
            cnt2++;
        } else if (cnt1 === 0) {
            cnt1 = 1;
            n1 = num;
        } else if (cnt2 === 0) {
            cnt2 = 1;
            n2 = num;
        } else {
            cnt1--;
            cnt2--;
        }
    }

    cnt1 = cnt2 = 0;
    for (const num of nums) {
        if (num === n1) {
            cnt1++;
        } else if (num === n2) {
            cnt2++;
        }
    }

    const res = [];
    if (cnt1 > Math.floor(n / 3)) res.push(n1);
    if (cnt2 > Math.floor(n / 3)) res.push(n2);

    return res;
};

test('case 1', majorityElement([3, 2, 3]), [3]);
test('case 2', majorityElement([1]), [1]);
test('case 3', majorityElement([1, 2]), [1, 2]);
