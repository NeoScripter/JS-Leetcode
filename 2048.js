import test from './test.js';

var nextBeautifulNumber = function (n) {
    const check = (num) => {
        const freq = new Map();

        while (num > 0) {
            const digit = num % 10;
            freq.set(digit, (freq.get(digit) ?? 0) + 1);
            num = Math.floor(num / 10);
        }
        for (const [digit, fre] of freq.entries()) {
            if (fre !== digit) return false;
        }
        return true;
    };

    n++;
    while (!check(n)) {
        n++;
    }

    return n;
};

test('case 1', nextBeautifulNumber(1), 22);
test('case 2', nextBeautifulNumber(1000), 1333);
test('case 3', nextBeautifulNumber(3000), 3133);
