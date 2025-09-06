import test from './test.js';

function convertToTItle(num) {
    const result = [];

    while (num > 0) {
        const mod = num % 26;

        if (mod === 0) {
            result.push('Z');
            num--;
        } else {
            result.push(String.fromCharCode(65 + mod - 1));
        }

        num = Math.floor(num / 26);
    }

    return result.reverse().join('');
}

test('case 1', convertToTItle(1), 'A');
test('case 2', convertToTItle(18), 'R');
test('case 3', convertToTItle(28), 'AB');
test('case 4', convertToTItle(52), 'AZ');
test('case 5', convertToTItle(701), 'ZY');
test('case 6', convertToTItle(229704), 'MATT');
test('case 6', convertToTItle(209380622941), 'ZATOICHI');
