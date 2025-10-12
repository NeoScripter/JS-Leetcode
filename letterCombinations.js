import test from './test.js';

var letterCombinations = function (nums) {
    if (nums.trim().length === 0) return [];

    const map = new Map([
        ['2', ['a', 'b', 'c']],
        ['3', ['d', 'e', 'f']],
        ['4', ['g', 'i', 'h']],
        ['5', ['j', 'k', 'l']],
        ['6', ['m', 'n', 'o']],
        ['7', ['p', 'q', 'r', 's']],
        ['8', ['t', 'u', 'v']],
        ['9', ['w', 'x', 'y', 'z']],
    ]);

    const ans = [];

    const comb = (i, curr) => {
        if (curr.length === nums.length) {
            ans.push(curr.join(""));
            return;
        }

        if (i >= nums.length) return;

        const digit = nums[i];

        for (let char of map.get(digit)) {
            curr.push(char);
            comb(i + 1, curr);
            curr.pop();
        }

        comb(i + 1, curr);
    };

    comb(0, []);

    return ans;
};

test('case 1', letterCombinations('23'), [
    'ad',
    'ae',
    'af',
    'bd',
    'be',
    'bf',
    'cd',
    'ce',
    'cf',
]);
test('case 2', letterCombinations(''), []);
test('case 3', letterCombinations('2'), ['a', 'b', 'c']);
test('case 4', letterCombinations('27'), [
    'ap',
    'aq',
    'ar',
    'as',
    'bp',
    'bq',
    'br',
    'bs',
    'cp',
    'cq',
    'cr',
    'cs',
]);
test('case 5', letterCombinations('234'), [
    'adg',
    'adh',
    'adi',
    'aeg',
    'aeh',
    'aei',
    'afg',
    'afh',
    'afi',
    'bdg',
    'bdh',
    'bdi',
    'beg',
    'beh',
    'bei',
    'bfg',
    'bfh',
    'bfi',
    'cdg',
    'cdh',
    'cdi',
    'ceg',
    'ceh',
    'cei',
    'cfg',
    'cfh',
    'cfi',
]);
test('case 6', letterCombinations('79'), [
    'pw',
    'px',
    'py',
    'pz',
    'qw',
    'qx',
    'qy',
    'qz',
    'rw',
    'rx',
    'ry',
    'rz',
    'sw',
    'sx',
    'sy',
    'sz',
]);
