import test from './test.js';

var replaceNonCoprimes = function (nums) {
    const stack = [];

    for (let num of nums) {
        while (stack.length) {
            const top = stack[stack.length - 1];
            const g = gcd(num, top);
            if (g === 1) break;
            num = lcm(num, stack.pop(), g);
        }
        stack.push(num);
    }

    return stack;
};

function gcd(a, b) {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}

function lcm(a, b, g) {
    return (a / g) * b;
}

test('case 1', replaceNonCoprimes([6, 4, 3, 2, 7, 6, 2]), [12, 7, 6]);
test('case 2', replaceNonCoprimes([2, 2, 1, 1, 3, 3, 3]), [2, 1, 1, 3]);
