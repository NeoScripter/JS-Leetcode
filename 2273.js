import test from './test.js';

var removeAnagrams = function (words) {
    if (words.length === 0) return [];

    const areAnagrams = (src, target) => {
        const map = new Map();

        for (const char of src) {
            map.set(char, (map.get(char) ?? 0) + 1);
        }

        for (const char of target) {
            if (!map.has(char)) return false;
            if (map.get(char) === 0) return false;

            map.set(char, map.get(char) - 1);

            if (map.get(char) === 0) map.delete(char);
        }

        return map.size === 0;
    };

    const ans = [words[0]];

    for (let i = 1; i < words.length; i++) {
        if (!areAnagrams(ans.at(-1), words[i])) {
            ans.push(words[i]);
        }
    }

    return ans;
};

test('case 1', removeAnagrams(['abba', 'baba', 'bbaa', 'cd', 'cd']), [
    'abba',
    'cd',
]);
test('case 2', removeAnagrams(['a', 'b', 'c', 'd', 'e']), [
    'a',
    'b',
    'c',
    'd',
    'e',
]);
