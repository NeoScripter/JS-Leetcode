import test from './test.js';

function keywordCipher(key, message) {
    const ciph = key.split(''),
        plain = Array(26).fill('');
    const map = new Map();

    for (let i = 0; i < 26; i++) {
        const code = 'a'.charCodeAt(0) + i;
        const char = String.fromCharCode(code);

        if (!key.includes(char)) {
            ciph.push(char);
        }
        plain[i] = char;
    }

    for (let i = 0; i < 26; i++) {
        map.set(plain[i], ciph[i]);
    }

    return message
        .split('')
        .map((c) => map.get(c))
        .join('');
}

test('case 1', keywordCipher('keyword', 'abchij'), 'keyabc');
test('case 2', keywordCipher('purplepineapple', 'abc'), 'pur');
test('case 3', keywordCipher('mubashir', 'edabit'), 'samucq');
test('case 4', keywordCipher('etaoinshrdlucmfwypvbgkjqxz', 'abc'), 'eta');
test('case 5', keywordCipher('etaoinshrdlucmfwypvbgkjqxz', 'xyz'), 'qxz');
test('case 6', keywordCipher('etaoinshrdlucmfwypvbgkjqxz', 'aeiou'), 'eirfg');
