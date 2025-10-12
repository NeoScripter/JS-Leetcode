import test from './test.js';

function flatArray(arr, maxLevel = Infinity) {
    const ans = [];

    const dfs = (arr, level) => {
        for (let val of arr) {
            if (Array.isArray(val) && level < maxLevel) {
                dfs(val, level + 1);
            } else {
                ans.push(val);
            }
        }
    };

    dfs(arr, 0);
    return ans;
}

test('case 1', flatArray([1, 2, 3, [4], 5]), [1, 2, 3, 4, 5]);
test('case 2', flatArray([[1, 2], [3, 4], [5]]), [1, 2, 3, 4, 5]);
test('case 3', flatArray([1, [2, [3, [4]]]]), [1, 2, 3, 4]);
test('case 4', flatArray([]), []);
test('case 5', flatArray([1, 2, 3]), [1, 2, 3]);
test('case 6', flatArray([[[1]], [[2]], [[3]]], 1), [[1], [2], [3]]);
