import test from './test.js';

var maxFrequency = function (nums, k, numOperations) {
    const MAX_VAL = 1e5 + 1;
    const count = new Array(MAX_VAL).fill(0);
    let maxNum = 0;

    for (const num of nums) {
        count[num]++;
        maxNum = Math.max(maxNum, num);
    }

    const prefixSum = new Array(maxNum + 1).fill(0);

    for (let i = 1; i <= maxNum; i++) {
        prefixSum[i] = prefixSum[i - 1] + count[i];
    }

    let bestFreq = 0;

    for (let num = 1; num <= maxNum; num++) {
        const left = Math.max(1, num - k);
        const right = Math.min(maxNum, num + k);
        const totalInRange = prefixSum[right] - prefixSum[left - 1];
        const possibleIncreases = Math.min(
            numOperations,
            totalInRange - count[num]
        );
        bestFreq = Math.max(bestFreq, possibleIncreases + count[num]);
    }

    return bestFreq;
};

test('case 1', maxFrequency([1, 4, 5], 1, 2), 2);
test('case 2', maxFrequency([5, 11, 20, 20], 5, 1), 2);
