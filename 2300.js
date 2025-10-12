import test from './test.js';

var successfulPairs = function (spells, potions, success) {
    potions.sort((a, b) => a - b);
    const n = spells.length,
        m = potions.length;
    const ans = Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        const num = spells[i];

        let low = 0,
            high = m - 1;

        while (low <= high) {
            const mid = (low + high) >> 1;

            if (potions[mid] * num >= success) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }

        ans[i] = m - low;
    }
    return ans;
};

test('case 1', successfulPairs([5, 1, 3], [1, 2, 3, 4, 5], 7), [4, 0, 3]);
test('case 2', successfulPairs([3, 1, 2], [8, 5, 8], 16), [2, 0, 2]);
