import test from './test.js';

var isMatch = function (s, p) {
    const len1 = s.length,
        len2 = p.length;

    function dfs(i, j) {
        if (j === len2) return i === len1;

        const char = s[i],
            reg = p[j];

        const firstMatch = i < len1 && (char === reg || reg === '.');

        if (j + 1 < len2 && p[j + 1] === '*') {
            let skip = false;

            skip ||= dfs(i, j + 2);

            if (firstMatch) {
                skip ||= dfs(i + 1, j);
            }

            return skip;
        } else {
            return firstMatch && dfs(i + 1, j + 1);
        }
    }

    return dfs(0, 0);
};

test('case 1', isMatch('aa', 'a'), false);
test('case 2', isMatch('aa', 'a*'), true);
test('case 3', isMatch('ab', '.*'), true);
