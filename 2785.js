import test from './test.js';

var sortVowels = function (input) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    const chars = input.split('');
    
    const sortedVowels = chars
        .filter((ch) => vowels.has(ch.toLowerCase()))
        .sort();

    let vowelIndex = 0;
    for (let i = 0; i < chars.length; i++) {
        if (vowels.has(chars[i].toLowerCase())) {
            chars[i] = sortedVowels[vowelIndex++];
        }
    }

    return chars.join('');
};

test('case 3', sortVowels('EeOe'), 'EOee');
test('case 1', sortVowels('lEetcOde'), 'lEOtcede');
test('case 2', sortVowels('lYmpH'), 'lYmpH');
