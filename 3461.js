import test from './test.js';

var hasSameDigits = function (s) {
    const stack = s.split('').map((d) => Number(d));

    while (stack.length > 2) {
        for (let i = 1; i < stack.length; i++) {
            stack[i - 1] = (stack[i] + stack[i - 1]) % 10;
        }

        stack.pop();
    }

    return stack[0] === stack[1];
};

test('case 1', hasSameDigits('3902'), true);
test('case 2', hasSameDigits('34789'), false);
