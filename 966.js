import test from './test.js';

var spellchecker = function (wordlist, queries) {
    const dict = new Set(wordlist);
    const normalized = new Map();
    const vowelMap = new Map();

    dict.forEach((w) => {
        const l = w.toLowerCase();
        if (!normalized.has(l)) {
            normalized.set(l, w);
        }
        const v = replaceVowels(l);
        if (!vowelMap.has(v)) {
            vowelMap.set(v, w);
        }
    });
    const ans = [];

    for (let word of queries) {
        // Case sensitive exact match
        if (dict.has(word)) {
            ans.push(word);
            continue;
        }

        word = word.toLowerCase();

        // Case insensitive match
        if (normalized.has(word)) {
            ans.push(normalized.get(word));
            continue;
        }

        // Vowel case insensitive match
        const v = replaceVowels(word);
        if (vowelMap.has(v)) {
            ans.push(vowelMap.get(v));
            continue;
        }

        ans.push('');
    }

    return ans;
};

function replaceVowels(word) {
    return word.replaceAll(/[aeiou]/g, '*');
}

test(
    'case 1',
    spellchecker(
        ['KiTe', 'kite', 'hare', 'Hare'],
        [
            'kite',
            'Kite',
            'KiTe',
            'Hare',
            'HARE',
            'Hear',
            'hear',
            'keti',
            'keet',
            'keto',
        ]
    ),
    ['kite', 'KiTe', 'KiTe', 'Hare', 'hare', '', '', 'KiTe', '', 'KiTe']
);
test('case 2', spellchecker(['yellow'], ['YellOw']), ['yellow']);
